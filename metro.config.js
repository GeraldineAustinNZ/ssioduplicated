// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');
const exclusionList = require('metro-config/src/defaults/exclusionList');

const config = getDefaultConfig(__dirname);

// Add support for .mjs files
config.resolver.sourceExts = [...config.resolver.sourceExts, 'mjs'];

// Only block known issues — DO NOT block 'glob'
config.resolver.blockList = exclusionList([
  /node_modules\/@react-native\/debugger-frontend\/.*/,
  /node_modules\/lightningcss\/.*/,
]);

module.exports = config;
