import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Alert, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';
import { ButtonGroup, Text, Input, Button } from 'react-native-elements';
import { useTheme } from '../theme/ThemeProvider';

const TableTop = () => {
  const [dR, setDR] = useState("Dice Ready");
  const [currentSV, setCurrentSV] = useState(0);
  const [dice, setDice] = useState(4);
  const [selectedDiceIndex, setSelectedDiceIndex] = useState(0);
  

  const {colors} = useTheme();
    
    const subHeader = {
        fontSize: 18,
        color: colors.text,
        textAlign : "center",
        paddingVertical : 5,
        marginBottom : 10,
    }

    const saveInputValue = {
      textAlign : "center",
      color: colors.text,
      width: "10%",
      fontSize: 32
    }

    const diceValue = {
      color: colors.text,
      textAlign: "center",
      paddingBottom: 14,
    }

    const btn = {
      backgroundColor: colors.primary,
      color: colors.textBtn,
    }

    const btnDisbaled = {
      backgroundColor: colors.disabledBtn,
      color: colors.disabledBackground,
    }

    const btnText = {
      color: colors.text,
    }

    const containerStyle = {
        margin: 24,
        padding: 12,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: colors.primary,
    }


  const handleSavedValue = () => {
    setDR("Saving Dice Value");
    setTimeout(()=> {
      setCurrentSV((prev) => {
        return prev + dR;
      });
      setDR("Dice Ready");
    }, 500)   
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
      setDR("Rolling");
      setTimeout(()=> {
        setDR(Math.floor(Math.random() * d) + 1);
      }, 500)
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
            buttonStyle={btn}
            onPress={() => addSV()}
            />  
          </View>
        <View>
          <Text h4 style={ subHeader }>Saved Value:</Text>
          <Input
            keyboardType="numeric"
            value={JSON.stringify(currentSV)}
            onChangeText={value => setCurrentSV(Number(value))} 
            style={saveInputValue}
            maxLength = {4}
          />
        </View>
        <View style={styles.item}>
            <Button
                title="-"
                buttonStyle={btn} 
                onPress={() => subtractSV()}
            />
          </View>
        <View>
          <ButtonGroup
              buttons={['D4', 'D6', 'D8', 'D10', 'D12', 'D20']}
              disabledStyle={btnDisbaled}
              disabledTextStyle={btnDisbaled}
              disabled={dR === "Rolling"}
              selectedIndex={selectedDiceIndex}
              onPress={(value) => {
              setSelectedDiceIndex(value);
              selectDice(value);
              }}
              buttonStyle={btn}
              textStyle={btn} 
              containerStyle={styles.diceBtnGroup}
              selectedButtonStyle={btn}
          />
        </View>  
        <Text h4 style={subHeader}>Dice Value:</Text>      
        <Text h1 style={diceValue}>{dR}</Text>
       
        
        <ButtonGroup
            disabled={dR === "Rolling" || dR === "Saving Dice Value"}
            buttonStyle={btn}
            disabledStyle={btnDisbaled}
            disabledTextStyle={btnDisbaled}
            textStyle={{color:"white"}} 
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
    paddingBottom: 14,
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
