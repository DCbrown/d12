import React, { useState } from "react";
import {View, StyleSheet, ScrollView} from 'react-native';
import { Text } from 'react-native-elements';
import TableTop from './TableTop';
import { Toggle } from './Toggle';
import {useTheme} from '../theme/ThemeProvider';
import { Dimensions } from 'react-native';

const Home = () => {  
    const {colors} = useTheme();
    
    const windowHeight = Dimensions.get('window').height + 90;
    
    const btn = {
      backgroundColor: colors.primary,
      color: colors.textBtn,
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
                <Text h4 style={header}>D12 Table Top</Text>
                 <Toggle />
            </View>
            
              <ScrollView style={{flexGrow: 1}} contentContainerStyle={{height: windowHeight}} >
               <TableTop />
              </ScrollView>  
           
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
  

export default Home
