import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export function ToDoList({ tasks, deleteTask }) {
  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <Pressable key={index} onPress={() => deleteTask(task)}>
          <View style={styles.task}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#fff',
  },
  taskText: {
    fontSize: 14,
  },
});
