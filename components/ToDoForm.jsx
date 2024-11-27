import { Button, SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import React, { useState } from 'react';

export function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState(''); 

  const handleAddTask = () => {
    if (taskText.trim().length > 0) {
      addTask(taskText);
      setTaskText(''); 
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          placeholderTextColor="#888"
          onChangeText={(text) => setTaskText(text)} 
          value={taskText} 
        />
        <Button title="Add Task" color="#1E90FF" onPress={handleAddTask} /> 
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#555',
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 15,
    backgroundColor: '#222',
    color: '#fff',
    borderRadius: 5,
  },
});
