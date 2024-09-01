import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const TravelScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Travel Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default TravelScreen;
