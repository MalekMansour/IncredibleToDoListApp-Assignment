import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ToDoForm } from './ToDoForm';
import { ToDoList } from './ToDoList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Define stack navigator
const Stack = createStackNavigator();

// Define the ToDoScreen component
function ToDoScreen() {
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

// Main App Component
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="ToDo" 
          component={ToDoScreen} 
          options={{ title: 'To-Do List' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    padding: 20,
  },
});
