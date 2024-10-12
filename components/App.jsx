import React from 'react';
import {View} from 'react-native';
import {ToDoForm} from './ToDoForm';
import {ToDoList} from './ToDoList';
function App() {
  return (
    <View>
      <ToDoList />
      <ToDoForm />
    </View>
  );
}

export default App;
