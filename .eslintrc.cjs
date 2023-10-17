module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  overrides: [
    {
      files: ['**/*.jsx', '**/*.js'],  // apply to all .jsx files in the project
      rules: {
        'react/no-unescaped-entities': 'off',                // disabled
        'no-unused-vars': 'off',                             // diabled
        'react/display-name': 'off',                         // Component definition is missing display name
        'no-undef': 'off',                                   // 'XDomainRequest' is not defined
        'no-extra-boolean-cast': 'off',                      // Redundant double negation
        'react/jsx-key': 'off',                              // Missing "key" prop for element in iterator
        'react/no-unknown-property': 'off',                  // Unknown property 'xmlns:xlink' found
        'react/jsx-no-target-blank': 'off',                  // Using target="_blank" without rel="noreferrer"
        'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true },
        ],
        'react/prop-types': 'off'  // disabling prop-types rule for the entire project
    }
    }
  ]
}
