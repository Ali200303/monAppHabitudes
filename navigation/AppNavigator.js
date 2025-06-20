import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AddHabitScreen from '../screens/AddHabitScreen';
import StatsScreen from '../screens/StatsScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Accueil' }} />
      <Stack.Screen name="AddHabit" component={AddHabitScreen} options={{ title: 'Ajouter une habitude' }} />
      <Stack.Screen name="Stats" component={StatsScreen} options={{ title: 'Statistiques' }} />
    </Stack.Navigator>
  );
}
