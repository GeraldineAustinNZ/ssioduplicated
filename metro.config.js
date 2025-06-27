// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Optional: allow importing .cjs/.mjs if needed
config.resolver.sourceExts.push('cjs', 'mjs');

module.exports = config;
