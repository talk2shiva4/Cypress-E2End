const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  host:{
    URL:'https://qa-production.stealthplatform.cloud/loom/purchase-order/23/row/add'
  }
});
