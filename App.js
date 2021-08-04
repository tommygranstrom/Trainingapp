import 'react-native-gesture-handler';

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//import { StyleSheet, Text, View, Button} from 'react-native';
import StartScreen from './modules/startScreen';

const Stack = createStackNavigator();
export default function App() {
  return (<NavigationContainer>
             <Stack.Navigator>
             <Stack.Screen
                name="Home"
                component={StartScreen}
                options={{ title: 'Welcome' }}
              />
              <Stack.Screen name="Profile" component={ProfileScreen} />
          </Stack.Navigator>
          </NavigationContainer>);
}
