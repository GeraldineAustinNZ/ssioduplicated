// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add support for `.cjs` and `.mjs` if needed
config.resolver.sourceExts = [
  ...config.resolver.sourceExts,
  'cjs',
  'mjs',
];

// Optional: handle potential blockList or assetExts customizations here
// config.resolver.blockList = exclusionList([...]);

module.exports = config;
