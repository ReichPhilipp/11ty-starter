module.exports = (config) => {
  let handlebars = require("handlebars");
  config.setLibrary("hbs", handlebars);

  config.addPassthroughCopy("src/images");
  config.addPassthroughCopy("src/css");
  config.addPassthroughCopy("src/js");
  config.addPassthroughCopy("_includes");


  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "public"
    },
  };
};
