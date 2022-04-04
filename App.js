import React from 'react';
import {SafeAreaView, ScrollView,StatusBar,StyleSheet, Text, useColorScheme,View} from 'react-native';
import { Colors,} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './components/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './components/splash';
import LoginPage from './components/login';
import ProfileScreen from './components/profile';
import OTPScreen from './components/otpscreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Stack = createNativeStackNavigator();

  return (

    
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            headerShown: false
        }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false
        }}
        />
         <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{
            headerShown: false
        }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false
        }}
        />
        <Stack.Screen
          name="OTP"
          component={OTPScreen}
          options={{
            headerShown: false
        }}
        />
      </Stack.Navigator>
  </NavigationContainer>
   
  );
};


export default App;
