/**
 * jest.config.js - jest 配置
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2024.8.10
 */
module.exports = {
  moduleFileExtensions: ['js'],
  testMatch: ['**/tests/*.spec.(js)'],
  transform: {
    '^.+\\.js$': './node_modules/babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  collectCoverage: true,
  coverageDirectory: 'report/coverage',
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'pagination.js Unit Test Report',
        outputPath: './report/unit/index.html',
        includeFailureMsg: true
      }
    ]
  ]
}
