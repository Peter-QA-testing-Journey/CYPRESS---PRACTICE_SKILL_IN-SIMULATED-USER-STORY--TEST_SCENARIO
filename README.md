![GitHub Actions -PIPELINE](https://github.com/Peter-QA-testing-Journey/PROJECT--PRACTICE_SKILL_IN-CYPRESS/workflows/Cypress%20Tests/badge.svg)
[RESULTS FROM PIPELINE GITHUB/This project is configured to run Cypress tests automatically using GitHub Actions.](https://github.com/Peter-QA-testing-Journey/PROJECT--PRACTICE_SKILL_IN-CYPRESS/actions/runs/9828513956/job/27132504324)

# RUN AND ISNTALLATION



## Set up Node.js
node-version: '16'


## Install project dependencies and Cypress:
run: npm ci

## Install Cypress
run: npx cypress install


## Run Cypress tests:
npx cypress run -b chrome

  
# RUNNING LOCALLY
[Clone the repository](https://github.com/Peter-QA-testing-Journey/CYPRESS---PRACTICE_SKILL_IN-SIMULATED-USER-STORY--TEST_SCENARIO.git)

## Open Cypress:

npx cypress open

## Run the tests:

In the Cypress Test Runner that opens, click on the test file you want to run.
Or headlessly with CMD -npm run test (from directory Project)



# Project Overview

This project demonstrates Cypress end-to-end testing for a multi-step form. The focus is on verifying form functionality and CI/CD results. 
Though the project likely includes more user stories, I have concentrated on a single simulated user story for testing the multi-step form. 
A training website was used for the tests.

## User Story

### Filling FORM Multi-Step 
- **Description:** As a user, I want to fill out a multi-step form on the website so that I can successfully submit my details.
- **Acceptance Criteria:**
  - The user fills out all necessary fields in each step of the form.
  - The system verifies the correctness of the entered data and allows the user to proceed to the next step.
  - Upon form submission, the system displays a confirmation of successful submission.

## Cypress Test Code

- **View the CYPRESS TEST SCENARIO WRITTEN IN VISUAL STUDIO CODE for the multi-step form:**

  - [STRUCTURE OF CYPRESS FILES](https://github.com/Peter-QA-testing-Journey/PROJECT--PRACTICE_SKILL_IN-CYPRESS/blob/main/WHOLE%20STRUCTURE.png)

  - [MULTI-STEP FORM CODE 1 - WITH VARIABLES](https://github.com/Peter-QA-testing-Journey/PROJECT--PRACTICE_SKILL_IN-CYPRESS/blob/main/cypress/e2e/Fill_Form_1_with_variables_from_cypress.config.json_.cy.js)
    - [CYPRESS CONFIG.JS WITH USED VARIABLES](https://github.com/Peter-QA-testing-Journey/PROJECT--PRACTICE_SKILL_IN-CYPRESS/blob/main/cypress.config.js)
  
  - [MULTI-STEP FORM CODE 2 - WITH FIXTURE FOR 1 USER](https://github.com/Peter-QA-testing-Journey/PROJECT--PRACTICE_SKILL_IN-CYPRESS/blob/main/cypress/e2e/Fill_Form_2_with_fixture_file.cy.js)
    - [FIXTURE FILE FOR 1 USER](https://github.com/Peter-QA-testing-Journey/PROJECT--PRACTICE_SKILL_IN-CYPRESS/blob/main/cypress/fixtures/Fill_Form_DATA_1_USER.json)
  
  - [MULTI-STEP FORM CODE 3- WITH FIXTURE AND EACH FOR MORE USERS](https://github.com/Peter-QA-testing-Journey/PROJECT--PRACTICE_SKILL_IN-CYPRESS/blob/main/cypress/e2e/Fill_Form_3_with_fixture_file_and_each.cy.js)
    - [FIXTURE FILE FOR MORE USERS](https://github.com/Peter-QA-testing-Journey/PROJECT--PRACTICE_SKILL_IN-CYPRESS/blob/main/cypress/fixtures/Fill_Form_DATA_MORE_USERS.json)

  - RUNNING TESTS THROUGH CHROME TEST RUNNER:
    - [FILLING THE FORM RUNNNING TEST part 1](https://github.com/Peter-QA-testing-Journey/PROJECT--PRACTICE_SKILL_IN-CYPRESS/blob/main/cypress%20test%20runner%20through%20chrome337.png)
    - [FILLING THE FORM RUNNNING TEST part 2](https://github.com/Peter-QA-testing-Journey/PROJECT--PRACTICE_SKILL_IN-CYPRESS/blob/main/cypress%20test%20runner%20through%20chrome337.png)

- TEST SCENARIO CAN BE EXECUTED BY RUNNING THROUGH CHROME BROWSER CYPRESS TEST RUNNER
  OR THROUGH GITHUB ACTIONS/PIPELINES AS WAS MENTIONED ABOVE.

## Goals of the Project

- Demonstrate basic Cypress end-to-end testing capabilities.
- Showcase how to structure and write tests for a multi-step form.
- Self-learning of CI/CD process - pipelines.
