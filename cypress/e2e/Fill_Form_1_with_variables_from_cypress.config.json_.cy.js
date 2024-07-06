///<reference types="cypress" />

describe("TESTING FORM USING VARIABLES FROM CYPRESS.CONFIG.JSON", () => {

  // Starts the test case for the multi-step form
  it("Multi Step FORM test", function() {
    
    // Opens the page with the form
    cy.visit("https://web.automationtesting.sk/multistep-form/")
      
    // Finds the "Your Name" field by its ID and fills it with the value from the "FullName" variable
    cy.get("#msf-text-your-name").type(Cypress.env("FullName")).should("have.value", "Peter Bursa")
    
    // Finds the "Your Email" field by its ID and fills it with the value from the "Email" variable
    cy.get("#msf-mail-your-email").type(Cypress.env("Email")).should("have.value", "peter@email.com")
    
    // Finds the "Date of Order" field by its ID and fills it with the value from the "Date" variable
    cy.get("#msf-date-select-date-of-order").type(Cypress.env("Date")).should("have.value", "2023-09-26")

    // Finds and checks the radio button by its type attribute
    cy.get('[type="radio"]').check({ force: true }).should("be.checked")
    
    // Clicks the "Next" button by its CSS class
    cy.get(".fw-button-next").click()
    
    // Finds the third checkbox by its type attribute and index and checks it
    cy.get('[type="checkbox"]').eq(2).check({ force: true }).should("be.checked")
    
    // Clicks the selection element and confirms the selection by pressing Enter
    cy.get(".selection").click().type('{enter}')
    
    // Clicks the "Next" button by its CSS class
    cy.get(".fw-button-next").click()

    // Finds the "Message" textarea by its ID and fills it with the value from the "Message" variable
    cy.get("#msf-textarea-write-us-a-message").type(Cypress.env("Message")).should("have.value", "Hello I would like to order CYPRESS, thank you")
    
    // Finds the "Submit" button by its text and clicks it
    cy.contains("Odoslať").click()
    
    // Verifies that the message "Form submitted." is displayed
    cy.get("h3").should("contain", "Form submitted.")
  })
})
