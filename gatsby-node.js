const fs = require("fs");
const path = require("path");

const gatsbyNodeModules = path.resolve(
  fs.realpathSync("node_modules/gatsby"),
  ".."
);

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [gatsbyNodeModules, "node_modules"]
    }
  });
};
