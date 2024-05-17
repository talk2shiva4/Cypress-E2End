const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    baseUrl:'https://qa-production.stealthplatform.cloud/loom',
    chromeWebSecurity : false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  host:{
    URL:'https://qa-production.stealthplatform.cloud/loom'
  }
});
