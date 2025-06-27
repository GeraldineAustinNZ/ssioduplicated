// app.config.js
export default {
  name: 'SurgerySupport.io',
  slug: 'surgery-support-platform',
  version: '1.0.0',
  orientation: 'portrait',
  userInterfaceStyle: 'automatic',
  icon: './public/icon.png',
  splash: {
    image: './public/icon.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  web: {
    bundler: 'metro', // ✅ USE METRO NOT WEBPACK
    output: 'static',
    favicon: './public/icon.png',
  },
  experiments: {
    typedRoutes: true,
  },
};
