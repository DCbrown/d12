import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, View } from 'react-native';
import { ButtonGroup, Text} from 'react-native-elements';
import CardGame from './components/TableTop';
import TableTop from './components/CardGame';

export default function App() {
  const [isCardGameMode, setisCardGameMode] = useState(true);
  const [selectedModeIndex, setSelectedModeIndex] = useState(0);
  
  const selectMode = (value) => {
    switch(value) {
      case 0:
        setisCardGameMode(true);
      break;
      case 1:
        setisCardGameMode(false);
      break;
    }
  }

return (
  <>
    <StatusBar/>
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
    <View>
      { isCardGameMode ? <CardGame /> : <TableTop />}
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
