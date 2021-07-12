import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Weather from './components/Weather';

export default function App() {
 
 return (
    <View style={styles.container}>
        <Weather zipCode="90110"/>
        <StatusBar style="auto" />
    </View>
 );
}
const flex1 = ()=>{
  return (
      <View style={styles.container}>
        <Text style={styles.main}>main</Text>
      </View>

  )
}
const styles = StyleSheet.create({
      container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 40,
 }

});