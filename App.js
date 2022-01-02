import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Alert  } from 'react-native';
import { Button, ButtonGroup, Card, Text, Input, } from 'react-native-elements';
import CardGame from './components/TableTop';
import TableTop from './components/CardGame';


export default function App() {
  const [isTableTop, setisTableTop] = useState(true);
  const [dR, setDR] = useState(0);
  const [currentSV, setCurrentSV] = useState(0);
  const [dice, setDice] = useState(4);

  const [selectedModeIndex, setSelectedModeIndex] = useState(0);
  
  const [p1LifeCounter, setP1LifeCounter] = useState(20);
  const [p2LifeCounter, setP2LifeCounter] = useState(20);

  const [coin, setCoin] = useState("----");

  const selectMode = (value) => {
    switch(value) {
      case 0:
        setisTableTop(true);
      break;
      case 1:
        setisTableTop(false);
      break;
    }
  }

  /* Dice logic */
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
    console.log('roll', dR)
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

  /* TT Logic */

  const addP1 = () => {
    setP1LifeCounter((prev) => {
      return prev + 1;
    });
  }

  const subtrackP1 = () => {
    if (p1LifeCounter != 0) {
      setP1LifeCounter((prev) => {
        return prev - 1;
      });
    }
  }

  const addP2 = () => {
    setP2LifeCounter((prev) => {
      return prev + 1;
    });
  }

  const subtrackP2 = () => {
    if (p2LifeCounter != 0) {
      setP2LifeCounter((prev) => {
        return prev - 1;
      });
    }
  }

  const flipCoin = () => {
    setCoin("FLIPPING...")

    setTimeout(() => {
      let coin = Math.floor(Math.random() * 2);

      if (coin == 1 ) {
        setCoin("HEADS");
      } else {
        setCoin("TAILS");
      }
      console.log("number: ", coin)
    }, 3000);  
  }

return (
  <>
    <StatusBar/>
    {/* TODO: remove inline styles and add stylesheet */}
    {/* MODE SELECTION -- TODO: Make me a component! */}
    <View style={styles.modeWrapper}>
      <Text h4 style={styles.subHeader}>Mode</Text>
      <ButtonGroup
        buttons={['Table Top', 'Card Game']}
        selectedIndex={selectedModeIndex}
        onPress={(value) => {
          setSelectedModeIndex(value);
          selectMode(value);
        }}
        containerStyle={styles.modeBtnGroup}
      />
      </View>
     { isTableTop && 
      <CardGame />
     }
      <View>
      { !isTableTop && 
      <TableTop />
      }  
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  modeWrapper: {
    paddingTop: 50,
  },
  modeBtnGroup: {
    marginBottom: 20, 
    height: 75
  },
  subHeader: {
    backgroundColor : "#2089dc",
    color : "white",
    textAlign : "center",
    paddingVertical : 5,
    marginBottom : 10
  },
});
