import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { HabitsContext } from '../contexts/HabitsContext';

export default function EditHabitScreen({ route, navigation }) {
  const { habit } = route.params;
  const { updateHabit } = useContext(HabitsContext);

  const [name, setName] = useState(habit.name);
  const [category, setCategory] = useState(habit.category || '');
  const [goalPerDay, setGoalPerDay] = useState(String(habit.goalPerDay || ''));
  const [note, setNote] = useState(habit.note || '');

  const handleUpdate = () => {
    if (name.trim() === '') {
      Alert.alert("Erreur", "Le nom de l’habitude est requis.");
      return;
    }

    updateHabit(habit.id, {
      name: name.trim(),
      category: category.trim(),
      goalPerDay: parseInt(goalPerDay) || 0,
      note: note.trim(),
    });

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modifier l’habitude</Text>

      <TextInput
        style={styles.input}
        placeholder="Nom"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Catégorie"
        value={category}
        onChangeText={setCategory}
      />

      <TextInput
        style={styles.input}
        placeholder="Objectif par jour"
        value={goalPerDay}
        keyboardType="numeric"
        onChangeText={setGoalPerDay}
      />

      <TextInput
        style={styles.input}
        placeholder="Note"
        value={note}
        onChangeText={setNote}
        multiline
      />

      <Button title="Enregistrer les modifications" onPress={handleUpdate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
});
