import React, { useState } from "react";
import { StyleSheet, View, Alert } from 'react-native';
import { Button, ButtonGroup, Text, } from 'react-native-elements';

const TableTop = () => {
  const [dR, setDR] = useState(0);
  const [currentSV, setCurrentSV] = useState(0);
  const [dice, setDice] = useState(4);
  const [selectedDiceIndex, setSelectedDiceIndex] = useState(0);

  const handleSavedValue = () => {
      setCurrentSV((prev) => {
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
  
    const diceOptions = (value) => {
      switch(value) {
        case 0:
          handleSavedValue(dR)
        break;
        case 1:
          roll(dice)
        break;
        case 2:
          clear()
        break;
      }
    }
    
    const roll = (d) => {
      setDR(Math.floor(Math.random() * d) + 1);
    }
  
    const clear = () => {
      return Alert.alert(
        "Are your sure?",
        "Clear saved value",
        [
          {
            text: "Yes",
            onPress: () => {
              setCurrentSV(0);
            },
          },
          {
            text: "No",
          },
        ]
      );
    }
    
    const addSV = () => {
      setCurrentSV((prev) => {
        return prev + 1;
      });
    }
  
    const subtractSV = () => {
      if (currentSV != 0) {
        setCurrentSV((prev) => {
          return prev - 1;
        });
      }
    }
  

  return (
      <>
          <View>
          <Text h4 style={styles.subHeader}>Saved Value: {currentSV}</Text>
          </View>
          <View>
          <ButtonGroup
              buttons={['D4', 'D6', 'D8', 'D10', 'D12', 'D20']}
              selectedIndex={selectedDiceIndex}
              onPress={(value) => {
              setSelectedDiceIndex(value);
              selectDice(value);
              }}
              containerStyle={styles.diceBtnGroup}
          />
          </View>  
          <View style={styles.container}>
          <View style={styles.item}>
              <Button
              title="+"
              titleStyle={styles.btn}
              onPress={() => addSV()}
              />  
          </View>
          <View style={styles.item}>
          <Text h1 style={styles.diceValue}>{dR}</Text>
          </View>
          <View style={styles.item}>
          <Button
              title="-"
              titleStyle={styles.btn}
              onPress={() => subtractSV()}
          />
          </View>
          </View>
          <ButtonGroup
              buttons={['Save Value', 'Roll', 'Clear']}
              onPress={(value) => {
              diceOptions(value);
              }}
              containerStyle={styles.diceActionBtnGroup}
          />
      </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',  
  },
  subHeader: {
    backgroundColor : "#2089dc",
    color : "white",
    textAlign : "center",
    paddingVertical : 5,
    marginBottom : 10
  },
  item: {
    width: '33%',
    padding: 10
  },
  diceValue: {
    textAlign : "center",
    paddingVertical : 5,
    color: 'black'
  },
  btn: {
    fontWeight: 'bold', 
    fontSize: 32
  },
  diceBtnGroup: {
    marginBottom: 20, 
    height: 75
  },
  diceActionBtnGroup: {
    marginBottom: 100, 
    height: 100
  }
});

export default TableTop
