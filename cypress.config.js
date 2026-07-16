const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const allureWriter = require('@shelex/cypress-allure-plugin/writer');


module.exports = defineConfig({
  allowCypressEnv: true,

  env: {
  allure: true,
  allureResultsPath: 'allure-results',
  allureReuseAfterSpec: true,
  },

  e2e: {
    specPattern: "**/*.feature", // a ajouter 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    on("file:preprocessor", cucumber()); // ajouter pour le preprocessor
    allureWriter(on, config);
    return config
    
    
    },
      
  },
});
