module.exports = function (api) {
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // ✅ MUST be first to properly transpile import.meta for web
      'babel-plugin-transform-import-meta',

      // ✅ Module resolver for @/ aliasing
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
