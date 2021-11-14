module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true
  },
  extends: ['airbnb'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['.'],
        extensions: ['.js', '.jsx']
      }
    }
  },
  rules: {
    'comma-dangle': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'max-len': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'linebreak-style': [
      'error',
      process.platform === 'win32' ? 'windows' : 'unix'
    ]
  }
};
