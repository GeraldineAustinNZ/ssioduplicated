// app.config.js
export default {
  name: 'SurgerySupport.io',
  slug: 'surgery-support-platform',
  version: '1.0.0',
  orientation: 'portrait',
  userInterfaceStyle: 'automatic',
  icon: './public/icon.png', // ✅ ensure this exists
  splash: {
    image: './public/icon.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  web: {
    bundler: 'metro',
    output: 'static', // ✅ enables static export
    favicon: './public/icon.png', // ✅ must exist
  },
  experiments: {
    typedRoutes: true,
  },
};
