module.exports = {
  //rootDir: 'packages',
  preset: 'jest-puppeteer',
  testTimeout: 30000,
  transform: {
    "^.+\\.ts?$": "ts-jest"
  },
  verbose: true,
  "coverageDirectory": "./coverage/",
  "collectCoverage": true
}