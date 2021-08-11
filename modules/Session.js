import React,{useState}  from 'react';
import {Button, StyleSheet, Text, View,ScrollView,TextInput } from 'react-native';
import DataStorageHelper from './DataStorageHelper';


import { AsyncStorage } from 'react-native';



function ExerciseOb(name)
{
  return {name:name, sets:[SetOb(1,11,12)]};
}

function SetOb(no,weigth,reps)
{
  return {no:no, weigth:weigth,reps:reps};
}

function Set({remSet,changeRep,changeWeigth,idx,no,weigth,reps})
{
  return(<View style={styles.set}>
            <Text>No: </Text> 
            <Text>{no}</Text>
            
            <Text>Weigth: </Text> 
            <TextInput defaultValue = {weigth.toString()} onChangeText = {(value)=>changeWeigth(idx,Number(value))} keyboardType = 'numeric'/>
            
            
            <Text>Reps: </Text>
            <TextInput defaultValue = {reps.toString()} onChangeText = {(value)=>changeRep(idx,Number(value))} keyboardType = 'numeric'/>
            
            <Button title = "X" onPress = {()=>remSet(idx)}></Button>
            </View>)
}

function Exercise({remEx,addSet,remSet,changeSetWeigth,changeSetRep,name,idx,sets})
{
  const removeSet = (sIdx)=>{
    remSet(idx,sIdx);
  }
  const changeRep = (sIdx,newRep)=>{
    changeSetRep(idx,sIdx,newRep);
  }
  const changeWeigth = (sIdx,newWeigth)=>{
    changeSetWeigth(idx,sIdx,newWeigth);
  }

  return (
          <View>
              <Text>{name}</Text>
              {
                sets.map((item,idx)=>{
                  return(<Set
                          key = {idx}
                          remSet = {removeSet}
                          changeRep = {changeRep}
                          changeWeigth = {changeWeigth}
                          idx = {idx}
                          no = {idx+1}
                          weigth = {item.weigth}
                          reps = {item.reps}
                         ></Set>)
                })
              }
              <View style = {styles.set}>
                <Button title = "Add set" onPress = {()=>addSet(idx)}></Button>
                <Button title = "Remove exercise" onPress ={()=>remEx(idx)} ></Button>
              </View>
          </View>)
}


export default function Session({navigation})
{
  const [exercises,setExercises] = useState([]);
  const [name,setName] = useState("");
  const addEx = (te)=>{
    var isAlreadyadded = false;
    var i = 0; 
    while(isAlreadyadded==false && i<exercises.length)
    {
      if(exercises[i].name==te)
      {
          isAlreadyadded = true;
      }
      i++;
    }
    if(!isAlreadyadded)
    {
      setExercises([...exercises,ExerciseOb(te)]);
    }
  }
  
  const remEx = (idx)=>{
    let exercisesCopy = [...exercises];
    exercisesCopy.splice(idx, 1);
    setExercises(exercisesCopy);
  }
  
  const addSet = (exIdx)=>{
      let exerciseCopy = [...exercises];
      let setLength = exerciseCopy[exIdx].sets.length; 
      if(setLength == 0)
      {
        exerciseCopy[exIdx].sets.push(SetOb(0,0,0));
      }else if(setLength>0){
        let n = exerciseCopy[exIdx].sets[setLength-1].no+1;
        let w = exerciseCopy[exIdx].sets[setLength-1].weigth;
        let r = exerciseCopy[exIdx].sets[setLength-1].reps;
        exerciseCopy[exIdx].sets.push(SetOb(n,w,r));
      }
      setExercises(exerciseCopy);
  }

  const remSet = (exIdx,setIdx) =>{
      let exerciseCopy = [...exercises];
      exerciseCopy[exIdx].sets.splice(setIdx,1);
      setExercises(exerciseCopy);
  }
 
  const changeSetRep = (exIdx,setIdx,newVal) =>{
    let exerciseCopy = [...exercises];
    exerciseCopy[exIdx].sets[setIdx].reps = newVal;
    setExercises(exerciseCopy);
  }
  const changeSetWeigth = (exIdx,setIdx,newVal) =>{
    let exerciseCopy = [...exercises];
    exerciseCopy[exIdx].sets[setIdx].weigth = newVal;
    setExercises(exerciseCopy);
  }

  const saveSession = async (name) =>{
    //Save the session
    DataStorageHelper().addSession(name);
  }
  
  return (
    <View style = {styles.container}>
      <ScrollView>
        {
            exercises.map((item, index) => {
              return (<Exercise 
                        key = {index} //Key, necessary
                        remEx = {remEx} // remove exercise function
                        addSet = {addSet} //Add a set
                        remSet = {remSet} //remove a set
                        changeSetWeigth = {changeSetWeigth} //Change the weight
                        changeSetRep = {changeSetRep} //Change rep
                        name = {item.name} //Name of the exercise
                        idx = {index} //Idx in the Exercise
                        sets = {item.sets} //Its sets
                      ></Exercise>)
            })
        }
      </ScrollView>
      <TextInput placeholder = "Name the session..." onChangeText = {(item)=>{setName(item)}}/>
      <View style = {styles.botBox}>
        <Button 
          title = "Add Exercise" 
          onPress = {()=>{navigation.navigate("AddPage",{addEx:addEx})}}></Button>
        <Button title = "Close and Save" onPress={()=>{
                                                    // console.log("########################");
                                                    // console.log(exercises);
                                                    // console.log("########################");}

                                                    console.log("Try to add "+ name);
                                                    saveSession(name);
                                                    
                                                    
                                                    }}></Button>
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
