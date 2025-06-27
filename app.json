{
  "expo": {
    "name": "SurgerySupport.io",
    "slug": "surgery-support-platform",
    "version": "1.0.0",
    "orientation": "portrait",
    "scheme": "surgerysupport",
    "userInterfaceStyle": "automatic",
    "newArchEnabled": true,
    "icon": "./public/icon.png",
    "splash": {
      "image": "./public/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "web": {
      "bundler": "metro",
      "output": "server",
      "favicon": "./public/icon.png"
    },
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "io.surgerysupport.app"
    },
    "android": {
      "package": "io.surgerysupport.app",
      "permissions": [
        "CAMERA",
        "READ_EXTERNAL_STORAGE",
        "WRITE_EXTERNAL_STORAGE",
        "NOTIFICATIONS"
      ],
      "intentFilters": [
        {
          "action": "VIEW",
          "data": {
            "scheme": "surgerysupport",
            "host": "*"
          },
          "category": ["BROWSABLE", "DEFAULT"]
        }
      ]
    },
    "plugins": [
      "expo-router",
      "expo-camera",
      "expo-notifications",
      [
        "expo-document-picker",
        {
          "iCloudContainerEnvironment": "Production"
        }
      ]
    ],
    "experiments": {
      "typedRoutes": true
    },
    "assetBundlePatterns": ["**/*"],
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "extra": {
      "eas": {
        "projectId": "REPLACE_WITH_YOUR_EAS_PROJECT_ID"
      }
    }
  }
}
