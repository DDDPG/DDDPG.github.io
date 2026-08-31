# Kangdi Wang 个人学术网站 · 设计规格书

> 日期：2026-08-31 ｜ 目标仓库：`DDDPG/DDDPG.github.io`（GitHub Pages 用户站）｜ 状态：设计稿，未实现
>
> 依据文档：
> - `docs/kangdi_wang_github_io_profile_source.md`（事实源：身份、作品、链接、编辑准则）
> - `docs/kangdi_wang_personal_website_narrative_framework.md`（叙事框架：身份→研究→作品→背景）
> - al-folio 参考（仅借鉴信息架构与学术站惯例，禁止直接套用）
>
> 注意：`docs/` 已在 `.gitignore` 中，本规格书不会进入公开仓库历史。

---

## 0. 方案取舍（头脑风暴结论）

在三个候选方向中做选择：

| 方向 | 说明 | 取舍 |
|---|---|---|
| A. 直接 fork al-folio 换皮 | 最快上线 | **否决**。违反硬性约束；13k fork 的通用面孔；与本设计目标冲突 |
| B. 纯手写静态 HTML/CSS/JS | 零构建、最自由 | 否决。publications/news 需手工维护，违背叙事框架 §27"更新机制"（改数据不改模板） |
| C. **自研 Jekyll 站点，借鉴 al-folio 惯例**（jekyll-scholar 文献驱动、`_data` 驱动 CV、collections 驱动 news/projects、明暗双主题），视觉系统从零设计 | 内容驱动 + 完全设计自由 + GitHub Pages 原生 | **采纳** |

视觉概念候选：①"频谱编辑物"（spectrogram editorial）②"调音台/DAW 拟物" ③"通用极简学术"。采纳 ①——它直接来自本人的研究签名（perceptual + **frequency-aware** neural audio representation），②有玩物感风险，③即通用 AI 审美，均否决。

---

## 1. 整体页面格式 / 信息架构（IA）

### 1.1 站点地图与路由

```
/                首页（= About，承担 10 秒/30 秒/2 分钟三层阅读路径）
/research/       研究（叙事主线、五部作品、研究哲学、能力结构、来路）
/publications/   论著（BibTeX 驱动的完整列表 + Selected 标记 + Scholar 出口）
/projects/       项目与开源（DDDPG / εar-LAB 双重身份 + 工程项目）
/cv/             履历（_data/cv.yml 渲染 + PDF 下载 + 教育/经历）
/404.html        404（"无信号"彩蛋页）
/feed.xml /sitemap.xml /robots.txt   自动生成
```

### 1.2 导航与页脚

顶栏（细线分割、等宽字体小标签、右侧主题切换）：

`Kangdi Wang`（字标，回首页） ｜ Research · Publications · Projects · CV

- 只用 4 个条目 + 字标，不用下拉菜单（al-folio 的 dropdown 砍掉）。
- About 即首页，不单列；Experience 并入 `/cv/`；Open Source 作为 `/projects/` 的核心章节与首页横带，不单列路由——因为 εar-LAB/DDDPG 的双重身份叙事在"项目"语境里讲得最完整。
- Contact 不成页，收进页脚与首页 hero 的链接组。

页脚三栏：左 = 站内导航；中 = 外部链接（GitHub DDDPG、εar-LAB、Google Scholar、邮箱 TBD）；右 = 等宽字体 colophon（© 2026 Kangdi Wang · Built with Jekyll · 部署于 GitHub Pages）。

### 1.3 al-folio 页面类型：保留 / 舍弃 / 合并 / 新创

**保留（惯例层面，视觉全部重做）：**
- `about`（首页 = 身份 + 简介 + 动态 + 精选作品）——保留职责，废弃其版式（al-folio 左侧头像卡片 + 社交图标行的布局不用）
- `publications`：保留 **jekyll-scholar + `_bibliography/papers.bib`** 的 BibTeX 驱动机制（al-folio 最值得继承的资产），列表视觉重设计
- `news` collection：保留机制，改名为视觉模块 **Signal Log（信号日志）**，只在首页出现，不成独立页
- `cv`：保留 `_data/cv.yml` 数据驱动渲染
- 明暗双主题（跟随系统 + 手动切换 + localStorage 持久化）、jekyll-seo-tag / sitemap / feed / OG 与 schema.org 元数据

**舍弃：** blog（含 distill 布局）、books、teaching/teachings、people/profiles、repositories 页、下拉导航、评论（giscus/disqus）、newsletter、cookie 横幅、citation/altmetric 徽章、ctrl-K 全站搜索（站点规模小，YAGNI；预留接口以后再开）。al-folio v1 的插件 gem 体系不引入，保持依赖最小。

**合并：** `repositories` 页并入 `/projects/`（GitHub 卡片降级为项目卡内的链接，不整页渲染 github-stats）。

**新创（al-folio 没有、由叙事框架驱动）：**
1. **Research Chain 研究主线图**——把 `Understand → Represent → Generate → Reconstruct` 画成一条"频率轴"式水平链，节点挂五部作品（对应叙事框架 §3）
2. **角色徽章系统 role-chip**——First Author / Co-First Author / Second Author / Co-author，严格对齐论文正式署名（编辑准则 §25：可核验事实 > 个人叙述）
3. **双重开源身份面板 duo-panel**——左 DDDPG（Personal Builder）右 εar-LAB（Research Initiative），对应叙事框架 §9
4. **作品金字塔版式**——第一层两部签名作大卡，第二层产业研究、第三层多模态、第四层协作研究依次降权（叙事框架 §5）
5. **404 "No Signal" 页**——一条平直波形线 + "no signal detected"（等宽字体），点题音频领域

### 1.4 首页内容模块（全部映射到 docs 事实，不虚构）

按叙事框架 §19 的视觉权重（研究身份 > 研究作品 > 开源能力 > 履历背景）自上而下：

1. **Hero**：`Kangdi Wang`（特大衬线字标）→ `Audio AI Researcher & Builder` → `Music Generation · Neural Audio Representation · Generative Audio` → 引言 *"Building AI systems that understand, represent, and create sound."* → 链接组（Google Scholar / GitHub / εar-LAB / Email TBD）。背景饰带 = 频谱图艺术带（见 §2.6）。**不使用头像照片**（docs 未提供照片，设计上规避该依赖）。
2. **Signal Log**：3–4 条最新动态，等宽日期 + 一句话，例如 "CineDub was accepted to ACM Multimedia 2026."、"ear-VAE2 (Fourier is Frontier) is now on arXiv."——均出自资料源 §11。
3. **Research Chain**：研究主线图 + 叙事框架 §3.2 的"问题演化"五问（How do we reconstruct sound faithfully? → … → How can audio generation become multimodal?）。
4. **Selected Research（金字塔前两层）**：εar-VAE（Back to Ear, arXiv 2509.14912, First Author）与 ear-VAE2（Fourier is Frontier, arXiv 2608.19843, First Author）两张大卡；其下 Qwen-Music（arXiv 2607.11699, Second Author）、CineDub（ACM MM 2026 共同一作，项目页 cinedub2026.github.io）、DUO-TOK（arXiv 2511.20224, Co-author）三条紧凑行。每部作品固定四层写作结构：标题 / 角色徽章 / 一句话研究描述 / 3–6 个概念词（叙事框架 §6）。
5. **Research Philosophy 引文块**：*"What matters is not only what a model can optimize, but what a listener can actually perceive."*（资料源 §4.1）
6. **Open Source 横带**：duo-panel 简版（DDDPG = 个人研究与工程；εar-LAB = 开放研究计划），进入 `/projects/`。
7. **页脚**。

### 1.5 子页面内容映射

- **`/research/`**：完整研究陈述（资料源 §5 长版 About）、研究主线详图、五部作品各按 **Problem → Idea → Impact** 模板展开（叙事框架 §16）、按研究功能分组的能力表（ML / Audio·Speech / Engineering / Audio Software，落点为 "DSP + ML + Audio Engineering"，资料源 §15）、来路桥段 *"My path into Audio AI began with a combination of robotics, speech synthesis, digital signal processing, and practical audio engineering."*（§16 早期背景 + §10 教育桥接，含毕设导师 Matthew Aylett 与 CereProc 语音合成经历）。
- **`/publications/`**：`papers.bib` 渲染，按年份分组；Selected 标记；每条条目 = 作者（Kangdi Wang 加粗）/ 标题 / 会议或 arXiv / 角色徽章 / 链接组（PDF·arXiv·Project·BibTeX 复制）；顶部一行出口 "Full list on Google Scholar ↗"（user=2M2od3sAAAAJ）。五条 BibTeX 记录直接来自资料源 §20。
- **`/projects/`**：duo-panel 完整版 + 项目卡组：EAR_VAE（感知驱动高保真音乐重建的开源实现）、EAR-Audio-Preview（VS Code 专业音频分析预览工具，体现 Researcher+Engineer+Builder）、ReaperDoc（REAPER .RPP 工程文件知识库）。
- **`/cv/`**：工程与技术背景（机器人学与控制系统、DSP、数值优化）、研究/产业经历标签（Industrial AI Research · Large-Scale Music Generation · Audio Foundation Models）、论著自动引用、技能分组；PDF 下载位（文件 TBD，见 §5 未决问题）。

---

## 2. 视觉风格设计

### 2.1 设计命题

**"一份可听的档案"（An Audible Archive）**：把站点当作一页纸的频谱图来排版——横轴是时间（研究主线），纵轴是频率（研究层次）。视觉语言直接取自本人的研究签名"perceptual + frequency-aware neural audio representation"：频谱图是唯一装饰母题，编辑级排版是主体。整体气质：**编辑物的克制 × 示波器的精确**，语气学术、直接、零营销词（叙事框架 §23）。

让人记住的一件事：首屏那条从左到右被"播放头"扫过的频谱带，与论文行悬停时扫过的同一条细线——全站只有这一种动效语言，即"扫描/播放"。

### 2.2 字体排印

- **展示字体：Fraunces**（variable，opsz 144，wght 560–640，字距 -0.02em）——姓名、页面大标题。有光学尺寸的旧式衬线，提供编辑物权威感，避开一切"科技无衬线"陈规。
- **正文：Spectral**（400/500/600 + italic，1.0625rem / 行高 1.7）——为屏幕阅读设计的衬线，且名字本身就是"频谱"，与主题互为注解。
- **数据/标签：IBM Plex Mono**（400/500，0.8rem，大写 + 字距 0.08em）——日期、角色徽章、arXiv 编号、坐标刻度、colophon。制造"仪器读数"质感。
- **CJK 回退**：`"Noto Serif SC", "Songti SC", serif`（站点以英文为主，中文仅兜底；docs 全部文案均为英文）。
- 规模：hero 姓名 `clamp(3rem, 8vw, 6.5rem)`；页标题 2.5rem；节标题 1.5rem；正文 1.0625rem。
- 明确不用：Inter / Roboto / Arial / Space Grotesk / 系统默认栈直出。

### 2.3 色彩（CSS 变量，双主题）

亮色 "Paper"（默认）：
```
--bg: #FAF8F4   暖纸面      --surface: #F2EEE6   卡片底
--ink: #14161A  墨色        --ink-2: #5A5F66     次级文字
--line: #E3DED4 发丝线      --signal: #E8490F    信号橙（唯一强调色）
```
暗色 "Studio"：
```
--bg: #0C0E12   录音棚黑    --surface: #14171D
--ink: #EDEBE6  暖白        --ink-2: #9AA0A8
--line: #262B33             --signal: #FF6B2C    提亮后的信号橙
```
频谱艺术带专用色阶（magma 衍生，**仅限该图形，不进 UI**）：`#0B0405 → #3B0F4F → #822681 → #D44742 → #FB8861 → #FCFDBF`。

纪律：全站一个强调色 `--signal`，用于链接、播放头、徽章描边、当前导航态；不做紫渐变、不做彩虹分区。对比度按 WCAG AA 校验（正文 ≥ 4.5:1）。

### 2.4 空间与网格

- 桌面：12 列网格，内容最大宽 1180px，沟槽 24px，间距基数 8px。
- 非对称编辑版式：`/research/`、`/publications/` 采用左侧元信息轨（1–3 列，等宽字体年份/类别刻度）+ 右侧内容（4–12 列）；首页 hero 名字通栏横跨，制造刊头感。
- 大量留白：节间距 96–128px（桌面）；列表用发丝线分隔而非卡片墙——al-folio 的圆角卡片网格是重点规避对象。

### 2.5 动效（全部 CSS 优先，可无 JS 降级）

1. **编排式入场（一次）**：频谱带以一条 1px 播放头线从左扫到右（900ms）显形；姓名 → 头衔 → 关键词 → 引言依次错峰 80ms 淡入上移。
2. **悬停播放头**：论著/作品行悬停时，一条 `--signal` 细线扫过行首，标题微移 2px。
3. **链接下划线**：从左生长（包络线意象），全站统一。
4. **滚动绘线**：Research Chain 的轴线随滚动用 IntersectionObserver + CSS transform 绘出。
5. `prefers-reduced-motion` 一律关闭动画；无 WebGL、无重型库。

### 2.6 组件清单

`site-nav`（含主题切换 sun/moon）· `hero-spectrogram`（masthead + 频谱带，频谱图建议用脚本从一段真实音乐生成 mel-spectrogram 静态 SVG/PNG，真实感远胜手画装饰）· `identity-block` · `signal-log` · `research-chain` · `work-card--signature`（签名作大卡）· `work-row`（紧凑作品行）· `role-chip` · `pub-list`（jekyll-scholar 输出重排）· `duo-panel`（DDDPG × εar-LAB）· `project-card`（顶部一条波形细带作缩略图）· `experience-timeline`（克制、置于 CV 页低位）· `site-footer` · `404-no-signal`。

### 2.7 响应式

- ≥1024px：上述 12 列与元信息轨。768–1023px：元信息轨收起为行内等宽前缀。<768px：单列；hero 姓名降至 `clamp(2.5rem, 12vw, 4rem)`；频谱带高度减半；导航折叠为字标 + 主题键 + 菜单键；作品金字塔退化为单列流（权重靠尺寸与次序维持）。触控目标 ≥44px。

### 2.8 与 al-folio 的可见差异（防"换皮"判定）

al-folio 首页 = 左头像卡 + 右简介 + news 表 + 社交图标排；本站 = 通栏刊头 + 频谱带 + 研究主线图，无头像依赖。al-folio 项目 = 均权卡片网格；本站 = 叙事加权金字塔。al-folio 论著 = 徽章按钮堆叠的学术列表；本站 = 元信息轨 + 角色徽章 + 播放头交互的"研究记录"。al-folio 主题色 = 单色变量换肤；本站 = 双主题 + 单一信号色纪律 + magma 艺术色阶。字体从根上不同（Fraunces/Spectral/Plex Mono vs 其默认无衬线栈）。

---

## 3. 技术方案（GitHub Pages）

### 3.1 推荐栈

**Jekyll 4.x 自研主题（不 fork al-folio）+ GitHub Actions 构建部署。**

- 目录约定：`_layouts/`（default/page/post 不用）、`_includes/`（组件化）、`_data/`（`profile.yml`、`cv.yml`、`nav.yml`）、`_news/`、`_bibliography/papers.bib`、`_pages/`、`assets/`（css/js/img/fonts）、`_sass/`。
- 插件：`jekyll-scholar`（论著）、`jekyll-seo-tag`、`jekyll-sitemap`、`jekyll-feed`。
- **必须用 Actions 构建而非 Pages 经典构建**：jekyll-scholar 不在 Pages 白名单插件内。流程：`ruby/setup-ruby`（bundler-cache）→ `bundle exec jekyll build` → `actions/upload-pages-artifact` → `actions/deploy-pages`。这正是 al-folio 现行的部署模型，照搬其管道、不照搬其代码。
- 静态资源零框架：原生 CSS（自定义属性 + 少量现代布局），原生 JS 仅一处（主题切换 + 滚动绘线，<3KB）；不用 Bootstrap/Tailwind/jQuery——这也是与 al-folio 运行时的切割点。

### 3.2 域名 / CNAME / 仓库名

- 仓库名 `DDDPG.github.io` 即用户站，默认地址 `https://dddpg.github.io`，`url` 按此配置、`baseurl: ""`。
- 当前**无 CNAME**。若日后购自定义域名（如 kangdiwang.com 之类，需用户确认）：根目录加 `CNAME` 文件 → DNS 配 A/ALIAS 与 CNAME → Pages 设置勾选 **Enforce HTTPS**。
- 仓库卫生：根目录存在误建文件 `,gitignore`（逗号开头，未跟踪），建议删除；`.gitignore` 当前忽略 `docs/`，意味着资料源不会公开——确认这是有意为之。

### 3.3 `_config.yml` 必须定制的字段（值均取自 docs）

```yaml
title: Kangdi Wang
description: >-
  Audio AI researcher working on music generation, neural audio
  representation, and high-fidelity sound synthesis.
tagline: Building AI systems that understand, represent, and create sound.
url: "https://dddpg.github.io"
baseurl: ""
github_username: DDDPG
scholar_userid: 2M2od3sAAAAJ
lab_github_org: Eps-Acoustic-Revolution-Lab
keywords: Audio AI, Music Generation, Generative Audio, Neural Audio
  Representation, High-Fidelity Audio Synthesis, Music Tokenization,
  Neural Audio Codecs, Multimodal Audio
lang: en
email: TBD            # 未决，见 §5
```
`_data/profile.yml` 直接落资料源 §28 的 Canonical Data Object（姓名/别名/头衔/五个 selected_work 及其角色与链接/实验室使命），页面全部读数据，正文不硬编码——满足叙事框架 §27 的更新机制。动态指标（引用数、GitHub 统计）一律不硬编码进简历（资料源 §27 明确要求）。

### 3.4 主题、资产、字体、性能

- 明暗主题：`data-theme` 属性 + `prefers-color-scheme` 默认 + localStorage 记忆（惯例借自 al-folio，实现自写）。
- 字体：Google Fonts 自托管 woff2（Fraunces 可变字重子集、Spectral 三字重、IBM Plex Mono 两字重），`font-display: swap`，`<link rel="preload">` 两个字重以内。
- 图片：频谱带与波形条用 SVG 优先；位图走 `srcset` + `loading="lazy"`；OG 分享图 1200×630 静态生成（带姓名 + 信号橙标题 + 频谱底纹）。
- 性能预算：首页首屏 CSS+JS ≤ 60KB（gz），Lighthouse 四项 ≥ 95；无第三方追踪脚本（默认无分析，见 §5）。

---

## 4. 部署与测试计划

### 4.1 本地预览（Windows）

首选 Docker Desktop：`docker run --rm -v "%CD%:/srv/jekyll" -p 4000:4000 jekyll/jekyll:4 jekyll serve --livereload`（规避 Windows 原生 Ruby 的坑）。备选：RubyInstaller+MSYS2 后 `bundle install && bundle exec jekyll serve --livereload`。验证 `http://localhost:4000` 五个路由全部可访问。

### 4.2 CI / 发布

- `main` 分支保护：PR 触发构建校验（build + htmlproofer 或 lychee 链接检查 + Prettier 格式），合并后 `deploy.yml` 发布到 Pages。
- Pages 设置：Source = GitHub Actions。
- 首次上线后：Search Console 提交 sitemap；Scholar 侧无需操作（已外链）。

### 4.3 可发布检查清单

- [ ] 五个路由 + feed.xml + sitemap.xml + robots.txt 全部 200
- [ ] 全站链接检查 0 失效（含五个 arXiv/项目外链：2509.14912、2511.20224、2607.11699、2608.19843、cinedub2026.github.io）
- [ ] SEO/社媒：每页 title/description 唯一；OG/Twitter Card 预览正确；schema.org Person 标注含 Scholar 与 GitHub sameAs
- [ ] 署名核验：五部作品的角色徽章与论文正式作者顺序逐一比对（编辑准则红线，尤其 DUO-TOK 不得标一作）
- [ ] 移动端 375/768/1024/1440 四档截图走查；触控目标 ≥44px
- [ ] 无障碍：axe 0 严重问题；双主题正文对比度 ≥ 4.5:1；全站可键盘遍历；`prefers-reduced-motion` 下无动画
- [ ] 404 页生效且可回首页
- [ ] 暗/亮主题切换持久化，刷新不闪烁（主题脚本内联于 head）
- [ ] 自定义域名（若有）：CNAME、DNS、Enforce HTTPS、混合内容检查
- [ ] 语言：全站英文为主；若出现中文（如姓名汉字），确认 Noto Serif SC 回退生效
- [ ] Lighthouse 桌面/移动 ≥ 95；首页请求数 ≤ 25
- [ ] 简历不突出 GPA、无硬编码引用数（docs 编辑准则）

**可发布定义**：上述全绿 + 用户在真实 GitHub Pages 地址上确认"这就是我想让陌生人看到的 Kangdi Wang"。

---

## 5. 未决问题（会阻塞实现的信息缺口）

1. **联系邮箱**——hero 与页脚的 Email 链接需要地址（docs 未提供）。
2. **自定义域名**——是否购买/使用自定义域名？不确认则按 `dddpg.github.io` 上线。
3. **头像/肖像**——docs 无照片；当前设计刻意规避，若本人希望放照片需新增 hero 变体。
4. **当前任职/单位**——资料源 §27 标注"current affiliation / job title 需核实"，页脚与 CV 的现状行等该信息。
5. **CV PDF**——`/cv/` 的下载文件需要本人提供。
6. **中文呈现**——是否出现中文姓名/中文简介？默认全英文站。
7. **博客**——默认砍掉 blog；若未来想写技术博文，需预留 `_posts/` 与导航位。
8. **站点分析**——默认无追踪；如需统计，选 GoatCounter/Cloudflare 这类免 cookie 横幅方案。
9. **ORCID / LinkedIn / X 等额外社交链接**——docs 只给出 GitHub ×2 + Scholar。
10. **仓库卫生确认**——删除误建的 `,gitignore`；确认 `docs/` 继续被 `.gitignore` 忽略（设计稿与资料源不进公开仓库）。
