import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './SplashScreen.jsx';
import Basic from './src/components/Basic.jsx';
import OnboardingScreen from './src/screens/OnboardingScreen.jsx';

// import SplashScreen from './SplashScreen'; // Import your SplashScreen component
// import HomeScreen from './HomeScreen'; // Import your main screen component

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}> 
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={OnboardingScreen} />
        <Stack.Screen name="Basic" component={Basic} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;