import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { HabitsContext } from '../contexts/HabitsContext';

export default function HabitDetailScreen({ route, navigation }) {
  const { habit: routeHabit } = route.params;
  const { habits, markHabitAsDone, deleteHabit } = useContext(HabitsContext);

  // Trouve l’habitude dans le contexte pour avoir la version la plus récente
  const habit = habits.find(h => h.id === routeHabit.id);

  if (!habit) {
    return (
      <View style={styles.container}>
        <Text>Habitude non trouvée.</Text>
      </View>
      
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Détail de l’habitude</Text>
      <Text style={styles.habitName}>{habit.name}</Text>
      <Text>Catégorie: {habit.category || '—'}</Text>
      <Text>Objectif par jour: {habit.goalPerDay || 0}</Text>
      <Text>Note: {habit.note || '—'}</Text>
      <Text style={{ marginVertical: 10 }}>Fait {habit.doneCount || 0} fois</Text>

      <Button title="Marquer comme faite" onPress={() => markHabitAsDone(habit.id)} />

      <Button
        title="Modifier"
        onPress={() => navigation.navigate('EditHabit', { habit })}
      />

      <Button
        title="Supprimer"
        color="red"
        onPress={() => {
          deleteHabit(habit.id);
          navigation.goBack();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent:'center', alignItems:'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  habitName: { fontSize: 18 },
});
