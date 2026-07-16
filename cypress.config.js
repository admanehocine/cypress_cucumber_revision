const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const { allureCypress } = require('allure-cypress/reporter')

module.exports = defineConfig({
  allowCypressEnv: true,

  e2e: {
    specPattern: "**/*.feature", // a ajouter 
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber()); // ajouter pour le preprocessor
      allureCypress(on);
      return config;
    },
  },
});
