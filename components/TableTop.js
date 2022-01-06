import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import { Button, ButtonGroup, Text, Input } from 'react-native-elements';

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
      }
    }
    
    const roll = (d) => {
      setDR(Math.floor(Math.random() * d) + 1);
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
      <ScrollView>
        <View style={styles.item}>
            <Button
            title="+"
            titleStyle={styles.btn}
            onPress={() => addSV()}
            />  
          </View>
        <View>
          <Text h4 style={styles.subHeader}>Saved Value:</Text>
          <Input
            keyboardType="numeric"
            value={JSON.stringify(currentSV)}
            onChangeText={value => setCurrentSV(Number(value))} 
            style={styles.saveInputValue}
            maxLength = {4}
          />
        </View>
        <View style={styles.item}>
            <Button
                title="-"
                titleStyle={styles.btn}
                onPress={() => subtractSV()}
            />
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

        <Text h1 style={styles.diceValue}>{dR}</Text>
       

        <ButtonGroup
            buttons={['Save Value', 'Roll']}
            onPress={(value) => {
            diceOptions(value);
            }}
            containerStyle={styles.diceActionBtnGroup}
        />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',  
  },
  subHeader: {
    textAlign : "center",
    paddingVertical : 5,
    marginBottom : 10,
  },
  item: {
    width: '100%',
    padding: 10,
    textAlign: "center"
  },
  diceValue: {
    textAlign: "center",
    paddingTop: 12,
    paddingBottom: 14,
    color: 'black',
  },
  saveInputValue: {
    textAlign : "center",
    width: "10%",
    fontSize: 32
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
