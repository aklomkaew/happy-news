import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Home() {
    return (
        <View style={StyleSheet.container}>
            <Text style={StyleSheet.titleText}>HAPPYNEWS</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    titleText: {
        fontFamily: 'dincondensed',
        fontSize: 48,
    }
});