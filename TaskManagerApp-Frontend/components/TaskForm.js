import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const TaskForm = ({ onSubmit, initialValues = { id: null, title: '', description: '', status: '', dueDate: '' } }) => {
  const [id, setId] = useState(initialValues.id);
  const [title, setTitle] = useState(initialValues.title);
  const [description, setDescription] = useState(initialValues.description);
  const [status, setStatus] = useState(initialValues.status);
  const [dueDate, setDueDate] = useState(initialValues.dueDate);

  
  useEffect(() => {
    setId(initialValues.id);
    setTitle(initialValues.title);
    setDescription(initialValues.description);
    setStatus(initialValues.status);
    setDueDate(initialValues.dueDate);
  }, []);

  
  const handleSubmit = () => {
    if (!title) {
      alert('Title is required');
      return;
    }
    const taskData = id ? { id, title, description, status, dueDate } : { title, description, status, dueDate };
    onSubmit(taskData);
  };

  return (
    <View style={styles.form}>
      {id && (
        <TextInput
          style={styles.input}
          placeholder="ID"
          value={id.toString()}
          onChangeText={setId}
          editable={false}
        />
      )}
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)} 
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Status"
        value={status}
        onChangeText={setStatus}
      />
      <TextInput
        style={styles.input}
        placeholder="Due Date (YYYY-MM-DD)"
        value={dueDate}
        onChangeText={setDueDate}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 10,
  },
  input: {
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default TaskForm;
