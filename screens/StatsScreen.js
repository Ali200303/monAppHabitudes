import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HabitsContext } from '../contexts/HabitsContext';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';


export default function StatsScreen() {
  const { habits } = useContext(HabitsContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Statistiques</Text>
      <Text>Nombre total d’habitudes : {habits.length}</Text>
      {habits.length > 0 && (
  <LineChart
    data={{
      labels: habits.map(h => h.name),
      datasets: [{
        data: habits.map(h => h.doneCount || 0)
      }]
    }}
    width={screenWidth * 0.9}
    height={220}
    chartConfig={{
      backgroundColor: '#ffffff',
      backgroundGradientFrom: '#ffffff',
      backgroundGradientTo: '#f2f2f2',
      decimalPlaces: 0,
      color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
      labelColor: () => '#333',
      style: { borderRadius: 16 },
      propsForDots: { r: "6", strokeWidth: "2", stroke: "#007AFF" }
    }}
    style={{ marginVertical: 20, borderRadius: 16 }}
  />
)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent:'center', alignItems:'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
});
const screenWidth = Dimensions.get("window").width;
