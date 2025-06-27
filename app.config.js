export default {
  name: "SurgerySupport.io",
  slug: "surgery-support-platform",
  version: "1.0.0",
  orientation: "portrait",
  userInterfaceStyle: "automatic",
  icon: "./public/icon.png",
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./public/icon.png"
  },
  splash: {
    image: "./public/splash.png", // ← using uploaded file
    resizeMode: "contain",
    backgroundColor: "#ffffff"
  },
  experiments: {
    typedRoutes: true
  }
};
