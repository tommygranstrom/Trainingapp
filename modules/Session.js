import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function Session() {
  return (
    <View style = {styles.topBox}>
      <Text style = {styles.tit}>Training application</Text>
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
