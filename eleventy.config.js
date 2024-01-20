const pluginWebc = require('@11ty/eleventy-plugin-webc')

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(pluginWebc, {
        // (The default changed from `false` in Eleventy WebC v0.7.0)
        components: "src/_components/**/*.webc"
    });
    eleventyConfig.addPassthroughCopy("src/assets"); // Scss, JS, and images files
    return {
        dir: {
            input: "src", // Set the source for 11ty to the /src directory
            output: "_site", // This is the default
            includes: "_includes", // All UI partials
            layouts: "_layouts" // Base page layouts
        },
        templateFormats: ["html", "md", "liquid"]
    };
};