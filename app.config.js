export default {
  name: 'SurgerySupport.io',
  slug: 'surgery-support-platform',
  version: '1.0.0',
  orientation: 'portrait',
  userInterfaceStyle: 'automatic',
  scheme: 'surgerysupport',
  icon: './public/icon.png',
  splash: {
    image: './public/icon.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  web: {
    bundler: 'static', // ✅ avoids Metro / import.meta issues
    output: 'export',
    favicon: './public/icon.png',
  },
  experiments: {
    typedRoutes: true,
  },
};
