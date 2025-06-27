import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useAuthStore } from '@/stores/authStore';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';

export default function RootLayout() {
  console.log('✅ RootLayout rendering'); // 👈 Debug log for web

  useFrameworkReady();
  const { loading } = useAuthStore();

  if (loading) {
    console.log('⏳ App still loading'); // 👈 Optional: log loading state
    return <LoadingSpinner />;
  }

  return (
    <>
      <Slot />
      <StatusBar style="auto" />
    </>
  );
}
