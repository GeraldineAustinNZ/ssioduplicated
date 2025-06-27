import { useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useAuthStore } from '@/stores/authStore';

export function useFrameworkReady() {
  useEffect(() => {
    // Initialize session on app load
    supabase.auth.getSession().then(({ data: { session } }) => {
      useAuthStore.setState({
        session,
        user: session?.user || null,
      });

      if (session?.user) {
        useAuthStore.getState().refreshProfile();
      } else {
        useAuthStore.setState({ loading: false });
      }
    });

    // Listen for auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      useAuthStore.setState({
        session,
        user: session?.user || null,
      });

      if (session?.user) {
        useAuthStore.getState().refreshProfile();
      } else {
        useAuthStore.setState({
          profile: null,
          loading: false,
        });
      }
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);
}
