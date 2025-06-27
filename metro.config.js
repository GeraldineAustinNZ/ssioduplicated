// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Make sure we're not blocking ESM packages needed on web
delete config.resolver.blockList;

// Explicitly disable Hermes transforms for Web
config.transformer = {
  ...config.transformer,
  unstable_disableES6Transforms: true,
  getTransformOptions: async () => ({
    transform: {
      experimentalImportSupport: false,
      inlineRequires: true,
    },
  }),
};

module.exports = config;
