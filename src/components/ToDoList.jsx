import { Pressable, ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

export function ToDoList({ tasks, deleteTask }) {
  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <View key={index} style={styles.taskContainer}>
          <View style={styles.task}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
          <Button
            title="Delete"
            onPress={() => deleteTask(index)} 
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    marginBottom: 10,
  },
  task: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#fff',
  },
  taskText: {
    fontSize: 14,
  },
});
