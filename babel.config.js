// babel.config.js
module.exports = function (api) {
  api && api.cache && api.cache(true);
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
      // You may re-add transform-import-meta if *you know* you're using it:
      // 'babel-plugin-transform-import-meta',
    ],
  };
};
