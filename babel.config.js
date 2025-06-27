module.exports = function (api) {
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // ✅ Put this first to ensure it's applied before others
      'babel-plugin-transform-import-meta',
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
