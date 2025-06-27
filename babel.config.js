// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Enables absolute imports using @/path
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@': './',
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],
      // Required for Expo Router support
      'expo-router/babel',
    ],
  };
};
