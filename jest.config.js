module.exports = {
    testEnvironment: "jsdom",
    moduleNameMapper: {
        ".(css|scss)$": "identity-obj-proxy",
    },
    coverageThreshold: {
        global: {
            // obviously, these are placeholders...
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    collectCoverageFrom: [
        "src/**/*.{ts,tsx}",
        "!**/node_modules/**",
        "!**/dist/**",
        "!**/coverage/**",
        "!**/src/stories/**",
        "!**/src/**/*.stories.{ts,tsx}",
    ],
};
