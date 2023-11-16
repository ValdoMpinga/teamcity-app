# Calculator App

A simple Node.js calculator application with API endpoints for basic arithmetic operations.

## Features

- Addition, subtraction, multiplication, and division operations.
- RESTful API with JSON input and output.
- Unit tests for each operation using Mocha and Supertest.
- Code coverage analysis with Istanbul (nyc).

## GitHub Actions

This project utilizes GitHub Actions for continuous integration. The workflow is configured to run on every `push` and `pull_request` event, ensuring that tests are executed automatically.

### Workflow Steps

- **Checkout Code:**
  - Uses actions/checkout to retrieve the project code.

- **Install Dependencies:**
  - Runs npm ci to install project dependencies.

- **Run Tests:**
  - Executes npm test to run unit tests.

- **Code Coverage:**
  - Generates code coverage reports using nyc and stores them as artifacts.

## API Endpoints

- **Addition:**
  - `POST /add`

- **Subtraction:**
  - `POST /subtract`

- **Multiplication:**
  - `POST /multiply`

- **Division:**
  - `POST /divide`

  Example JSON input and output are provided in the project.
