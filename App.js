import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, View } from 'react-native';
import { ButtonGroup, Text} from 'react-native-elements';
import CardGame from './components/TableTop';
import TableTop from './components/CardGame';
import { Toggle } from './components/Toggle';
import { Screen } from './components/screen';

import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { ThemeProvider } from './theme/ThemeProvider';


import { DefaultTheme, DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Appearance } from 'react-native';

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

  const scheme = useColorScheme();
  const Stack = createStackNavigator();
  const MyDarkTheme = {
    dark: true,
    colors: {
      primary: "#9933FF",
      backgroundColor: "#000023",
      card: "#000028",
      text: "#ffffff",
      border: "#000028",
      notification: "#9933FF"
    }
  }

  const colorScheme = Appearance.getColorScheme();
  if (colorScheme === 'dark') {
    // Use dark color scheme
    const MyDarkTheme = {
      dark: true,
      colors: {
        primary: "#9933FF",
        backgroundColor: "#000023",
        card: "#000028",
        text: "#ffffff",
        border: "#000028",
        notification: "#9933FF"
      }
    }
    
  }

  

return (
  <>
    <AppearanceProvider>
    <ThemeProvider>
    <Screen>
    <StatusBar/>
     
      <View style={styles.modeWrapper}>
        <Text h4 style={styles.subHeader}>Mode</Text>
        <Toggle />
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
      </Screen>
      </ThemeProvider>
    </AppearanceProvider>
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
