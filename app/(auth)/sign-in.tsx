import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { useRouter } from 'expo-router';
import { useAuthStore } from '@/stores/authStore';
import { SignUpPrompt } from './auth/SignUpPrompt';

export default function SignInScreen() {
  const router = useRouter();
  const { signIn, loading, user } = useAuthStore();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setFormError(null);

    if (!email || !password) {
      setFormError('Email and password are required');
      return;
    }

    setIsSubmitting(true);
    const { error } = await signIn(email, password);
    setIsSubmitting(false);

    if (error) {
      setFormError(error.message || 'Something went wrong');
    } else {
      router.replace('/(tabs)');
    }
  };

  if (loading || user) {
    return <LoadingSpinner />;
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({ ios: 'padding', android: undefined })}
    >
      <View style={styles.form}>
        <Text style={styles.title}>Sign In</Text>

        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          required
        />

        <Input
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          required
        />

        <TouchableOpacity onPress={() => router.push('/reset-password')}>
          <Text style={styles.forgotText}>Forgot your password?</Text>
        </TouchableOpacity>

        {formError && <Text style={styles.error}>{formError}</Text>}

        <Button
          title="Sign In"
          onPress={handleSubmit}
          disabled={isSubmitting}
          loading={isSubmitting}
        />

        <SignUpPrompt />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    padding: 24,
  },
  form: {
    gap: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 12,
    color: '#111827',
  },
  error: {
    color: '#dc2626',
    marginBottom: 8,
    fontSize: 14,
  },
  forgotText: {
    fontSize: 14,
    color: '#2563eb',
    marginBottom: 8,
    textAlign: 'right',
  },
});
