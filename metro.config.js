// metro.config.js

const { getDefaultConfig } = require('expo/metro-config');
const exclusionList = require('metro-config/src/defaults/exclusionList');

const config = getDefaultConfig(__dirname);

// ✅ Only block known problematic packages using untranspiled import.meta
config.resolver.blockList = exclusionList([
  /node_modules\/@react-native\/debugger-frontend\/.*/,
  /node_modules\/acorn\/.*/,
  /node_modules\/terser\/.*/,
  /node_modules\/lightningcss\/.*/,
]);

// ✅ Ensure default transformer config remains
config.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: true,
  },
});

module.exports = config;
