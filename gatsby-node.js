let gatsbyNodeModules = require("fs").realpathSync("node_modules/gatsby");
gatsbyNodeModules = require("path").resolve(gatsbyNodeModules, "..");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [gatsbyNodeModules, "node_modules"]
    }
  });
};
