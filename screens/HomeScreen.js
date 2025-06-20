// screens/HomeScreen.js
import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { HabitsContext } from '../contexts/HabitsContext';

export default function HomeScreen({ navigation }) {
  const { habits } = useContext(HabitsContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suivi intelligent des habitudes de vie</Text>

      <FlatList
        data={habits}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity
            style={styles.habitItem}
            onPress={() => navigation.navigate('HabitDetail', { habit: item })}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
          
        )}
        ListEmptyComponent={<Text>Aucune habitude pour le moment</Text>}
        style={{ width: '100%' }}
      />

      <View style={styles.button}>
        <Button title="Ajouter une habitude" onPress={() => navigation.navigate('AddHabit')} />
      </View>
      <View style={styles.button}>
        <Button title="Voir les statistiques" onPress={() => navigation.navigate('Stats')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  habitItem: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  button: { width: '80%', marginVertical: 10 }
});
