const eleventySass = require("eleventy-sass");

module.exports = function (eleventyConfig) {
  eleventyConfig.setNunjucksEnvironmentOptions({
    throwOnUndefined: true,
    autoescape: false, // warning: don’t do this!
  });

  eleventyConfig.markdownTemplateEngine = "njk";
  eleventyConfig.htmlTemplateEngine = "njk";
  eleventyConfig.dataTemplateEngine = "njk";

  eleventyConfig.setTemplateFormats = ["njk", "md", "html"];

  // assets copy
  let itemsToCopy = ["src/assets/images", "src/assets/js"];
  itemsToCopy.forEach((item) => eleventyConfig.addPassthroughCopy(item));
  // assets copy

  eleventyConfig.dir = {
    input: "src",
    includes: "_includes",
    output: "docs",
  };

  // SCSS Handler
  eleventyConfig.addPlugin(eleventySass);
  // SCSS handler

  // Env Variables
  eleventyConfig.addGlobalData("env", process.env);
  // Env Variables
};
