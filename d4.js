import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Button, Text, View } from 'react-native';
// dice 1 - 4

const D4 = ({handleSavedValue, setCurrentValue, currentValue}) => {
  const [d4, setd4] = useState(0);

  const rolld4 = () => {
    const d4Int = Math.floor(Math.random() * 4) + 1
    setd4(d4Int);
    setCurrentValue(d4Int);
  }

  return (
    <View style={styles.container}>
      <Text>D4 Dice</Text>
      <StatusBar style="auto" />
      <Button
        title="roll"
        onPress={() => rolld4()}
      />
      <Button
        title="Save Value"
        onPress={() => handleSavedValue(d4, currentValue)}
      />  
      <Text>value {d4}</Text>
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

export default D4;