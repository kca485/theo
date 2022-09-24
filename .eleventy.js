module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/scripts');
  eleventyConfig.addPassthroughCopy('src/styles');
  eleventyConfig.addPassthroughCopy('src/admin');

  return {
    dir: {
      input: 'src'
    }
  };
}
