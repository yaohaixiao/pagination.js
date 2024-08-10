module.exports = {
  env: {
    amd: true,
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: ['prettier', 'eslint:recommended', 'plugin:import/errors'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  plugins: ['prettier', 'import'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2020,
    requireConfigFile: false,
    sourceType: 'module',
    // 想使用的额外的语言特性:
    ecmaFeatures: {
      // 允许在全局作用域下使用 return 语句
      globalReturn: false,
      impliedStrict: true,
      objectLiteralDuplicateProperties: false,
      modules: true
    }
  },
  settings: {
    'import/resolver': {
      jest: {
        jestConfigFile: './jest.config.js'
      }
    }
  }
}
