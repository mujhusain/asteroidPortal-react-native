import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import {Colors} from './constants/Colors';
import AsteroidDetails from './screens/AsteroidDetails';
// import {Provider as PaperProvider} from 'react-native-paper';

const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.primary800,
            },
            headerTintColor: 'white',
            contentStyle: {backgroundColor: Colors.gray700},
          }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Asteroid Details" component={AsteroidDetails} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
