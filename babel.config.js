module.exports = function (api) {
  if (api && typeof api.cache === 'function') {
    api.cache(true);
  }

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'babel-plugin-transform-import-meta', // Must be FIRST
      [
        'module-resolver',
        {
          alias: {
            '@': './',
          },
        },
      ],
    ],
  };
};
