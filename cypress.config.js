const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const env = require("env")();

module.exports = defineConfig({
  viewportWidth: 1000,
  viewportHeight: 660,
  video: false,
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  env: {
    baseUrl: env.get("BASE_URL")
  },
  e2e: {
    setupNodeEvents(on, config) {
      let options = browserify.defaultOptions;
      options.browserifyOptions.transform[1][1].plugins.push([
        "module-resolver",
        {
          alias: {
            "@tests": "./test",
            "@helpers": "./test/helper"
          }
        }
      ]);
      on("file:preprocessor", browserify(options));
      // implement node event listeners here
    },
    specPattern: "tests/scenarios/**/*.test.js"
  }
});
