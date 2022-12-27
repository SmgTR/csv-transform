module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  moduleDirectories: ['src', 'node_modules'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  modulePathIgnorePatterns: ['<rootDir>/build/'],
  clearMocks: true,
  transformIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/config']
};
