import React from 'react';
import {Text,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen.js';
import { Colors } from './constants/Colors.js';
import AsteroidDetails from './screens/AsteroidDetails.js';

const Stack = createNativeStackNavigator();

function App() {


  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: Colors.primary500,
            },
            headerTintColor: "white",
            contentStyle: { backgroundColor: Colors.gray700 },
          }} >
      <Stack.Screen name="Home" component={HomeScreen}  options={{
              headerShown: false,
            }} />
      <Stack.Screen name="Asteroid Details" component={AsteroidDetails} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App