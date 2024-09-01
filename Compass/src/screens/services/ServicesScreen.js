import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const ServicesScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Services Screen</Text>
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

export default ServicesScreen;
