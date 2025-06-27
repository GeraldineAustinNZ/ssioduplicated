import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useAuthStore } from '@/stores/authStore';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';

export default function RootLayout() {
  useFrameworkReady();
  const { loading } = useAuthStore();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Slot />
      <StatusBar style="auto" />
    </>
  );
}
