import { useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useAuthStore } from '@/stores/authStore';

export function useFrameworkReady() {
  useEffect(() => {
    console.log('🚀 useFrameworkReady init');

    // Initial session check
    supabase.auth.getSession().then(({ data, error }) => {
      console.log('🟡 getSession result:', data, 'error:', error);

      useAuthStore.setState({
        session: data.session,
        user: data.session?.user || null,
      });

      if (data.session?.user) {
        console.log('🔵 Session has user, refreshing profile');
        useAuthStore.getState().refreshProfile();
      } else {
        console.log('⚪ No session/user, setting loading=false');
        useAuthStore.setState({ loading: false });
      }
    });

    // Auth change listener
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('🔁 Auth state change:', event, session);

      useAuthStore.setState({
        session,
        user: session?.user || null,
      });

      if (session?.user) {
        useAuthStore.getState().refreshProfile();
      } else {
        useAuthStore.setState({ profile: null, loading: false });
      }
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);
}
