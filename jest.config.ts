export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'json'],
  roots: ['<rootDir>/src'],
  testMatch: ["**/tests/**/*.test.(ts|js)"],
  transform: {
    '^.+\.ts$': 'ts-jest',
  },
};