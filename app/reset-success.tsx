import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'expo-router';

export default function ResetSuccessScreen() {
  const router = useRouter();

  const handleReturn = () => {
    router.replace('/sign-in');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Password Reset Successful</Text>
      <Text style={styles.message}>
        You’ve successfully reset your password. You can now sign in with your new credentials.
      </Text>

      <Button title="Return to Sign In" onPress={handleReturn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    color: '#4b5563',
    marginBottom: 24,
    textAlign: 'center',
  },
});
