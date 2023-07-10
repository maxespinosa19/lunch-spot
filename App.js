import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RestList from './app/RestList';
import Tray from './app/Tray';

export default function App() {

  const [selectRestaurant, setSelectRestaurant] = useState(null)
  return (
    <>
    <View style={styles.container}>
      <Text style ={styles.header}>
        Lunch Spot
      </Text>
      <RestList selectRestaurant={selectRestaurant} />
      <StatusBar style="auto" />
    </View>
      <Tray setSelectRestaurant={setSelectRestaurant}/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#f4f5f6',
    alignItems: 'center',
    justifyContent: 'flex-start',
    
  },
  header: {
    color: '#232323',
    fontSize: 36,
    fontWeight: 800
  }
});
