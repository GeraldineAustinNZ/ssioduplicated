// babel.config.js
module.exports = function (api) {
  if (api && typeof api.cache === 'function') {
    api.cache(true);
  }

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@': './',
          },
        },
      ],
      // Optional: Only enable this if you're explicitly using import.meta
      // or if a package is failing due to it.
      // 'babel-plugin-transform-import-meta',
    ],
  };
};
