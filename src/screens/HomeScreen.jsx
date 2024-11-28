import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ToDoList } from '../components/ToDoList';
import { ToDoForm } from '../components/ToDoForm';

export default function HomeScreen() {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const addTask = (task) => {
    if (task.trim().length > 0 && !tasks.includes(task.trim())) {
      setTasks([...tasks, task.trim()]);
    }
  };

  return (
    <View style={styles.container}>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    padding: 20,
  },
});
