const path = require("node:path");
const pluginHtmlBase = require("@11ty/eleventy").EleventyHtmlBasePlugin;
const pluginNavigation = require("@11ty/eleventy-navigation");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginVite = require("@11ty/eleventy-plugin-vite");
const Image = require("@11ty/eleventy-img");
const htmlnano = require("htmlnano");

/**
 * @param {import("@11ty/eleventy").UserConfig} config
 */
module.exports = function (config) {
  config.addPlugin(pluginHtmlBase);
  config.addPlugin(pluginNavigation);
  config.addPlugin(pluginVite);

  config.addNunjucksFilter("absoluteUrl", pluginRss.absoluteUrl);
  config.addNunjucksFilter("sourceUrl", (url) =>
    path.join(__dirname, "src", url),
  );

  config.addNunjucksAsyncShortcode("svgContents", async (src) => {
    const metadata = await Image(src, {
      formats: ["svg"],
      dryRun: true,
    });
    return metadata.svg[0].buffer.toString("utf-8");
  });

  config.addTransform("htmlnano", async function (content) {
    const { outputPath } = this.page;
    if (!outputPath || !outputPath.endsWith(".html")) {
      return content;
    }
    const result = await htmlnano.process(content, {
      minifyJs: false,
      minifyCss: false,
      minifySvg: false,
      removeComments: "safe",
      collapseWhitespace: "conservative",
    });
    return result.html;
  });

  config.addLayoutAlias("base", "layouts/base.html");
  config.addLayoutAlias("empty", "layouts/empty.html");

  config.addPassthroughCopy("src/manifest.webmanifest");
  config.addPassthroughCopy("src/assets/images");
  config.addPassthroughCopy("src/assets/scripts");
  config.addPassthroughCopy("src/assets/styles");

  config.addWatchTarget("src/assets");

  config.setDataDeepMerge(true);

  return {
    dir: {
      input: "src",
      output: "build",
    },
    templateFormats: ["html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
