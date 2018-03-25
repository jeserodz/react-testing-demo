module.exports = {
  verbose: true,
  setupFiles: ['<rootDir>/__tests__/setup.js'],
  testPathIgnorePatterns: ['setup.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**.js',
    'src/containers/**.js',
    'src/actions/**.js',
    'src/reducers/**.js',
  ]
};