export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  maxWorkers: process.env.CI ? 2 : '50%',
}
