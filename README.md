![GitHub Actions -PIPELINE](https://github.com/Peter-QA-testing-Journey/PROJECT--PRACTICE_SKILL_IN-CYPRESS/workflows/Cypress%20Tests/badge.svg)
[RESULTS FROM PIPELINE GITHUB](https://github.com/Peter-QA-testing-Journey/PROJECT--PRACTICE_SKILL_IN-CYPRESS/actions/runs/9828513956/job/27132504324)



# Project Overview

This project demonstrates the testing of multi-step form using Cypress for end-to-end testing IN SIMULATED USER STORY FOR THAT.
The focus is on verifying the functionality of filling out and submitting the form. Although the project likely includes multiple user stories IN REAL LIFE 
I concentrate specifically on the functionality of the multi-step form and its end-to-end testing.

## User Story

### Filling FORM Multi-Step 
- **Description:** As a user, I want to fill out a multi-step form on the website so that I can successfully submit my details.
- **Acceptance Criteria:**
  - The user fills out all necessary fields in each step of the form.
  - The system verifies the correctness of the entered data and allows the user to proceed to the next step.
  - Upon form submission, the system displays a confirmation of successful submission.


## Cypress Test Code

- **View the CYPRESS TEST SCENARIO WRITTEN IN VISUAL STUDIO CODE for the multi-step form:**

  [STRUCTURE OF CYPRESS FILES](https://github.com/Peter-QA-testing-Journey/PROJECT--PRACTICE_SKILL_IN-CYPRESS/blob/main/WHOLE%20STRUCTURE.png)

  [MULTI-STEP FORM CODE 1 - WITH VARIABLES](https://github.com/Peter-QA-testing-Journey/PROJECT--PRACTICE_SKILL_IN-CYPRESS/blob/main/cypress/e2e/Fill_Form_1_with_variables_from_cypress.config.json_.cy.js)
   [CYPRESS CONFIG.JS WITH USED VARIABLES](https://github.com/Peter-QA-testing-Journey/PROJECT--PRACTICE_SKILL_IN-CYPRESS/blob/main/cypress.config.js)
  
  [MULTI-STEP FORM CODE 2 - WITH FIXTURE FOR 1 USER](https://github.com/Peter-QA-testing-Journey/PROJECT--PRACTICE_SKILL_IN-CYPRESS/blob/main/cypress/e2e/Fill_Form_2_with_fixture_file.cy.js)
  [FIXTURE FILE FOR 1 USER](https://github.com/Peter-QA-testing-Journey/PROJECT--PRACTICE_SKILL_IN-CYPRESS/blob/main/cypress/fixtures/Fill_Form_DATA_1_USER.json)
  
  [MULTI-STEP FORM CODE 3- WITH FIXTURE AND EACH FOR MORE USER](https://github.com/Peter-QA-testing-Journey/PROJECT--PRACTICE_SKILL_IN-CYPRESS/blob/main/cypress/e2e/Fill_Form_3_with_fixture_file_and_each.cy.js)
  [FIXTURE FILE FOR 1 USER](https://github.com/Peter-QA-testing-Journey/PROJECT--PRACTICE_SKILL_IN-CYPRESS/blob/main/cypress/fixtures/Fill_Form_DATA_MORE_USERS.json)

  RUNNING TESTS THROUGH CHROME TEST RUNNER:
  [FILLING THE FORM RUNNNING TEST part 1](https://github.com/Peter-QA-testing-Journey/PROJECT--PRACTICE_SKILL_IN-CYPRESS/blob/main/cypress%20test%20runner%20through%20chrome337.png)
  [FILLING THE FORM RUNNNING TEST part 2](https://github.com/Peter-QA-testing-Journey/PROJECT--PRACTICE_SKILL_IN-CYPRESS/blob/main/cypress%20test%20runner%20through%20chrome337.png)
## Goals of the Project

- Demonstrate basic Cypress end-to-end testing capabilities.
- Showcase how to structure and write tests for a multi-step form.
- Provide a clear and detailed example of how to implement and verify user stories through automated tests.

## Running Tests with GitLAB CI

[This project is configured to run Cypress tests automatically using GitHub Actions. The workflow file can be found at](https://github.com/Peter-QA-testing-Journey/PROJECT--PRACTICE_SKILL_IN-CYPRESS/blob/main/.gitlab-ci.yml)

### Running Tests Locally

1. Clone the repository to your local machine:

    ```bash
    git clone <repository_url>
    ```

2. Navigate to the project directory:

    ```bash
    cd project-root
    ```

3. Install the necessary dependencies:

    ```bash
    npm install
    ```

4. Open Cypress test runner:

    ```bash
    npx cypress open
    ```

5. In the Cypress test runner, click on the `multi-step-form.spec.js` to run the test.
