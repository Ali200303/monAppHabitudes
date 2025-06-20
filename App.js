// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { HabitsProvider } from './contexts/HabitsContext';

import HomeScreen from './screens/HomeScreen';
import AddHabitScreen from './screens/AddHabitScreen';
import StatsScreen from './screens/StatsScreen';
import HabitDetailScreen from './screens/HabitDetailScreen';
import EditHabitScreen from './screens/EditHabitScreen';




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <HabitsProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddHabit" component={AddHabitScreen} />
          <Stack.Screen name="Stats" component={StatsScreen} />
          <Stack.Screen name="HabitDetail" component={HabitDetailScreen} />
          <Stack.Screen name="EditHabit" component={EditHabitScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </HabitsProvider>
  );
}
