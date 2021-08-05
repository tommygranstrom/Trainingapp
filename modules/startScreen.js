import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function StartScreen() {
  return (
    <View style = {styles.container}>
    <View style = {styles.topBox}>
      <Text style = {styles.tit}>Training application</Text>
    </View>

    <View>
      <Text>Last training:</Text>
      <Text>Total logged sessions:</Text>
      <Text>Lifted kilos:</Text>
      <Text>Current program:</Text>
      <Text>Lifting Records:</Text>
    </View>
  
    <View style = {styles.buttonContainter}>
      <Button title = "New session"></Button>
      <Button title = "Create program"></Button>
      <Button title = "Log"></Button>
    </View> 
    </View>
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
