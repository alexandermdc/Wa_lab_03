export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  maxWorkers: process.env.CI ? 1 : '50%',
  forceExit: true,
  detectOpenHandles: true,
}
