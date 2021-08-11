import React,{useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';


import DataStorageHelper from "./DataStorageHelper.js";
import { AsyncStorage } from 'react-native';

export default function Log({navigation}) {
  let ds = DataStorageHelper();
  const [sessions,setSessions] = useState([]);
  
  const getSessions = async ()=>
    {
        try {
            const ob =  await AsyncStorage.getItem(ds.seshKey);
            if(ob!=null)
            {
              setSessions(JSON.parse(ob));
            }
            //return JSON.parse(ob);
            return ob;
        } catch (error) {
            return ["No sessions logged!"];
        }
    }
  getSessions();
  console.log("ww");
  console.log(sessions);

  return (
    <View style = {styles.topBox}>
      <Text style = {styles.tit}>Logged sessions:</Text>
      {
        sessions.map((item,idx)=>{return(<Button key = {idx} title = {item}></Button>)})
      }
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
