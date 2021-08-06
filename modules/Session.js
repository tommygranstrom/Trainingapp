import React,{useState}  from 'react';
import {Button, StyleSheet, Text, View,ScrollView,TextInput } from 'react-native';

//The possible exercises
const exercises = ["Bench","Squat","DeadLift"];
var currentExercises = ["Bench","Dumbell"];


function Set({idx,remFunc,changeRep,changeWeigth,no,weight,reps})
{
  const [weg,setWeg] = useState(weight.toString());
  const [rep,setRep] = useState(reps.toString());
  return (<View style = {styles.set}>
            <Text>No: </Text><Text>{no} </Text>
            <Text>Weight: </Text><TextInput  value={weg} onChangeText={(text) => {setWeg(text);changeWeigth(idx,Number(text))}} keyboardType="numeric"/>
            <Text>Reps: </Text><TextInput value={rep} onChangeText={(text) => {setRep(text);changeRep(idx,Number(text))} } keyboardType="numeric"/>
            <Button 
                title = "X"
                onPress = {()=>{{remFunc(idx)}}}></Button>
          </View>)
}

function makeSet(no, weight, reps)
{
  var a  = {no:no,weight:weight, reps:reps}; 
  return a;
}

function Exercise({props})
{

  const [setItems, setTaskItems] = useState([makeSet(1,100,10),makeSet(2,100,8),makeSet(3,100,4)]);

  const addSet = (s)=>{
    setTaskItems([...setItems,s]);
  }
  const removeSet = (idx)=>{
    let setItemsCopy = [...setItems];
    setItemsCopy.splice(idx,1);
    for(var i = 0; i<setItemsCopy.length;i++)
    {
      setItemsCopy[i].no = i+1;
    }
    setTaskItems(setItemsCopy);
  }

  const changeRep = (idx,val) =>{
    setItems[idx].reps = val;
  }
  const changeWeigth = (idx,val) =>{
    setItems[idx].weight = val;
  }

  return(<View>
            <Text>{props}</Text>
            {setItems.map((item, index) => {
            return(<Set
              key = {index}
              idx = {index}
              remFunc = {removeSet}
              changeRep = {changeRep}
              changeWeigth = {changeWeigth}
              no = {item.no}
              weight = {item.weight}
              reps = {item.reps}
                  ></Set>)})}
            <Button 
                title = "Add set"
                onPress = {()=>{var tmp = setItems[setItems.length-1];addSet(makeSet(tmp.no+1,tmp.weight,tmp.reps))}}    
            ></Button>
         </View>)
}

export default function Session({navigation}) {
  return (
    <View style = {styles.container}>
      <ScrollView>
        {
            currentExercises.map((item, index) => {
              return (<Exercise key = {index} props = {item}></Exercise>)
            })
        }
      </ScrollView>
      <View style = {styles.botBox}>
        <Button title = "Add Exercise"></Button>
        <Button title = "Close and Save"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  set:{
    flexDirection:'row',
  },
  topBox:{
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    top:20,
    position:'absolute',
  },
  botBox:{
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
