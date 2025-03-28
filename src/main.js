
import calculateCarValue from './carValue'; 

function runTests() {
    const testResults = [
        { 
            testName: 'Correct vehicle model and year', 
            model: "Civic", 
            year: 2020, 
            result: calculateCarValue("Civic", 2020) 
        },
        { 
            testName: 'Model with special characters should be ignored', 
            model: "Ferr@ri", 
            year: 2023, 
            result: calculateCarValue("Ferr@ri", 2023) 
        },
        { 
            testName: 'Null year input should return an error', 
            model: "BMW", 
            year: null, 
            result: calculateCarValue("BMW", null) 
        },
        { 
            testName: 'Model with spaces should still work', 
            model: "  Mustang  ", 
            year: 2021, 
            result: calculateCarValue("  Mustang  ", 2021) 
        },
        { 
            testName: 'Model with mixed case should still work - bMw, 2019', 
            model: "bMw", 
            year: 2019, 
            result: calculateCarValue("bMw", 2019) 
        },
    ];

    const appElement = document.getElementById("app");
    let output = "<h1>Test Results</h1>"; 

    // Loop through each test case and add the results to the output string
    testResults.forEach(test => {
        output += `
            <h2>${test.testName}</h2> <!-- Display the test name -->
            <p><strong>Model:</strong> ${test.model}</p> <!-- Display the car model -->
            <p><strong>Year:</strong> ${test.year}</p> <!-- Display the car year -->
            <p><strong>Result:</strong> ${JSON.stringify(test.result)}</p> <!-- Display the result as a JSON string -->
        `;
    });

    appElement.innerHTML = output;
}

runTests();