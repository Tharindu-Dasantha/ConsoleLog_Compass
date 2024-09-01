
import React from 'react';
import { View, Text } from 'react-native';

interface HomeScreenProps {
    // Define your props here
}

const HomeScreen: React.FC<HomeScreenProps> = (props) => {
    return (
        <View>
            {/* Your component content goes here */}
            <Text>Hello world</Text>
        </View>
    );
};

export default HomeScreen;