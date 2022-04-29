const fs = require("fs");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginNavigation = require("@11ty/eleventy-navigation");
const pluginPostCSS = require("eleventy-plugin-postcss");
const pluginGoogleFonts = require("eleventy-google-fonts");
const pluginSvgContents = require("eleventy-plugin-svg-contents");
const markdownIt = require("markdown-it");
const htmlmin = require("html-minifier");

module.exports = function (config) {
  config.addPlugin(pluginRss);
  config.addPlugin(pluginNavigation);
  config.addPlugin(pluginPostCSS);
  config.addPlugin(pluginGoogleFonts);
  config.addPlugin(pluginSvgContents);

  config.setLibrary(
    "md",
    markdownIt({
      html: true,
      breaks: true,
      linkify: true,
      typographer: true,
    })
  );

  config.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath.endsWith(".html")) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
    }
    return content;
  });

  config.addLayoutAlias("base", "layouts/base.html");
  config.addLayoutAlias("empty", "layouts/empty.html");

  config.addPassthroughCopy("src/manifest.webmanifest");
  config.addPassthroughCopy("src/assets/images");
  config.addPassthroughCopy("src/assets/scripts");

  config.addWatchTarget("src/assets");

  config.setBrowserSyncConfig({
    callbacks: {
      ready: (error, browserSync) => {
        browserSync.addMiddleware("*", (req, res) => {
          const notFoundPage = fs.readFileSync("build/404/index.html");
          res.write(notFoundPage);
          res.writeHead(404);
          res.end();
        });
      },
    },
  });

  config.setDataDeepMerge(true);

  return {
    dir: {
      input: "src",
      output: "build",
    },
    templateFormats: ["html", "md", "11ty.js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
