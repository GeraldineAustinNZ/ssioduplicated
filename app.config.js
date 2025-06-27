// app.config.ts
export default {
  name: "SurgerySupport.io",
  slug: "surgery-support-platform",
  version: "1.0.0",
  orientation: "portrait",
  userInterfaceStyle: "automatic",
  icon: "./public/icon.png",
  splash: {
    image: "./public/icon.png", // fallback to icon
    resizeMode: "contain",
    backgroundColor: "#ffffff"
  },
  web: {
    bundler: "metro",
    output: "static", // improves preview stability in Bolt
    favicon: "./public/icon.png"
  },
  experiments: {
    typedRoutes: true
  }
};
