const { getDefaultConfig } = require('expo/metro-config');
const exclusionList = require('metro-config/src/defaults/exclusionList');

const config = getDefaultConfig(__dirname);

// Do not block ESM dependencies like glob, sucrase, terser
config.resolver.blockList = exclusionList([
  /node_modules\/@react-native\/debugger-frontend\/.*/, // optional: noisy in debug
]);

// Ensure `.mjs` files are treated as modules and transpiled
config.resolver.sourceExts.push('mjs');

module.exports = config;
