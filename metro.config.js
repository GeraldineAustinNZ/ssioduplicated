// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Tell Metro to also transpile ESM modules (e.g., those using `import.meta`)
config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
  experimentalImportSupport: true,
  unstable_disableModuleWrapping: true,
};

config.resolver = {
  ...config.resolver,
  sourceExts: ['js', 'jsx', 'ts', 'tsx', 'json', 'svg'],
};

module.exports = config;
