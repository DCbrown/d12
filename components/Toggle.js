import * as React from 'react';
import {Switch} from 'react-native';
import {useTheme} from '../theme/ThemeProvider';
import {Text,View } from 'react-native';

export const Toggle = () => {
    // We're also pulling setScheme here!
    const {setScheme, isDark} = useTheme('dark');
    const text = isDark ? '🌙' : '🌞';

    const toggleScheme = () => {
        /*
        * setScheme will change the state of the context
        * thus will cause childrens inside the context provider to re-render
        * with the new color scheme
        */
        isDark ? setScheme('light') : setScheme('dark');
    }

    return (
        <View style={{flexDirection: 'row'}}>
            <Switch value={isDark} onValueChange={toggleScheme}/>
            <Text style={{fontSize: 25, paddingLeft: 5}}>{text}</Text>
        </View>
    );
}