import { AsyncStorage } from "react-native";

export default function DataStorageHelper()
{
    const sessionKey = "sessions2";
    const addSession = async (name)=>
    {
        let keyExist = false;
        //See if key exist
        try {
            const ob = await AsyncStorage.getItem(sessionKey);
            if(ob == null)
            {

            }else{
                keyExist = true;
            }
        } catch (error) {
            console.log(error)
        }
        if(keyExist==true)
        {
            const ob2 = await AsyncStorage.getItem(sessionKey);
            const arr = JSON.parse(ob2);
            arr.push(name);
            await AsyncStorage.setItem(sessionKey,JSON.stringify(arr));
        }else{
            await AsyncStorage.setItem(sessionKey,JSON.stringify([name]));
        }

        //add to array if exist

        //set as first value if not

        
    }

    const getSessions = async ()=>
    {
        try {
            const ob =  await AsyncStorage.getItem(sessionKey);
            console.log(ob);
            //return JSON.parse(ob);
            return ob;
        } catch (error) {
            return ["No sessions logged!"];
        }
    }


    return {addSession:addSession,
            getSessions:getSessions,
            seshKey:sessionKey};
}