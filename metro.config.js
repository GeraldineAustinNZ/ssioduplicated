// metro.config.js

const { getDefaultConfig } = require('expo/metro-config');
const exclusionList = require('metro-config/src/defaults/exclusionList');

const config = getDefaultConfig(__dirname);

// ✅ Allow important ESM packages like `glob` to be transpiled
// Only block problematic non-transpiled dependencies that use import.meta and don't work on web
config.resolver.blockList = exclusionList([
  /node_modules\/@react-native\/debugger-frontend\/.*/,
  /node_modules\/acorn\/.*/,
  /node_modules\/terser\/.*/,
  /node_modules\/lightningcss\/.*/,
]);

// ✅ Ensure Metro uses babel-transformer for correct syntax support
config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve('metro-react-native-babel-transformer'),
  getTransformOptions: async () => ({
    transform: {
      experimentalImportSupport: false,
      inlineRequires: true,
    },
  }),
};

module.exports = config;
