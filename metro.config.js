// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');
const exclusionList = require('metro-config/src/defaults/exclusionList');

const config = getDefaultConfig(__dirname);

// Add .mjs support for ESM modules
config.resolver.sourceExts = [...config.resolver.sourceExts, 'mjs'];

// Block only known problematic packages that must be excluded
config.resolver.blockList = exclusionList([
  /node_modules\/@react-native\/debugger-frontend\/.*/,
  /node_modules\/acorn\/.*/,
  /node_modules\/terser\/.*/,
  /node_modules\/lightningcss\/.*/,
  /node_modules\/sucrase\/dist\/esm\/.*/,
]);

module.exports = config;
