import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function Log({navigation}) {
  return (
    <View style = {styles.topBox}>
      <Text style = {styles.tit}>This is the Log page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topBox:{
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    top:20,
    position:'absolute',
  },
});
