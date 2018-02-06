import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

const Childe = (props) => {
    return (
        <View>
            <Text onPress={() => props.givenFunction('wysyvig')}>Clicmeh!</Text>
        </View>
    );
}

export default Childe;
