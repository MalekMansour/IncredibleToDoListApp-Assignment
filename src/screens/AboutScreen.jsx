import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = ({ navigation }) => {
  const [easterEggVisible, setEasterEggVisible] = useState(false);

  const handlePress = () => {
    setEasterEggVisible(!easterEggVisible);
  };

  const handleReturnHome = () => {
    navigation.goBack(); 
  };

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Incredible To-Do List App</Text>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.name}>Malek Mansour</Text>
        </TouchableOpacity>
        {easterEggVisible && (
          <Text style={styles.easterEgg}>You've found the Easter Egg!</Text>
        )}
        <Text style={styles.date}>Date: {new Date().toLocaleDateString()}</Text>

        {/* Return to Home Button */}
        <TouchableOpacity onPress={handleReturnHome} style={styles.returnButton}>
          <Text style={styles.returnButtonText}>Return to Home</Text>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    color: '#007BFF',
    marginBottom: 10,
  },
  easterEgg: {
    fontSize: 16,
    color: '#FF4500',
    marginTop: 10,
  },
  date: {
    fontSize: 16,
    marginTop: 20,
  },
  returnButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  returnButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default AboutScreen;
