source "https://rubygems.org"

gem "jekyll", "~> 4.3"

group :jekyll_plugins do
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-sitemap", "~> 1.4"
  gem "jekyll-feed", "~> 0.17"
end

# Required for `jekyll serve` on Ruby 3+
gem "webrick", "~> 1.8"

# Windows / JRuby niceties
platforms :windows, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Faster file-watching on Windows
gem "wdm", "~> 0.1", platforms: [:windows]
