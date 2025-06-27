// metro.config.js
const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);

// Optionally enable `cjs` resolution for web safety
config.resolver.resolveRequest = undefined;

module.exports = config;
