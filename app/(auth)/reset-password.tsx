import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { supabase } from '@/lib/supabase';
import { ResetPasswordForm } from './auth/ResetPasswordForm';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

export default function ResetPasswordScreen() {
  const router = useRouter();
  const { access_token } = useLocalSearchParams<{ access_token?: string }>();
  const [tokenChecked, setTokenChecked] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const verifyToken = async () => {
      if (!access_token) {
        setError('No access token provided.');
        return;
      }

      const { data, error } = await supabase.auth.setSession({
        access_token,
        refresh_token: access_token, // required by Supabase SDK even if unused here
      });

      if (error || !data.session) {
        setError('Invalid or expired reset token.');
      }

      setTokenChecked(true);
    };

    verifyToken();
  }, [access_token]);

  if (!tokenChecked) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Your Password</Text>
      <ResetPasswordForm
        onSuccess={() => router.replace('/sign-in')}
        onError={setError}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 24,
    color: '#111827',
  },
  error: {
    color: '#dc2626',
    marginTop: 12,
    fontSize: 14,
  },
});
