
import calculateCarValue from './carValue'; // Import the calculateCarValue function from carValue.js

// Function to run the tests and output results to the page
function runTests() {
    // Define an array of test cases with expected inputs and results
    const testResults = [
        { 
            testName: 'Correct vehicle model and year', 
            model: "Civic", 
            year: 2020, 
            result: calculateCarValue("Civic", 2020) // Calculate car value for valid inputs
        },
        { 
            testName: 'Model with special characters should be ignored', 
            model: "Ferr@ri", 
            year: 2023, 
            result: calculateCarValue("Ferr@ri", 2023) // Special characters should be removed
        },
        { 
            testName: 'Null year input should return an error', 
            model: "BMW", 
            year: null, 
            result: calculateCarValue("BMW", null) // Null year should return an error
        },
        { 
            testName: 'Model with spaces should still work', 
            model: "  Mustang  ", 
            year: 2021, 
            result: calculateCarValue("  Mustang  ", 2021) // Leading/trailing spaces should be trimmed
        },
        { 
            testName: 'Model with mixed case should still work - bMw, 2019', 
            model: "bMw", 
            year: 2019, 
            result: calculateCarValue("bMw", 2019) // Mixed case should be normalized
        },
    ];

    const appElement = document.getElementById("app"); // Get the HTML element with id "app"
    let output = "<h1>Test Results</h1>"; // Initialize the output string with a heading

    // Loop through each test case and add the results to the output string
    testResults.forEach(test => {
        output += `
            <h2>${test.testName}</h2> <!-- Display the test name -->
            <p><strong>Model:</strong> ${test.model}</p> <!-- Display the car model -->
            <p><strong>Year:</strong> ${test.year}</p> <!-- Display the car year -->
            <p><strong>Result:</strong> ${JSON.stringify(test.result)}</p> <!-- Display the result as a JSON string -->
        `;
    });

    // Update the inner HTML of the app element with the test results
    appElement.innerHTML = output;
}

// Call the runTests function to display results on the page
runTests();