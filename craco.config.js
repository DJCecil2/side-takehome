const path = require("path");
module.exports = {
  webpack: {
    alias: {
      Src: path.resolve(__dirname, "src/"),
      Components: path.resolve(__dirname, "src/components/"),
      Images: path.resolve(__dirname, "src/images/"),
      Styles: path.resolve(__dirname, "src/styles/"),
    },
  },
};
