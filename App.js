import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, ButtonGroup, withTheme, Text } from 'react-native-elements';

export default function App() {
  const [dR, setDR] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [dice, setDice] = useState(4);

  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const handleSavedValue = () => {
    setCurrentValue((prev) => {
      return prev + dR;
    });
  }

  const selectDice = (value) => {
    switch(value) {
      case 0:
      setDice(4)
      break;
      case 1:
      setDice(6)
      break;
      case 2:
      setDice(8)
      break;
      case 3:
      setDice(10)
      break;
      case 4:
      setDice(12)
      break;
      case 5:
      setDice(20)
      break;
    }
  }
  
/*
  const rolld4 = () => {
   setd4(Math.floor(Math.random() * 4) + 1);
   console.log('roll', d4)
  }
*/
  const roll = (d) => {
    setDR(Math.floor(Math.random() * d) + 1);
    console.log('roll', dR)
  }

  const clear = () => {
    setCurrentValue(0);
  }
  
  const add = () => {
    setCurrentValue((prev) => {
      return prev + 1;
    });
  }

  const subtract = () => {
    if (currentValue != 0) {
      setCurrentValue((prev) => {
        return prev - 1;
      });
    }
  }



return (
  <ScrollView>
    <View style={styles.values}>
     <Text h4 style={styles.subHeader}>Dice Type:{dice} - Value:{dR} - Saved Value: {currentValue}</Text>
    </View>
    <View style={styles.container}>
    <ButtonGroup
        buttons={['D4', 'D6', 'D8', 'D10', 'D12', 'D20']}
        selectedIndex={selectedIndex}
        onPress={(value) => {
          setSelectedIndex(value);
          selectDice(value);
          console.log(dice);
        }}
        containerStyle={{ marginBottom: 20 }}
      />
    </View>  
    <View style={styles.container}>
      <StatusBar style="auto" />
       <Button
        title="roll"
        onPress={() => roll(dice)}
      />
      <Button
        title="Save Value"
        onPress={() => handleSavedValue(dR)}
      />  
      <Button
        title="Clear"
        onPress={() => clear()}
      />  
      <Button
        title="Add"
        onPress={() => add()}
      />  
      <Button
        title="Subtract"
        onPress={() => subtract()}
      />  
    </View>
    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  values: {
    paddingTop: 50,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subHeader: {
    backgroundColor : "#2089dc",
    color : "white",
    textAlign : "center",
    paddingVertical : 5,
    marginBottom : 10
  }
});

