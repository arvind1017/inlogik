# Test approach for the registration wizard (Customer and Adminstration)

## Overview
 This document outlines the testing approach for the registration wizard for both customer and adminstrator

 ## Features to be tested

 ### General Wizard Behaviour
  - No page reload after the single page is initially loaded
  - A unique Registration ID is created
  - Registration should always start as a Draft state
  - Page navigation is controlled by the next button
  - Confirmation screen display and checks including submission steps and status

### Customer Registration Flow
  - Step 1: Input valid/invalid email address
  - Step 2: Select from service plans: small, medium, large
  - Step 3: Input valid/ invalid password
  - Ensure correct sequence: Email-> Plan selection-> Password


### Adminstrator Registration Flow
  - Step 1: Input valid/invalid email address
  - Step 2: Input valid/ invalid password
  - Ensure correct sequence: Email-> Password

## Types of Testing

### Functional Testing
  - Validating the page is not reloaded after the initial load
  - A unique Registraion Id generated and assiged to the user
  - Validating field inputs
  - Choosing the correct user flow (Customer / Administrator) --- assuming it to be a radio button/selection from a list
  - Verificaton of correct step flow for Customer and Admistrator
  - Visibility and state (enabled/disabled) of the "Next" button
  - Navigation of Next button
  - Correct display of confirmation screen with all submitted data

### End to End Testing
  - Complete flow of both customer and Administrator
  - Final data submission and confirmation screen validation
  - Validating navigation and data persistence

### Negative Testing
  - Invalid email input
  - Invalid passwod input (eg: blank, too short etc..,)
  - Skipping steps
  - No plans selected in customer flow
  - Refresh the page with F5 on the browser or page refresh by right click reload etc..,

### Non-Functional Testing

- Performance of wizard transitions
- Mobile responsiveness
- Accessibility of forms

## Tools

  - **Testing Framework:** Cypress, Playwright, or Selenium (based on team standard)
  - **Assertions:** Use built-in test runner assertions
  - **Mocks/Stubs:** Use network stubbing to simulate API responses if needed

## Test Data

| Role         | Email               | Service Plan | Password      |
|--------------|---------------------|--------------|---------------|
| Customer     | test1@inlogik.com   | small        | cust@Inlogik  |
| Administrator| admin1@inlogik.com  | N/A          | Admin@inlogik |



## Out of Scope

- Email confirmation / verification flows
- Password reset or recovery

## Risks and Mitigations
