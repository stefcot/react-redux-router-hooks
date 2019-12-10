module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json'],
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.js?$': 'babel-jest',
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.svg$': 'jest-transform-stub'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/js/components/$1',
    'components(.*)$': '<rootDir>/src/js/components/$1',
    'atoms(.*)$': '<rootDir>/src/js/components/atoms/$1',
    'molecules(.*)$': '<rootDir>/src/js/components/molecules/$1',
    'organisms(.*)$': '<rootDir>/src/js/components/organisms/$1'
  },
  testPathIgnorePatterns: ['/node_modules/'],
  testMatch: [
    '**/src/**/__tests__/*.spec.(js|jsx|ts|tsx)',
    '**/src/**/__tests__/*.test.(js|jsx|ts|tsx)'
  ],
  testURL: 'http://localhost:8080/dist'
};
