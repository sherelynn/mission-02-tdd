# Mission 2 - Team Assignment

> Check the Mission Page on the Portal for further instructions.

- [Mission 2 - Team Assignment](#mission-2---team-assignment)
	- [Turners Car Insurance Project](#turners-car-insurance-project)
		- [Learn about Test-Driven Development](#learn-about-test-driven-development)
		- [Create Test Cases](#create-test-cases)
		- [Create Unit Tests](#create-unit-tests)
		- [Create API](#create-api)
		- [Code Review and Refactoring](#code-review-and-refactoring)
	- [Turners Car Insurance API Specifications](#turners-car-insurance-api-specifications)
		- [API 1. Convert "Model" and "Year" of a car to a suggested "Car Value"](#api-1-convert-model-and-year-of-a-car-to-a-suggested-car-value)
			- [BUSINESS RULES: Convert "Model" and "Year" of a car to a suggested "Car Value"](#business-rules-convert-model-and-year-of-a-car-to-a-suggested-car-value)
		- [API 2. Convert "Claim History" to a "Risk Rating"](#api-2-convert-claim-history-to-a-risk-rating)
			- [BUSINESS RULES: Convert "Claim History" to a "Risk Rating"](#business-rules-convert-claim-history-to-a-risk-rating)
		- [API 3. Convert "Car Value" and "Risk Rating" to a "Quote"](#api-3-convert-car-value-and-risk-rating-to-a-quote)
			- [BUSINESS RULES: Convert "Car Value" and "Risk Rating" to a "Quote"](#business-rules-convert-car-value-and-risk-rating-to-a-quote)


## Turners Car Insurance Project

You will be working on the backend and apply an Agile practice of Test-Driven Development (TDD).  As part of the project, there are 3 RESTful APIs that are required as part of the insurance purchasing process (here are the specification for the 3 APIs).  You can choose to have your API running on your laptop or on the cloud.  You will perform this Mission in a team of up to 3 developers.  Each member will be responsible for one API and its test cases.  If you are grouped with UX Designers, you will include UX Designers in your Daily Standups with your developer team.

### Learn about Test-Driven Development 

Let's start by understanding the principles of test-driven development.  Watch this video about [TDD](https://www.youtube.com/watch?v=Jv2uxzhPFl4) (12 mins)

### Create Test Cases

For your chosen API, write test cases to cover all the scenarios.  Remember to write test cases for boundaries and negative cases.  The end result will be a table that looks like the following API 1 example but with more test cases:

| Test Case Number | Input (model, year)     | Expected Output ($ value) | Test Description   |
| ---------------- | ----------------------- | ------------------------- | ------------------ |
| 1                | "Civic", 2020           | 6620                      | Sunny day scenario |
| 2                | "911", 2020             | 2020                      | Numbers only is ok |
| 3                | "Task-Force", -987      | error message             | Negative year      |
| 4                | "C200", "twenty twenty" | error message             | Wrong data type    |

The following resources may help:

- **​​​​​​​​​​​​​​REQUIRED** Designing Test Cases http://sqa.fyicenter.com/art/Designing_Unit_Test_Cases.html (1 hour)

### Create Unit Tests

Choose at least 5 of the test cases you designed, implement them as a set of automated unit test using one of the unit testing frameworks.

The following resources may help:

- **RECOMMENDED** API Unit testing in JavaScript https://dev.to/ghostaram/testing-express-api-routes-the-easy-way-beginners-guide-1mmi (2 hours)
- **RECOMMENDED** API Unit testing with Python: https://blog.eduonix.com/software-development/go-guide-api-testing-using-pytest/ (2 hours)
- **RECOMMENDED** API Unit testing in .NET https://medium.com/@mourya.vikas/api-automation-using-c-f93c8dc0daaf (2 hours)

### Create API

> ! Do this AFTER creating test cases and unit tests !

Now that you created the unit tests, build your chosen API.  Test your API against your unit tests as you go, until your API passes all the tests.

The following resources may help:

- **RECOMMENDED** Building an API in Node.js https://www.youtube.com/watch?v=TcvOgwQPsSo (30 mins)
- **RECOMMENDED** Building an API in Python https://towardsdatascience.com/the-right-way-to-build-an-api-with-python-cd08ab285f8f (30 mins)
- **RECOMMENDED** Building an API in .NET https://learn.microsoft.com/en-us/aspnet/web-api/overview/older-versions/build-restful-apis-with-aspnet-web-api (30mins)

### Code Review and Refactoring

Obtain feedback on your code from at least 1 of your team member by allowing them to review your code. Similarly, review your team member's code by pointing out the code smells and offering a solution.  Perform this activity within GitHub by raising a pull request from your feature branch to main and inviting reviewers. The reviewers are supposed to add comments within GitHub at relevant lines of code.  Here are the steps:

1. Push your code changes to a feature branch in your GitHub repository
2. Create a pull request from your feature branch to the main branch.
3. Invite the other team as reviewers for your pull request.
4. Ask them to review your code and provide feedback.
5. Review their code and provide feedback by adding comments within GitHub at relevant lines of code.
6. Discuss the feedback with the other team members and make any necessary changes to the code.
7. If needed, update the code to address the feedback.
8. Refactor your code - find opportunities to make it more efficient, more readable, more maintain able.
9. Run your unit tests to ensure the updated code still pass unit test.
10. Once the updated code is tested, merge the pull request into the main branch.

The following resources may help:

- **​​​​​​​​​​​​​​RECOMMENDED:** Code smells https://blog.codinghorror.com/code-smells/
- **RECOMMENDED:** Pull request reviews in GitHub https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews

## Turners Car Insurance API Specifications

### API 1. Convert "Model" and "Year" of a car to a suggested "Car Value"

This API takes 2 parameters as input in JSON format that includes - the "model" (e.g. "Civic") and a numeric "year" of a car (e.g. 2014).  And the output is a JSON format with the suggested value for the car, such as "$6,614".  Here are the example specifications and business rules of conversion:

| INPUT                          | OUTPUT              | ERROR OUTPUT                   |
| ------------------------------ | ------------------- | ------------------------------ |
| { model: "Civic"; year: 2014 } | { car_value: 6614 } | { error: "there is an error" } |

#### BUSINESS RULES: Convert "Model" and "Year" of a car to a suggested "Car Value"

Car_value is calculated by adding up the positions of alphabets of the letters in the name, times a hundred, and add the year value.  Position of alphabet means the letter in the order of alphabets (e.g. A is the first letter, so it is 1.  Z is the last letter, so it is 26).  Space and any other signs are ignored.   For example, a "Civic" in year 2014 will be worth (3 + 9 + 22 + 9 + 3) * 100 + 2014 = $6,614.  If input values are not valid, return an error.


### API 2. Convert "Claim History" to a "Risk Rating"

This API takes 1 parameters as input in JSON format that has a text field describing the claim history in the last 3 years of a driver requesting for a quote.  The output is a JSON format with the suggested rating of the driver from 1 to 5, 5 being a high risk driver and 1 being a low risk driver.  Here are the example specifications and business rules of conversion:

| INPUT                                                                                                                                  | OUTPUT             | ERROR OUTPUT                   |
| -------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------ |
| { claim_history: "My only claim was a crash into my house's garage door that left a scratch on my car.  There are no other crashes." } | { risk_rating: 3 } | { error: "there is an error" } |

#### BUSINESS RULES: Convert "Claim History" to a "Risk Rating"

Risk rating is calculated by counting the number of occurrences of a list of keywords.  Each occurrence (regardless of whether they are repeats) will add 1 to the risk rating.  The keyword list is "collide", "crash", "scratch", "bump", "", and "smash".  For example, "My only claim was a crash into my house's garage door that left a scratch on my car. There are no other crashes." returns a rating of 3 (counting the underlined letters).  If input value is not valid, return an error.

### API 3. Convert "Car Value" and "Risk Rating" to a "Quote"

This API takes 2 parameters as input in JSON format that includes - the "car value" (e.g. $6,614) and "risk rating" of the driver between 1 to 5 (e.g. 5 meaning high risk).  And the output is a JSON format with the suggested monthly and yearly premium for the insurance policy, such as "$50", "$614,".  Here are the example specifications and business rules of conversion:

| INPUT                               | OUTPUT                                         | ERROR OUTPUT                   |
| ----------------------------------- | ---------------------------------------------- | ------------------------------ |
| { car_value: 6614; risk_rating: 5 } | { monthly_premium: 27.5; yearly_premium: 330 } | { error: "there is an error" } |

#### BUSINESS RULES: Convert "Car Value" and "Risk Rating" to a "Quote"

Yearly premium is calculated by car_value multiplied by driver rating divided by 100.   For example, car value of $6,614 and driver rating of 5, the yearly premium will be $6,614 * 5 / 100 = $330.  The monthly premium is the yearly premium divided by 12.  So the monthly premium in this example will be $300 /12 = $27.5.  If input values are not valid, return an error.

### API 4. Convert "Driver's Age and Experience" to a "Discount Rate"

This API takes 2 parameters as input in JSON format that includes - the "age" (e.g. 30) and "experience" (e.g. 6 years of driving experience). The output is a JSON format with the suggested discount rate for the insurance policy, such as "10%".

Here are the example specifications and business rules of conversion:

| INPUT                               | OUTPUT                                         | ERROR OUTPUT                   |
| ----------------------------------- | ---------------------------------------------- | ------------------------------ |
| { age: 30; experience: 6 }          | { discount_rate: 10 }                          | { error: "there is an error" } |
		
 

#### BUSINESS RULES

The discount rate starts at 0%. Drivers aged 25 or older get a 5% discount, and those with 5 or more years of driving experience get another 5%. If the driver is 40 or older, they receive an extra 5%, and if they have 10 or more years of experience, they get another 5%. The maximum possible discount is 20%. If the input values are invalid, such as negative numbers or non-numeric values, an error message is returned.
