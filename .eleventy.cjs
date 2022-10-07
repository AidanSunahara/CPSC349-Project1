module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false)
  eleventyConfig.setBrowserSyncConfig({
    notify: true,
    open: true
  })
}
module.exports = {
  dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "docs"
   }
};

