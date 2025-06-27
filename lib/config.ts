import Constants from 'expo-constants';

type Extra = {
  apiUrl: string;
  environment: string;
  eas: {
    projectId: string;
  };
};

export const extra = Constants.expoConfig?.extra as Extra;
