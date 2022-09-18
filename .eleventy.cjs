module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false)
  eleventyConfig.setBrowserSyncConfig({
    notify: true,
    open: true
  })
}
