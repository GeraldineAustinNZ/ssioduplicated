import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { Button } from '@/components/ui/Button';

const signupUrl = process.env.EXPO_PUBLIC_SIGNUP_URL!;

export function SignUpPrompt() {
  return (
    <View style={styles.container}>
      <Text style={styles.promptText}>Don’t have an account?</Text>
      <Button
        title="Sign Up"
        variant="link"
        onPress={() => WebBrowser.openBrowserAsync(signupUrl)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    alignItems: 'center',
  },
  promptText: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
});
