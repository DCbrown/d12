import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Alert  } from 'react-native';
import { Button, ButtonGroup, Card, Text, Input, } from 'react-native-elements';
import { Switch } from 'react-native-elements';

export default function App() {
  const [checked, setChecked] = useState(true);
  const [dR, setDR] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [dice, setDice] = useState(4);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [selectedModeIndex, setSelectedModeIndex] = useState(0);
  
  const [p1LifeCounter, setP1LifeCounter] = useState(20);
  const [p2LifeCounter, setP2LifeCounter] = useState(20);

  const [coin, setCoin] = useState("----");

  const toggleSwitch = () => {
    setChecked(!checked);
  };

  const handleSavedValue = () => {
    setCurrentValue((prev) => {
      return prev + dR;
    });
  }

  const selectMode = (value) => {
    switch(value) {
      case 0:
        setChecked(true);
      break;
      case 1:
        setChecked(false);
      break;
    }
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
    return Alert.alert(
      "Are your sure?",
      "Are you sure you want to clear saved value",
      [
        {
          text: "Yes",
          onPress: () => {
            setCurrentValue(0);
          },
        },
        {
          text: "No",
        },
      ]
    );
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
      console.log("this is the first message")
      console.log(coin)
      console.log("number: ", coin)
    }, 3000);  
  }

return (
  

  <ScrollView>
    <View style={styles.values}>
      <Text h4 style={styles.subHeader}>Mode</Text>
      <ButtonGroup
        buttons={['TableTop', 'Card']}
        selectedIndex={selectedModeIndex}
        onPress={(value) => {
          setSelectedModeIndex(value);
          selectMode(value);
        }}
        containerStyle={{ marginBottom: 20, height: 75}}
      />
      </View>
     { checked && 
      <>
      <View>
     <Text h4 style={styles.subHeader}>Saved Value: {currentValue}</Text>
    </View>
    <View>
    <ButtonGroup
        buttons={['D4', 'D6', 'D8', 'D10', 'D12', 'D20']}
        selectedIndex={selectedIndex}
        onPress={(value) => {
          setSelectedIndex(value);
          selectDice(value);
        }}
        containerStyle={{ marginBottom: 20, height: 75}}
      />
    </View>  
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.item}>
        <Button
          title="+"
          titleStyle={{ fontWeight: 'bold', fontSize: 32 }}
          onPress={() => add()}
        />  
      </View>
      <View style={styles.item}>
      <Text h1 style={styles.diceValue}>{dR}</Text>
      </View>
      <View style={styles.item}>
      <Button
        title="-"
        titleStyle={{ fontWeight: 'bold', fontSize: 32 }}
        onPress={() => subtract()}
      />
      </View>
    </View>
    <ButtonGroup
        buttons={['Save Value', 'Roll', 'Clear']}
        onPress={(value) => {
          diceOptions(value);
        }}
        containerStyle={{ marginBottom: 20, height: 100 }}
      />
      </>
     }
    
      <View>
      { !checked && 
      <>
      <Card>
            <Card.Title>P1 Life Counter</Card.Title>
            <Card.Divider />
            <View style={styles.container}>
              <StatusBar style="auto" />
              <View style={styles.item}>
                <Button
                  title="+"
                  titleStyle={{ fontWeight: 'bold', fontSize: 32 }}
                  onPress={() => addP1()}
                />  
              </View>
              <View style={styles.item}>
              <Input
               keyboardType="numeric"
               value={JSON.stringify(p1LifeCounter)}
               onChangeText={value => setP1LifeCounter(Number(value))} 
               style={{fontSize: 28, textAlign: 'center', paddingTop: 20}}
               maxLength = {4}
              />
              </View>
              <View style={styles.item}>
              <Button
                title="-"
                titleStyle={{ fontWeight: 'bold', fontSize: 32, }}
                onPress={() => subtrackP1()}
              />
              </View>
            </View>
          </Card>

          <Card>
            <Card.Title>P2 Life Counter</Card.Title>
            <Card.Divider />
            <View style={styles.container}>
              <StatusBar style="auto" />
              <View style={styles.item}>
                <Button
                  title="+"
                  titleStyle={{ fontWeight: 'bold', fontSize: 32 }}
                  onPress={() => addP2()}
                />  
              </View>
              <View style={styles.item}>
              <Input
               keyboardType="numeric"
               value={JSON.stringify(p2LifeCounter)}
               onChangeText={value => setP2LifeCounter(Number(value))} 
               style={{fontSize: 28, textAlign: 'center', paddingTop: 20}}
               maxLength = {4}
              />
              </View>
              <View style={styles.item}>
              <Button
                title="-"
                titleStyle={{ fontWeight: 'bold', fontSize: 32 }}
                onPress={() => subtrackP2()}
              />
              </View>
            </View>
          </Card>

          <Card>
          <Card.Title>Coin Flip</Card.Title>
            <Card.Divider />
            <Text h3 style={{ marginBottom: 10, textAlign : "center" }}>
              {coin}
            </Text>
            <Button
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="Flip Coin"
              disabled={coin == "FLIPPING..."}
              onPress={() => flipCoin()}
            />
          </Card>
      </>
      }  
      
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start', // if you want to fill rows left to right
    backgroundColor: '#fff',    
  },
  controllContainer: {
    display:"none"
  },
  subHeader: {
    backgroundColor : "#2089dc",
    color : "white",
    textAlign : "center",
    paddingVertical : 5,
    marginBottom : 10
  },
  item: {
    width: '33%', // is 50% of container width
    padding: 10
  },
  diceValue: {
    textAlign : "center",
    paddingVertical : 5,
    marginBottom : 10,
    color: 'black'
  }
});

