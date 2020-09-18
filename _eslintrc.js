module.exports = {
  extends: '@nighttrax/eslint-config-tsx',
  rules: {
    'constructor-super': 'warn',
    'no-const-assign': 'warn',
    'no-this-before-super': 'warn',
    'no-undef': 'warn',
    'no-unreachable': 'warn',
    'no-unused-vars': 'warn',
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'valid-typeof': 'warn',
  }
};
