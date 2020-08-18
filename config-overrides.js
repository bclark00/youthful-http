const {
  override,
  fixBabelImports,
  addLessLoader,
  useBabelRc
} = require("customize-cra");

module.exports = override(
  useBabelRc(),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#003366",
      "@font-family": "Source Sans Pro",
      "@menu-dark-bg": "#002553"
    }
  })
);
