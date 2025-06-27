export default {
  name: 'SurgerySupport.io',
  slug: 'surgery-support-platform',
  version: '1.0.0',
  orientation: 'portrait',
  userInterfaceStyle: 'automatic',
  icon: './public/icon.png',
  splash: {
    image: './public/icon.png', // can be replaced with a proper splash if needed
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  web: {
    bundler: 'metro',
    output: 'static',
    favicon: './public/icon.png', // ✅ this file MUST exist
  },
  experiments: {
    typedRoutes: true,
  },
};
