import * as React from 'react';
import {Text, View } from 'react-native';
import {useTheme} from '../theme/ThemeProvider';

export const Message = () => {
    const {colors, isDark} = useTheme();
    
    const text = isDark ? 'Dark mode 🌙' : 'Light mode 🌞';

    const textStyle = {
        fontSize: 18,
        color: colors.text,
    }

    const containerStyle = {
        margin: 24,
        padding: 12,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: colors.primary,
    }

    return (
        <View style={containerStyle}>
            <Text style={textStyle}>{text}</Text>
        </View>
    );
};