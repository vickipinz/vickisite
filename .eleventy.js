// @ts-check
/** @param {import ("@11ty/eleventy").UserConfig} eleventyConfig */
export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addLayoutAlias('default', 'layouts/default.njk');
  
    return {
      // When a passthrough file is modified, rebuild the pages:
      passthroughFileCopy: true,
      dir: {
        input: "src",
        output: "dist",
        includes: "includes",
        data: "data",
      }
    }
  };