import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Optional: Hide headers on auth screens
      }}
    />
  );
}
