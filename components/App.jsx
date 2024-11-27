import React, { useState } from 'react';
import { View } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { ToDoForm } from './ToDoForm';
import { ToDoList } from './ToDoList';

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (task) => {
    if (task.trim().length > 0 && !tasks.includes(task.trim())) { 
      setTasks([...tasks, task.trim()]);
    }
  };

  return (
    <View>
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

export default App;
