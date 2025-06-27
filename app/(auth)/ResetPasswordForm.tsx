import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'expo-router';
import { supabase } from '@/lib/supabase';

export function ResetPasswordForm() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validatePassword = (password: string) => {
    if (password.length < 8) {
      return 'Password must be at least 8 characters long';
    }
    if (!/[a-zA-Z]/.test(password) || !/\d/.test(password)) {
      return 'Password must include at least one letter and one number';
    }
    return null;
  };

  const handleSubmit = async () => {
    setFormError(null);
    const validationError = validatePassword(password);
    if (validationError) {
      setFormError(validationError);
      return;
    }

    setIsSubmitting(true);
    const { error } = await supabase.auth.updateUser({ password });
    setIsSubmitting(false);

    if (error) {
      setFormError(error.message || 'Something went wrong');
    } else {
      router.replace('/reset-success');
    }
  };

  return (
    <View style={styles.form}>
      <Input
        label="New Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        required
      />

      {formError && <Text style={styles.errorText}>{formError}</Text>}

      <Button
        title={isSubmitting ? 'Resetting...' : 'Reset Password'}
        onPress={handleSubmit}
        disabled={isSubmitting}
        loading={isSubmitting}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 32,
    gap: 16,
  },
  errorText: {
    color: '#dc2626',
    fontSize: 14,
    marginBottom: 8,
  },
});
