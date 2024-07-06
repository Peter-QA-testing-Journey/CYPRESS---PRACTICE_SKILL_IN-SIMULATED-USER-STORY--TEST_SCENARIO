///<reference types="cypress" />

describe("TESTING FORM USING FIXTURE FILE AND FUNCTION EACH--FOR MORE USERS", () => {
  
    // Before running the test, load data from the fixture file
    before("Setup data", function() {
      cy.fixture("Fill_Form_DATA_MORE_USERS.json").then(function(data) {
        // Store the data in this.data for access during the test
        this.data = data
      })
    })
  
    // Test case for the multi-step form with data from the fixture for multiple users
    it("Multi Step FORM test with fixture data FOR MORE USERS", function() {
      cy.visit("https://web.automationtesting.sk/multistep-form/")
      
      // For each user in the loaded data, execute the test
      cy.wrap(this.data).each((el) => {
        // "el" represents an individual user from the fixture file
        cy.get("#msf-text-your-name").type(el.name).should("have.value", el.name)
        cy.get("#msf-mail-your-email").type(el.email).should("have.value", el.email)
        cy.get("#msf-date-select-date-of-order").type(el.date).should("have.value", el.date)
        
        cy.get('[type="radio"]').check({force:true}).should("be.checked")
        cy.get(".fw-button-next").click()
        cy.get('[type="checkbox"]').eq(2).check({force:true}).should("be.checked")
        cy.get(".selection").click().type('{enter}')
        cy.get(".fw-button-next").click()
        
        cy.get("#msf-textarea-write-us-a-message").type(el.message).should("have.value", el.message)
        cy.contains("Odoslať").click()
        cy.get("h3").should("contain", "Form submitted.")
        
        // After each test for one user, revisit the page for the next user
        cy.visit("https://web.automationtesting.sk/multistep-form/")
      })
    })
  })
  