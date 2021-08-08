import React,{useState} from 'react';
import { StyleSheet, Text, View, Button,TextInput} from 'react-native';
import { Value } from 'react-native-reanimated';

export default function AddExercise({route,navigation}) {
const {addEx} = route.params;
const exercises =  ["Bench","Squat","Deadlift"];
const [text, onChangeText] = useState("");
return (
    <View>
      <Text style = {styles.tit}>Choose new exercise</Text>
      {
          exercises.map((item,idx)=>{
              return(<Button 
                            key = {idx} 
                            title = {item} 
                            onPress= {()=>{addEx(item);navigation.navigate("SessionPage");}}
                     ></Button>)
            })
      }

    <TextInput 
        placeholder = "New exercise.."
        onChangeText = {onChangeText}></TextInput>
    <Button 
        title = "Add"
        onPress= {()=>{addEx(text);navigation.navigate("SessionPage")}}
        ></Button>
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
