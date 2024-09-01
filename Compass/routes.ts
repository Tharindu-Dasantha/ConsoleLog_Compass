// import { RootStackParamList } from './types'; // Define types for your screen parameters

// Importing the screens
import HomeScreen from './src/screens/home/HomeScreen';
import VisaScreen from './src/screens/visa/VisaScreen';
import ServicesScreen from './src/screens/services/ServicesScreen';
import BookingScreen from './src/screens/booking/BookingScreen';
import TravelScreen from './src/screens/travel/TravelScreen';


export const routes = {
  home: {
    path: '/',
    element: () => <HomeScreen />,
  },
  visa: {
    path: '/visa',
    element: () => <VisaScreen />,
  }
};