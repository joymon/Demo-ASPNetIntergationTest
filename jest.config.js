module.exports = {
  //rootDir: 'packages',
  preset: 'jest-puppeteer',
  testTimeout: 30000,
  transform: {
    "^.+\\.ts?$": "ts-jest"
  },
  "coverageDirectory": "./coverage/",
  "collectCoverage": true
}