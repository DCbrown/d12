import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Button, Text, View } from 'react-native';

export default function App() {
  const [d4, setd4] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);
  
  const handleSavedValue = () => {

    setCurrentValue((prev) => {
      return prev + d4;
    });
  }

  

  const rolld4 = () => {
   setd4(Math.floor(Math.random() * 4) + 1);
   console.log('roll', d4)
  }


  return (
    <View style={styles.container}>
       <StatusBar style="auto" />
       <Button
        title="roll"
        onPress={() => rolld4()}
      />
      <Button
        title="Save Value"
        onPress={() => handleSavedValue(d4)}
      />  
      <Text>value {d4}</Text>
      <Text>Saved Value: {currentValue}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
