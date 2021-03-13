module.exports = {
  roots: [
    '<rootDir>/src'
  ],
  clearMocks: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts'
  ],
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  testEnvironment: 'node'
}
