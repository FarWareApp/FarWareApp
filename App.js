import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>FarWareApp</Text>
        <Text style={styles.subtitle}>Expo SDK 51 • Starter</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f6f6f6' },
  card: { padding: 24, borderRadius: 16, backgroundColor: 'white', elevation: 2 },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 6 },
  subtitle: { fontSize: 14, opacity: 0.6 },
});
