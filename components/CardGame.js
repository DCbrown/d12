import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Card, Text, Input, } from 'react-native-elements';

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
          let coin = Math.floor(Math.random() * 2);
    
          if (coin == 1 ) {
            setCoin("HEADS");
          } else {
            setCoin("TAILS");
          }
        }, 3000);  
      }

    return (
      <ScrollView>
        <Card>
            <Card.Title>P1 Life Counter</Card.Title>
            <Card.Divider />
            <View style={styles.container}>
              <View style={styles.row}>
                <Button
                  title="+"
                  titleStyle={styles.btn}
                  onPress={() => addP1()}
                />  
              </View>
              <View style={styles.row}>
              <Input
               keyboardType="numeric"
               value={JSON.stringify(p1LifeCounter)}
               onChangeText={value => setP1LifeCounter(Number(value))} 
               style={styles.lifeInput}
               maxLength = {4}
              />
              </View>
              <View style={styles.row}>
              <Button
                title="-"
                titleStyle={styles.btn}
                onPress={() => subtrackP1()}
              />
              </View>
            </View>
          </Card>
          <Card>
            <Card.Title>P2 Life Counter</Card.Title>
            <Card.Divider />
            <View style={styles.container}>
              <View style={styles.row}>
                <Button
                  title="+"
                  titleStyle={styles.btn}
                  onPress={() => addP2()}
                />  
              </View>
              <View style={styles.row}>
              <Input
               keyboardType="numeric"
               value={JSON.stringify(p2LifeCounter)}
               onChangeText={value => setP2LifeCounter(Number(value))} 
               style={styles.lifeInput}
               maxLength = {4}
              />
              </View>
              <View style={styles.row}>
              <Button
                title="-"
                titleStyle={styles.btn}
                onPress={() => subtrackP2()}
              />
              </View>
            </View>
          </Card>

          <Card>
            <Card.Title>Coin Flip</Card.Title>
            <Card.Divider />
            <Text h3 style={styles.coinFlipText}>
              {coin}
            </Text>
            <Button
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
    row: {
      width: '33%',
    },
    diceValue: {
      textAlign : "center",
      paddingVertical : 5,
      marginBottom : 10,
      color: 'black'
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
