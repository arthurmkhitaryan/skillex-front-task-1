module.exports = {
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
    },
    testEnvironment: 'jsdom', // Required for testing React components
    moduleNameMapper: {
      "^axios$": "axios/dist/node/axios.cjs"
    },
    transformIgnorePatterns: [
      "/node_modules/(?!axios)", // Allow Axios to be transformed
    ],
  };
  