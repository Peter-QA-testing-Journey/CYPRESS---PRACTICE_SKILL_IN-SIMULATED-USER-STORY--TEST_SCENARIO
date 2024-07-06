const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  
    "env": {
      "FullName": "Peter Bursa",
      "Email": "peter@email.com",
      "Date": "2023-09-26",
      "Message": "Hello I would like to order CYPRESS, thank you"
    },
  
});
