# Webc for web components with Eleventy, Liquid & Simple.css framework

## Folder structure
- pages in /src
- layouts in /_layouts
- includes in /_includes
- components in /_components
- Json files in /_data
- Simple CSS in /assets/css
- images in /assets/images

## Page layout
- _layouts/base.webc
- _includes/header.webc
- _includes/footer.webc

## Primary navigation
- add tags in frontmatter: primary

## Package.json scripts
- "start": "npx @11ty/eleventy --serve",
- "build": "eleventy",
- "debug": "DEBUG=* eleventy"

## Dependencies
- "@11ty/eleventy": "^2.0.1",
- "@11ty/eleventy-plugin-webc": "^0.11.2",
- "@11ty/webc": "^0.11.4"

## eleventy.config.js
```
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
```

## Links to docs
- [Eleventy](https://www.11ty.dev/docs/)
- [LiquidJS](https://liquidjs.com/tutorials/intro-to-liquid.html)
- [Simple.css](https://simplecss.org/)
