import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const NoteForm = ({ onAddNote, onCancel, editNote }) => {
  const [noteContent, setNoteContent] = useState('');

  useEffect(() => {
    if (editNote) {
      setNoteContent(editNote.content);
    }
  }, [editNote]);

  const handleAddNote = () => {
    onAddNote(noteContent);
    setNoteContent('');
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Masukkan catatan"
        value={noteContent}
        onChangeText={(text) => setNoteContent(text)}
      />
      <View style={styles.buttonContainer}>
        <Button title="Simpan" onPress={handleAddNote} />
        <Button title="Batal" onPress={onCancel} color="red" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
});

export default NoteForm;