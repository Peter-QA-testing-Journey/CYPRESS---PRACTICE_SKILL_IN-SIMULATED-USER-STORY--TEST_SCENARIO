[![pipeline status](https://gitlab.com/peterbursa1/cypress/badges/main/pipeline.svg)](https://gitlab.com/peterbursa1/cypress/-/commits/main)

# Project Overview

This project demonstrates the testing of multi-step form using Cypress for end-to-end testing. 
The focus is on verifying the functionality of filling out and submitting the form. Although the project likely includes multiple user stories IN REAL LIFE 
I concentrate specifically on the functionality of the multi-step form and its end-to-end testing.

## User Story

### Filling FORM Multi-Step 
- **Description:** As a user, I want to fill out a multi-step form on the website so that I can successfully submit my details.
- **Acceptance Criteria:**
  - The user fills out all necessary fields in each step of the form.
  - The system verifies the correctness of the entered data and allows the user to proceed to the next step.
  - Upon form submission, the system displays a confirmation of successful submission.

## Tasks and Test Cases

### Task: End-to-End Testing Multi-Step FORM
- **Detailed steps and test case validation:** [Link to Test Case](./cypress/integration/multi-step-form.spec.js)

### FICTIONAL Bug Report
- **Documentation of a discovered bug and its impact on the system:** [Bug Report View](./BUG_REPORT.md)

## Cypress Test Code

- **View the test case for the multi-step form:** [Test Case Code](./cypress/integration/multi-step-form.spec.js)

## Goals of the Project

- Demonstrate basic Cypress end-to-end testing capabilities.
- Showcase how to structure and write tests for a multi-step form.
- Provide a clear and detailed example of how to implement and verify user stories through automated tests.

## Running Tests with GitHub Actions

This project is configured to run Cypress tests automatically using GitHub Actions. The workflow file can be found at `.github/workflows/cypress-tests.yml`.

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