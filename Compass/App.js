import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// importing the routes
import HomeScreen from './src/screens/home/HomeScreen';
import VisaScreen from './src/screens/visa/VisaScreen';
import ServicesScreen from './src/screens/services/ServicesScreen';
import BookingScreen from './src/screens/booking/BookingScreen';
import TravelScreen from './src/screens/travel/TravelScreen';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </NavigationContainer>
  );
};

export default App;
