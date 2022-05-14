module.exports = {
  clearMocks: true,
  moduleFileExtensions: ["js", "ts"],
  testEnvironment: "node",
  testMatch: ["**/*.test.js", "**/*.test.ts"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  verbose: true,
};
