/* Kangdi Wang — site scripts
   Modules: theme controller, mobile nav, simulated mel-spectrogram,
   paper-cover facsimile generator, waveform mini-bars, generic carousel,
   trajectory stream. Vanilla JS, no dependencies. */
(function () {
  'use strict';

  /* ---------- theme controller ---------- */
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  if (toggle) {
    var label = toggle.querySelector('.toggle-label');
    var syncToggle = function () {
      var t = root.dataset.theme;
      toggle.setAttribute('aria-pressed', String(t === 'studio'));
      if (label) label.textContent = t === 'studio' ? 'Dark' : 'Light';
    };
    toggle.addEventListener('click', function () {
      var next = root.dataset.theme === 'studio' ? 'paper' : 'studio';
      root.dataset.theme = next;
      try { localStorage.setItem('kw-theme', next); } catch (e) {}
      syncToggle();
    });
    syncToggle();
  }

  /* enable theme transitions only after first paint */
  window.requestAnimationFrame(function () {
    window.requestAnimationFrame(function () {
      root.classList.add('theme-anim');
    });
  });

  /* ---------- mobile navigation ---------- */
  var navToggle = document.getElementById('nav-toggle');
  var siteNav = document.getElementById('site-nav');
  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      var open = siteNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
  }

  /* ---------- deterministic PRNG helper ---------- */
  var prng = function (seed) {
    var s = seed >>> 0;
    return function () { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
  };

  /* ---------- simulated mel-spectrogram (deterministic) ---------- */
  var STOPS = [[11, 4, 5], [59, 15, 79], [130, 38, 129], [212, 71, 66], [251, 136, 97], [252, 253, 191]];
  function magma(t) {
    t = t < 0 ? 0 : t > 0.999 ? 0.999 : t;
    var n = STOPS.length - 1, i = Math.floor(t * n), f = t * n - i;
    var a = STOPS[i], b = STOPS[i + 1];
    return 'rgb(' + Math.round(a[0] + (b[0] - a[0]) * f) + ',' +
           Math.round(a[1] + (b[1] - a[1]) * f) + ',' +
           Math.round(a[2] + (b[2] - a[2]) * f) + ')';
  }
  function drawSpectrogram() {
    var c = document.getElementById('spec-canvas');
    if (!c) return;
    var dpr = window.devicePixelRatio || 1;
    var w = c.clientWidth, h = c.clientHeight;
    if (!w || !h) return;
    c.width = w * dpr; c.height = h * dpr;
    var ctx = c.getContext('2d');
    ctx.scale(dpr, dpr);
    var rnd = prng(20260831);
    var cw = 3, ch = 3, cols = Math.ceil(w / cw), rows = Math.ceil(h / ch);
    /* three glissando fundamentals with harmonics + percussive vertical transients */
    var voices = [
      { f: 0.16, wig: 2.2, ph: 0.0, amp: 0.90 },
      { f: 0.34, wig: 1.6, ph: 1.9, amp: 0.70 },
      { f: 0.52, wig: 1.1, ph: 4.1, amp: 0.50 }
    ];
    var beats = [0.12, 0.30, 0.47, 0.63, 0.80, 0.93];
    for (var i = 0; i < cols; i++) {
      var x = i / cols;
      var env = Math.sin(Math.PI * Math.min(1, Math.max(0, x * 1.15 - 0.05)));
      for (var j = 0; j < rows; j++) {
        var y = 1 - j / rows; /* bottom = low frequency */
        var v = 0.02 + 0.05 * rnd();
        for (var k = 0; k < voices.length; k++) {
          var r = voices[k];
          var fc = r.f + 0.05 * Math.sin(2 * Math.PI * r.wig * x + r.ph);
          for (var hh = 1; hh <= 4; hh++) {
            var fH = fc * hh;
            if (fH > 0.98) break;
            var d = y - fH, sig = 0.006 + 0.004 * hh;
            v += r.amp * (0.9 / hh) * Math.exp(-(d * d) / (2 * sig * sig)) * env;
          }
        }
        for (var b = 0; b < beats.length; b++) {
          var dx = x - beats[b];
          v += 0.55 * Math.exp(-(dx * dx) / (2 * 0.0006)) * (1.15 - y);
        }
        ctx.fillStyle = magma(Math.min(1, v));
        ctx.fillRect(i * cw, j * ch, cw, ch);
      }
    }
  }
  drawSpectrogram();
  var rsTimer = null;
  window.addEventListener('resize', function () {
    clearTimeout(rsTimer);
    rsTimer = setTimeout(drawSpectrogram, 180);
  });

  /* ---------- paper first-page cover facsimiles (decorative, deterministic) ---------- */
  document.querySelectorAll('.cover--bg[data-mast]').forEach(function (el) {
    var seed = parseInt(el.getAttribute('data-seed'), 10) || 7;
    var rnd = prng(seed);
    var bar = function (min, max) {
      return '<i style="width:' + Math.round(min + rnd() * (max - min)) + '%"></i>';
    };
    var cols = function (short) {
      return '<div class="cover-cols' + (short ? ' cover-cols--short' : '') + '">' +
             '<span class="cover-col"></span><span class="cover-col"></span></div>';
    };
    var fig = '<div class="cover-fig"></div>';
    var titleBars = 2 + (seed % 2);
    var html = '<div class="cover-page"><span class="cover-mast">' +
               el.getAttribute('data-mast') + '</span><div class="cover-title">';
    for (var t = 0; t < titleBars; t++) html += bar(52, 96);
    html += '</div><div class="cover-authors">' + bar(38, 66) + '</div>';
    var pattern = seed % 3;
    if (pattern === 0) html += cols(false) + fig + cols(true) + cols(true);
    else if (pattern === 1) html += cols(false) + cols(true) + fig;
    else html += fig + cols(false) + cols(true);
    html += '</div><span class="scanline" aria-hidden="true"></span>';
    el.innerHTML = html;
  });

  /* ---------- waveform mini-bars for snapshot facsimiles (deterministic per element) ---------- */
  document.querySelectorAll('.js-bars').forEach(function (strip) {
    var rnd = prng(parseInt(strip.getAttribute('data-seed'), 10) || 7);
    var bars = 30, html = '', prev = 0.35;
    for (var b = 0; b < bars; b++) {
      var r = rnd();
      var env = Math.sin(Math.PI * b / (bars - 1)); /* fade both ends */
      var hpx = Math.max(2, Math.round((prev * 0.55 + r * 0.45) * env * 20));
      prev = r;
      html += '<i style="height:' + hpx + 'px"></i>';
    }
    strip.innerHTML = html;
  });

  /* ---------- carousel organism (generic, multi-instance) ----------
     Every [data-carousel] gets: prev/next buttons ([data-carousel-prev/next]),
     arrow-key scrolling when the rail is focused, and optional filter tabs
     (.carousel-filter[data-filter] matched against card[data-topics]). */
  document.querySelectorAll('[data-carousel]').forEach(function (carRoot) {
    var rail = carRoot.querySelector('.carousel-rail');
    if (!rail) return;
    var cards = Array.prototype.slice.call(rail.children);
    var filters = Array.prototype.slice.call(carRoot.querySelectorAll('.carousel-filter'));
    var prevBtn = carRoot.querySelector('[data-carousel-prev]');
    var nextBtn = carRoot.querySelector('[data-carousel-next]');

    var updateNav = function () {
      if (!prevBtn || !nextBtn) return;
      prevBtn.disabled = rail.scrollLeft <= 4;
      nextBtn.disabled = rail.scrollLeft >= rail.scrollWidth - rail.clientWidth - 4;
    };
    var step = function () {
      for (var i = 0; i < cards.length; i++) {
        if (cards[i].style.display !== 'none') return cards[i].offsetWidth + 18;
      }
      return 390;
    };
    var go = function (dir) { rail.scrollBy({ left: dir * step(), behavior: 'smooth' }); };

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', function () { go(-1); });
      nextBtn.addEventListener('click', function () { go(1); });
      rail.addEventListener('scroll', updateNav, { passive: true });
      window.addEventListener('resize', updateNav);
      updateNav();
    }
    rail.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
      if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
    });

    filters.forEach(function (pill) {
      pill.addEventListener('click', function () {
        if (pill.classList.contains('is-active')) return;
        filters.forEach(function (p) {
          p.classList.remove('is-active');
          p.setAttribute('aria-selected', 'false');
        });
        pill.classList.add('is-active');
        pill.setAttribute('aria-selected', 'true');
        var f = pill.getAttribute('data-filter');
        rail.classList.add('is-switching');
        setTimeout(function () {
          cards.forEach(function (c) {
            var topics = (c.getAttribute('data-topics') || '').split(' ');
            c.style.display = (f === 'all' || topics.indexOf(f) !== -1) ? '' : 'none';
          });
          rail.scrollLeft = 0;
          updateNav();
          rail.classList.remove('is-switching');
        }, 220);
      });
    });
  });

  /* ---------- trajectory stream (hover/focus/click detail switching) ---------- */
  document.querySelectorAll('[data-tlx]').forEach(function (tlx) {
    var pts = Array.prototype.slice.call(tlx.querySelectorAll('[data-tlx-point]'));
    var dets = Array.prototype.slice.call(tlx.querySelectorAll('[data-tlx-detail]'));
    var activate = function (id) {
      pts.forEach(function (p) { p.classList.toggle('is-active', p.getAttribute('data-tlx-point') === id); });
      dets.forEach(function (d) { d.classList.toggle('is-active', d.getAttribute('data-tlx-detail') === id); });
    };
    pts.forEach(function (p) {
      var id = p.getAttribute('data-tlx-point');
      p.addEventListener('mouseenter', function () { activate(id); });
      p.addEventListener('focus', function () { activate(id); });
      p.addEventListener('click', function () { activate(id); });
    });
  });
})();
