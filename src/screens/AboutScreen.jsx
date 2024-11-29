import React from 'react';
import { Text, Button, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = ({ navigation }) => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <MainLayout>
      <Text style={styles.title}>Incredible To-Do List App</Text>
      <Text style={styles.subtitle}>Created by: Malek Mansour</Text>
      <Text style={styles.subtitle}>Date: {currentDate}</Text>
      <Button
        title="Go Back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </MainLayout>
  );
};

const styles = StyleSheet.create({
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

export default AboutScreen;
