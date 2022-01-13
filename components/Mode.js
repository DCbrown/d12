import React, { useState } from "react";
import {View, StyleSheet} from 'react-native';
import { ButtonGroup, Text  } from 'react-native-elements';
import CardGame from '../components/TableTop';
import TableTop from '../components/CardGame';
import { Toggle } from '../components/Toggle';
import {useTheme} from '../theme/ThemeProvider';

const Mode = () => {
    const [isCardGameMode, setisCardGameMode] = useState(true);
    const [selectedModeIndex, setSelectedModeIndex] = useState(0);
    
    const {colors} = useTheme();

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
    
    const btn = {
        backgroundColor: colors.primary,
    }

    const header = {
        color: "white",
        backgroundColor: colors.primary,
        textAlign : "center",
        paddingVertical : 5,
        marginBottom : 10
    }

    return (
        <>
            <View style={styles.modeWrapper}>
                <Text h4 style={header}>Mode</Text>
                <Toggle />
            
                <ButtonGroup
                buttons={['Table Top', 'Card Game']}
                selectedIndex={selectedModeIndex}
                buttonStyle={btn}
                selectedButtonStyle={btn}
                textStyle={btn} 
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
    )
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
  

export default Mode
