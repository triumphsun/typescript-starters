/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  coverageDirectory: 'coverage',
  roots: [ '<rootDir>/src'],
  testEnvironment: 'node',
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$"
};