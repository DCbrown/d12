import { StatusBar } from 'expo-status-bar';
import React from "react";
import { Screen } from './components/screen';
import Home from './components/Home';
import { AppearanceProvider } from 'react-native-appearance';
import { ThemeProvider } from './theme/ThemeProvider';

export default function App() {
return (
  <>
    <AppearanceProvider>
      <ThemeProvider>
        <Screen>
          <StatusBar/>
          <Home/>
        </Screen>
      </ThemeProvider>
    </AppearanceProvider>
  </>
  );
}
