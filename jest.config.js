// jest.config.js
module.exports = {
    transform: {
        "^.+\\.js$": "babel-jest",  // Ensure babel-jest is used to transform JavaScript files
    },
    transformIgnorePatterns: [
        "/node_modules/(?!your-es-module|other-modules).+\\.js$" // If using ESM in dependencies, include them here
    ],
};
