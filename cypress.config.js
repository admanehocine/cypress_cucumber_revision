const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default; 

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    specPattern: "**/*.feature", // a ajouter 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    on("file:preprocessor", cucumber()); // ajouter pour le preprocessor
    
    },
  },
});
