import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  // Charger les habitudes sauvegardées au démarrage
  useEffect(() => {
    const loadHabits = async () => {
      try {
        const data = await AsyncStorage.getItem('habits');
        if (data) {
          setHabits(JSON.parse(data));
        }
      } catch (error) {
        console.error('Erreur de chargement des habitudes:', error);
      }
    };
    loadHabits();
  }, []);

  // Sauvegarder les habitudes à chaque modification
  useEffect(() => {
    AsyncStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  // Ajouter une nouvelle habitude
  const addHabit = (name, category, goalPerDay, note) => {
    setHabits(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        name,
        category,
        goalPerDay,
        note,
        doneCount: 0
      }
    ]);
  };

  // Marquer comme faite
  const markHabitAsDone = (id) => {
    setHabits(prev =>
      prev.map(h =>
        h.id === id ? { ...h, doneCount: (h.doneCount || 0) + 1 } : h
      )
    );
  };

  // Supprimer une habitude
  const deleteHabit = (id) => {
    setHabits(prev => prev.filter(h => h.id !== id));
  };

  // on met à jour une habitude
  const updateHabit = (id, updates) => {
    setHabits(prev =>
      prev.map(habit =>
        habit.id === id ? { ...habit, ...updates } : habit
      )
    );
  };

  return (
    <HabitsContext.Provider value={{
      habits,
      addHabit,
      markHabitAsDone,
      deleteHabit,
      updateHabit
    }}>
      {children}
    </HabitsContext.Provider>
  );
};
