// screens/AddHabitScreen.js
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { HabitsContext } from '../contexts/HabitsContext';

export default function AddHabitScreen({ navigation }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Santé');
  const [goalPerDay, setGoalPerDay] = useState('1');
  const [note, setNote] = useState('');

  const { addHabit } = useContext(HabitsContext);

  const handleAdd = () => {
    if (name.trim()) {
      addHabit(name.trim(), category, parseInt(goalPerDay), note);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajouter une habitude</Text>

      <TextInput
        placeholder="Nom de l’habitude"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <Text style={styles.label}>Catégorie :</Text>
      <Picker selectedValue={category} onValueChange={setCategory} style={styles.input}>
        <Picker.Item label="Santé" value="Santé" />
        <Picker.Item label="Hydratation" value="Hydratation" />
        <Picker.Item label="Sport" value="Sport" />
        <Picker.Item label="Sommeil" value="Sommeil" />
      </Picker>

      <TextInput
        placeholder="Objectif par jour (ex: 3)"
        value={goalPerDay}
        onChangeText={setGoalPerDay}
        keyboardType="numeric"
        style={styles.input}
      />

      <TextInput
        placeholder="Note personnelle (facultatif)"
        value={note}
        onChangeText={setNote}
        multiline
        numberOfLines={3}
        style={[styles.input, { height: 60 }]}
      />

      <Button title="Ajouter l’habitude" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 5 },
  label: { marginBottom: 5, fontWeight: 'bold' },
});
