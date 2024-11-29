// src/screens/HomeScreen.jsx

import React, { useState } from 'react';
import { Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import { ToDoList } from '../components/ToDoList';
import { ToDoForm } from '../components/ToDoForm';

export default function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const addTask = (task) => {
    if (task.trim().length > 0 && !tasks.includes(task.trim())) {
      setTasks([...tasks, task.trim()]);
    }
  };

  return (
    <MainLayout>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </MainLayout>
  );
}
