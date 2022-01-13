import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, View} from 'react-native';
import { ButtonGroup, Text  } from 'react-native-elements';
import CardGame from './components/TableTop';
import TableTop from './components/CardGame';
import { Toggle } from './components/Toggle';
import { Screen } from './components/screen';
import { Message } from './components/message';
import {useTheme} from './theme/ThemeProvider';
import Mode from './components/Mode';

import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { ThemeProvider } from './theme/ThemeProvider';




export default function App() {


return (
  <>
    <AppearanceProvider>
      <ThemeProvider>
        <Screen>
          <StatusBar/>
          <Mode/>
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
