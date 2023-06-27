const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");

module.exports = defineConfig({
  viewportWidth: 1000,
  viewportHeight: 660,
  video: false,
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
