import calculateCarValue from './carValue';

// Function to run the tests and output results to the page
function runTests() {
    const testResults = [
        { testName: 'Sunny day scenario - Civic 2020', model: "Civic", year: 2020, result: calculateCarValue("Civic", 2020) },
        { testName: 'Model with numbers only is allowed - 911, 2020', model: "911", year: 2020, result: calculateCarValue("911", 2020) },
        { testName: 'Negative year should return an error', model: "Task-Force", year: -987, result: calculateCarValue("Task-Force", -987) },
        { testName: 'Year is not numeric - should return an error', model: "C200", year: "twenty twenty", result: calculateCarValue("C200", "twenty twenty") },
        { testName: 'Empty model input should return an error', model: "", year: 2020, result: calculateCarValue("", 2020) },
        { testName: 'Model with special characters should be ignored', model: "Ferr@ri", year: 2023, result: calculateCarValue("Ferr@ri", 2023) },
        { testName: 'Null model input should return an error', model: null, year: 2018, result: calculateCarValue(null, 2018) },
        { testName: 'Null year input should return an error', model: "BMW", year: null, result: calculateCarValue("BMW", null) },
        { testName: 'Model with spaces should still work', model: "  Mustang  ", year: 2021, result: calculateCarValue("  Mustang  ", 2021) },
        { testName: 'Single-letter model name should work - A, 2000', model: "A", year: 2000, result: calculateCarValue("A", 2000) },
        { testName: 'Long model name should still work - Lamborghini, 2015', model: "Lamborghini", year: 2015, result: calculateCarValue("Lamborghini", 2015) },
        { testName: 'Model with mixed case should still work - bMw, 2019', model: "bMw", year: 2019, result: calculateCarValue("bMw", 2019) },
        { testName: 'Model with extra spaces should be trimmed - "  Tesla  ", 2022', model: "  Tesla  ", year: 2022, result: calculateCarValue("  Tesla  ", 2022) },
        { testName: 'Model with numbers and letters - C300, 2018', model: "C300", year: 2018, result: calculateCarValue("C300", 2018) },
        { testName: 'Model with special characters and spaces - P@r$ch3, 2017', model: "P@r$ch3", year: 2017, result: calculateCarValue("P@r$ch3", 2017) },
        { testName: 'Future year should return an error - Audi, 3000', model: "Audi", year: 3000, result: calculateCarValue("Audi", 3000) },
        { testName: 'Model is an empty string with spaces - "   ", 2020', model: "   ", year: 2020, result: calculateCarValue("   ", 2020) }
    ];

    const appElement = document.getElementById("app");
    let output = "<h1>Test Results</h1>";

    // Loop through each test and add the results to the output string
    testResults.forEach(test => {
        output += `
            <h2>${test.testName}</h2>
            <p><strong>Model:</strong> ${test.model}</p>
            <p><strong>Year:</strong> ${test.year}</p>
            <p><strong>Result:</strong> ${JSON.stringify(test.result)}</p>
        `;
    });

    appElement.innerHTML = output;
}

// Call the runTests function to display results
runTests();
