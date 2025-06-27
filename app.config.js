export default {
  name: "SurgerySupport.io",
  slug: "surgery-support-platform",
  version: "1.0.0",
  orientation: "portrait",
  userInterfaceStyle: "automatic",
  icon: "./public/icon.png",
  web: {
    bundler: "metro",
    output: "static", // <- important for preview stability
    favicon: "./public/icon.png"
  },
  splash: {
    image: "./public/icon.png", // reuse icon instead of missing splash
    resizeMode: "contain",
    backgroundColor: "#ffffff"
  },
  experiments: {
    typedRoutes: true
  }
};
