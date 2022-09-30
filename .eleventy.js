module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/scripts');
  eleventyConfig.addPassthroughCopy('src/styles');
  eleventyConfig.addPassthroughCopy('src/admin');
  eleventyConfig.addPassthroughCopy('src/images');

  return {
    dir: {
      input: 'src'
    }
  };
}
