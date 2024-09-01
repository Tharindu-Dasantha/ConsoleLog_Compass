// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// importing the routes
import { NativeRouter as Router, Routes, Route } from 'react-router-native';
import React from 'react';

import HomeScreen from './src/screens/home/HomeScreen';
// import AboutScreen from './screens/AboutScreen';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomeScreen} />
        {/* <Route path="/about" Component={AboutScreen} /> */}
      </Routes>
    </Router>
  );
};

export default App;


// remove this later once the native-wind is installed
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
