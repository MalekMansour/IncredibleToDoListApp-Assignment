import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

export function ToDoList({ tasks, deleteTask }) {
  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <View key={index} style={styles.taskContainer}>
          <View style={styles.task}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
          {/* Delete button */}
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => deleteTask(index)}
          >
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10, 
  },
  task: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#fff',
    flex: 1, 
  },
  taskText: {
    fontSize: 14,
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 12,
  },
});
