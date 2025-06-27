import { useEffect } from 'react';
import { Redirect } from 'expo-router';
import { useAuthStore } from '@/stores/authStore';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

export default function Index() {
  const { user, loading } = useAuthStore();

  useEffect(() => {
    console.log('🔍 Index render — loading:', loading, 'user:', user);
  }, [loading, user]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return <Redirect href={user ? '/(tabs)' : '/(auth)/sign-in'} />;
}
