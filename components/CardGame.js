import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Card, Text, Input, } from 'react-native-elements';
import { useTheme } from '../theme/ThemeProvider';

const CardGame = () => {
  const [p1LifeCounter, setP1LifeCounter] = useState(20);
  const [p2LifeCounter, setP2LifeCounter] = useState(20);

  const [coin, setCoin] = useState("----");

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
        let coin = Math.floor(Math.random() * 6) + 1;
  
        if (coin % 2 == 0 ) {
          setCoin("HEADS");
        } else {
          setCoin("TAILS");
        }
      }, 3000);  
    }

    const {colors} = useTheme();
    
    const subHeader = {
        fontSize: 18,
        color: colors.text,
        textAlign : "center",
        paddingVertical : 5,
        marginBottom : 10,
    }

    const saveInputValue = {
      marginBottom: 10, 
      textAlign : "center",
      color: colors.text,
      fontSize: 28, 
      paddingTop: 20
    }

    const diceValue = {
      color: colors.text,
      fontSize: 28, 
      textAlign: 'center', 
      paddingTop: 20
    }

    const btn = {
      backgroundColor: colors.primary,
      color: colors.textBtn,
    }

    const containerStyle = {
        backgroundColor: colors.backgroundCard,
    }

  return (
    <ScrollView style={{height:"100%"}}>
      <Card containerStyle={containerStyle}>
          <Card.Title style={subHeader}>P1 Life Counter</Card.Title>
          <Card.Divider />
          <View style={styles.container}>
            <View style={styles.row}>
              <Button
                title="+"
                buttonStyle={btn}
                titleStyle={styles.btn}
                onPress={() => addP1()}
              />  
            </View>
            <View style={styles.row}>
              <Input
                keyboardType={"phone-pad"}
                value={JSON.stringify(p1LifeCounter)}
                onChangeText={value => setP1LifeCounter(Number(value))} 
                number-pad
                style={saveInputValue}
                maxLength = {4}
              />
            </View>
            <View style={styles.row}>
              <Button
                buttonStyle={btn}
                title="-"
                titleStyle={styles.btn}
                onPress={() => subtrackP1()}
              />
            </View>
          </View>
        </Card>
        <Card containerStyle={containerStyle}>
          <Card.Title style={subHeader}>P2 Life Counter</Card.Title>
          <Card.Divider />
          <View style={styles.container}>
            <View style={styles.row}>
              <Button
                buttonStyle={btn}
                title="+"
                titleStyle={styles.btn}
                onPress={() => addP2()}
              />  
            </View>
            <View style={styles.row}>
              <Input
                keyboardType={"phone-pad"}
                value={JSON.stringify(p2LifeCounter)}
                onChangeText={value => setP2LifeCounter(Number(value))} 
                style={diceValue}
                maxLength = {4}
              
                style={saveInputValue}
              />
            </View>
            <View style={styles.row}>
              <Button
                buttonStyle={btn}
                title="-"
                titleStyle={styles.btn}
                onPress={() => subtrackP2()}
              />
            </View>
          </View>
        </Card>

        <Card containerStyle={containerStyle}>
          <Card.Title style={subHeader}>Coin Flip</Card.Title>
          <Card.Divider />
          <Text h3 h3Style={saveInputValue}>
            {coin}
          </Text>
          <Button
            buttonStyle={btn}
            title="Flip Coin"
            disabled={coin == "FLIPPING..."}
            onPress={() => flipCoin()}
          />
        </Card>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  values: {
    paddingTop: 50,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',    
  },
  controllContainer: {
    display:"none"
  },
  subHeader: {
    textAlign : "center",
    paddingVertical : 5,
    marginBottom : 10
  },
  row: {
    width: '33%',
  },
  diceValue: {
    textAlign : "center",
    paddingVertical : 5,
    marginBottom : 10,
  },
  btn: {
    fontWeight: 'bold', 
    fontSize: 32
  },
  lifeInput: {
    fontSize: 28, 
    textAlign: 'center', 
    paddingTop: 20
  },
  coinFlipText: {
    marginBottom: 10, 
    textAlign : "center"
  }
});

export default CardGame
