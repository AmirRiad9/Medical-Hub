import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,  Button } from 'react-native';
import axios from 'axios'
import React, {useState, useEffect} from 'react'




export default function Doctors({ route, navigation }) {
  const {user_id,name} = route.params;
  const [doctor, SetDoctor] = useState();
  const [doc_id, SetDocId] = useState();
 

  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/relations/relations/' + user_id).then((response) =>{
      console.log("After callinng get", response);
      SetDocId(response.data.doc_id);
    })

  },[]);

useEffect(()=>{
  axios.get('http://127.0.0.1:8000/users/').then((response) => {
    console.log("After calling get", response);  
    var list = response.data.filter(function (chain) {
      return chain.user_id === doc_id;
  });
    SetDoctor(list[0]);
  });
},[doc_id]
);  

  return (
    <SafeAreaView style={styles.container}>
      <View style ={{flex:0.9}}>
      <Text>Hello {name}, </Text>
      {doctor === undefined && <Text>There are no doctors assigned to this patient!</Text>}
      {doctor != undefined &&
      <Text> Your Doctor is Dr. {doctor?.first_name + " "+ doctor?.last_name}</Text>}
      </View>
      <View>
        <Button title = "View all Nurses available" onPress ={()=> navigation.navigate("Nurses")}/>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
