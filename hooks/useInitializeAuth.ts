import { useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useAuthStore } from '@/stores/authStore';

export function useInitializeAuth() {
  const setAuth = useAuthStore.setState;
  const getAuth = useAuthStore.getState;

  useEffect(() => {
    console.log('🔁 Initializing auth');

    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log('✅ getSession result:', session);
      setAuth({ session, user: session?.user || null });

      if (session?.user) {
        getAuth().refreshProfile();
      } else {
        setAuth({ loading: false });
      }
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      console.log('🔄 Auth state change:', session);
      setAuth({ session, user: session?.user || null });

      if (session?.user) {
        getAuth().refreshProfile();
      } else {
        setAuth({ profile: null, loading: false });
      }
    });
  }, []);
}
