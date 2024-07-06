///<reference types="cypress" />

describe("TESTING FORM USING FIXTURE FILE-FOR 1 USER", () => {
  
    // Before running the test, load data from the fixture file
    before("Setup data", function() {
      cy.fixture("Fill_Form_DATA_1_USER.json").then(function(data) {
        // Store the data in this.data for access during the test
        this.data = data
      })
    })
  
    // Test case for the multi-step form with data from the fixture
    it("Multi Step FORM test with fixture data", function() {
      cy.visit("https://web.automationtesting.sk/multistep-form/")
      
      // Finds the "Your Name" field by its ID and fills it with the value from the fixture
      cy.get("#msf-text-your-name").type(this.data.name).should("have.value", "Peter Bursa")
      
      // Finds the "Your Email" field by its ID and fills it with the value from the fixture
      cy.get("#msf-mail-your-email").type(this.data.email).should("have.value", "peter@email.com")
      
      // Finds the "Date of Order" field by its ID and fills it with the value from the fixture
      cy.get("#msf-date-select-date-of-order").type(this.data.date).should("have.value", "2023-09-26")
  
      // Finds and checks the radio button by its type attribute
      cy.get('[type="radio"]').check({force:true}).should("be.checked")
      
      // Clicks the "Next" button by its CSS class
      cy.get(".fw-button-next").click()
      
      // Finds the third checkbox by its type attribute and index and checks it
      cy.get('[type="checkbox"]').eq(2).check({force:true}).should("be.checked")
      
      // Clicks the selection element and confirms the selection by pressing Enter
      cy.get(".selection").click().type('{enter}')
      
      // Clicks the "Next" button by its CSS class
      cy.get(".fw-button-next").click()
  
      // Finds the "Message" textarea by its ID and fills it with the value from the fixture
      cy.get("#msf-textarea-write-us-a-message").type(this.data.message).should("have.value", "Hello I would like to order SELENIUM, thank you")
      
      // Finds the "Submit" button by its text and clicks it
      cy.contains("Odoslať").click()
      
      // Verifies that the message "Form submitted." is displayed
      cy.get("h3").should("contain", "Form submitted.")
    })
  })
  
  