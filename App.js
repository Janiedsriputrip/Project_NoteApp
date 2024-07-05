import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import Note from './Note';
import NoteForm from './NoteForm';

export default function App() {
  const [notes, setNotes] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editNote, setEditNote] = useState(null);

  const addNoteHandler = (noteContent) => {
    if (editNote) {
      // Edit existing note
      const updatedNotes = notes.map((note) =>
        note.id === editNote.id ? { ...note, content: noteContent } : note
      );
      setNotes(updatedNotes);
      setEditNote(null);
    } else {
      // Add new note
      const newNote = { id: Math.random().toString(), content: noteContent };
      setNotes((currentNotes) => [...currentNotes, newNote]);
    }
    setIsAdding(false);
  };

  const deleteNoteHandler = (id) => {
    setNotes((currentNotes) => currentNotes.filter((note) => note.id !== id));
  };

  const editNoteHandler = (id) => {
    const selectedNote = notes.find((note) => note.id === id);
    setEditNote(selectedNote);
    setIsAdding(true);
  };

  const cancelEditHandler = () => {
    setEditNote(null);
    setIsAdding(false);
  };

  return (
    <View style={styles.container}>
      {!isAdding && (
        <Button title="Tambah Catatan" onPress={() => setIsAdding(true)} />
      )}
      {isAdding && (
        <NoteForm
          onAddNote={addNoteHandler}
          onCancel={cancelEditHandler}
          editNote={editNote}
        />
      )}
      <FlatList
        data={notes}
        renderItem={(itemData) => (
          <Note
            content={itemData.item.content}
            onDelete={() => deleteNoteHandler(itemData.item.id)}
            onEdit={() => editNoteHandler(itemData.item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

