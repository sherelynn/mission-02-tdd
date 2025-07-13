# Mission 2 Readme

This project is an automated insurance risk assessment and premium calculation API. It evaluates car values and risk ratings based on various factors, including the car model, manufacturing year, and driver experience. The API provides accurate premium quotes while ensuring data validation and error handling for edge cases.

Key Features
Car Value Calculation: Uses a formula to determine a vehicle’s worth based on its model and year.

Risk Rating Assessment: Assigns a risk rating based on the vehicle’s characteristics and driver profile.

Premium Quote Calculation: Computes monthly and yearly insurance premiums.

Validation & Error Handling: Ensures proper handling of invalid or missing data.

REST API: Provides endpoints for seamless integration with frontend applications.

## Installation

We are using npm (Node Package Manager), which is the default package manager for Node.js. It helps with installing, managing and updating dependencies in our project.

Dependency Management – Installs and manages libraries needed for your project.

Script Automation – Runs custom commands (e.g., npm start, npm test).

Version Control – Keeps track of package versions in package.json.

Global & Local Packages – Supports installing dependencies globally or per project.

```bash
npm install
npm start
npm test
npm install <package-name>
```

## More Details

This project is a vehicle insurance API designed to automate risk assessment and premium calculations based on a car’s model, year, and other factors. The API provides endpoints to determine car values, assess risk ratings, and generate premium quotes for users.

Core Functionality
Car Value Calculation

Assigns a numeric value to a car based on its model name and year.

Uses a custom formula where each letter in the model name is converted to a number (A=1, B=2, etc.), multiplied by 100, and summed with the car’s manufacturing year.

Risk Rating System

Evaluates risk based on predefined criteria, including the car’s characteristics.

Provides a risk score that affects the premium calculation.

Premium Quote Calculation

Computes monthly and yearly insurance premiums based on car value and risk rating.

Ensures validation for edge cases like zero or negative car values.

API Endpoints
Car Value API: Returns the calculated value of a given car.

Premium Quote API: Provides an insurance quote based on car value and risk rating.

Discount API: Calculates discounts based on driver experience and other factors.

Technologies Used
Backend: Node.js with Express.js

Testing: Jest & Supertest

Hosting: Azure (for model training and deployment)

Project Goals
Automate insurance risk assessment

Ensure accurate premium pricing

Provide a reliable and scalable API for integration

## Contributors

Tessa - VikingQueen85
Sherelynn - Sherelynn
Clark - hiu03052

---

## My Key Contributions - Sherelynn

### Premium Quote System Architecture

- **Premium Quote Controller**: Designed and implemented the main controller logic for handling premium calculation requests with comprehensive error handling and validation
- **Premium Quote Service**: Developed the core business logic service that calculates monthly and yearly insurance premiums with robust input validation
- **Premium Quote Routes**: Created RESTful API endpoints for premium calculation functionality

### Key Technical Implementations

- **Comprehensive Input Validation**: Implemented validation for car values ($500 - $100,000,000) and risk ratings (1-5 integers)
- **Premium Calculation Algorithm**: Developed the core formula: `(carValue × riskRating) / 100` for yearly premiums
- **Error Handling**: Built robust error handling for edge cases including invalid types, out-of-range values, and missing parameters
- **Decimal Precision**: Ensured accurate financial calculations with proper decimal formatting to 2 places

### Testing

- **Unit Tests**: Created comprehensive unit tests for the premium quote service covering all validation scenarios
- **API Integration Tests**: Developed thorough API tests including boundary value testing and edge case validation
- **Test Coverage**: Implemented test cases for:
  - Standard calculation scenarios
  - Boundary value testing (minimum/maximum acceptable values)
  - Invalid input handling (negative values, strings, null, undefined)
  - Missing parameter validation
  - Type validation (ensuring integers for risk rating)

### Code Quality & Best Practices

- **Modular Architecture**: Separated concerns with dedicated controller, service, and route files
- **Constants Management**: Used meaningful constants for validation boundaries and calculations
- **Error Response Standardization**: Consistent error message format across all validation scenarios
- **Clean Code Principles**: Implemented readable, maintainable code with clear function names and documentation
