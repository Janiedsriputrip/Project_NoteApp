import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Note = ({ content, onDelete, onEdit }) => {
  return (
    <View style={styles.note}>
      <Text>{content}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Edit" onPress={onEdit} />
        <Button title="Delete" onPress={onDelete} color="red" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  note: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '30%',
  },
});

export default Note;