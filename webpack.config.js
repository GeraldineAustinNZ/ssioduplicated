const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // Force transpile ESM packages using import.meta
  const transpileModules = ['zustand', 'lightningcss'];
  const escapeRegex = (s) => s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp(`node_modules/(?!(${transpileModules.map(escapeRegex).join('|')})/)`);

  config.module.rules.push({
    test: /\.(js|mjs|jsx)$/,
    exclude: regex,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['babel-preset-expo'],
      },
    },
  });

  return config;
};
