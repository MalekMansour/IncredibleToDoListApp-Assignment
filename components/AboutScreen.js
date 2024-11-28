import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  const currentDate = new Date().toLocaleDateString();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Incredible To-Do List App</Text>
      <Text style={styles.subtitle}>Created by: Malek Mansour</Text>
      <Text style={styles.subtitle}>Date: {currentDate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282c34',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#dcdcdc',
  },
});
