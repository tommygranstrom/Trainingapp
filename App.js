import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

//Navigation screen
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StartScreen from "./modules/StartScreen.js";
import Log from "./modules/Log.js";
import Session from "./modules/Session.js";
import CreateProgram from "./modules/CreateProgram.js";
import AddExercise from './modules/AddExercise.js';


// This is the main application
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Start">
        <Stack.Screen name = "Start" component = {StartScreen}/>
        <Stack.Screen name = "LogPage" component = {Log}/>
        <Stack.Screen name = "SessionPage" component = {Session}/>
        <Stack.Screen name = "CreateProgramPage" component = {CreateProgram}/>
        <Stack.Screen name = "AddPage" component = {AddExercise}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  tit:{
    fontSize:30,
    fontWeight:'bold',
  },
  topBox:{
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    top:20,
    position:'absolute',
  },
  buttonContainter:{
    flexDirection:'row',
    position: 'absolute', //Here is the trick
    bottom: 30, //Here is the trick
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


