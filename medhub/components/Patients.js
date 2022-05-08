import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, TouchableOpacity, Button, SafeAreaViewComponent } from 'react-native';
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
//import {useNavigation} from '@react-navigation/native'

export default function Patients({ route,navigation }) {
  const {email,name,role_id} = route.params;
  const [medical_staff, SetMedical_Staff] = useState();
  const [patient_id, SetPatient_id] = useState();
  const [patients, SetPatients] = useState();
  const [relations, SetRelations]=useState([]);
  const [users, SetUsers] = useState([]);
  
  //const navigation = useNavigation();

  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/users/').then((response) => {
      console.log("After calling get", response.data); 
      SetUsers(response.data);
  });
},[]);

useEffect(()=>{
  var list = users?.filter(function (chain) {
    return chain.email === email
  });
  SetMedical_Staff(list[0]);

},[users]);
 

  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/relations/relations/').then((response) =>{
      if(role_id ===1) {
        //console.log("After callinng get", response.data);
      console.log("Doctor object", medical_staff);
      var relation = response.data.filter(function (chain) {
          return chain.doc_id === medical_staff?.user_id;
      });
      if(relation.length>0){
        SetRelations(relation);
      }
      }
      else{
          var relation = response.data.filter(function (chain) {
          return chain.nurse_id === medical_staff?.user_id;   
        });
        if(relation.length>0){
          SetRelations(relation);
        }
        
      }
    
    });
   
},[medical_staff]);

useEffect(()=>{
  console.log("here is the relations", relations)
  var patients_list= relations.map((s,i)=>{
    return users.find(x=>x.user_id===s.user_id);
  });
console.log("Here is the patient list" , patients_list)
SetPatients(patients_list)
},[relations]);


  


  return (
    <SafeAreaView style={styles.container}>
      <View style = {{flex:0.9}}>
    <Text>Hello Dr. {name}, </Text>
    {(patients === undefined || patients.length === 0) && <Text> 
      You have no patients in file </Text> }
    {(patients != undefined && patients.length > 0) && 
     <View>
       <Text>Your patients are: </Text>
       {patients.map((s,i)=>{
         
        return <Text>{s?.first_name+ " "+ s?.last_name}</Text>
       })}
       </View>}

  </View>
      <View style = {{flex:0.1}}>
        <Button title = "Add User" onPress = {()=> navigation.navigate("Add User")}/>
        <Button title ="Assign/Delete Patient" onPress ={()=> navigation.push("Assign Patient",{
                email: email,
                role_id: role_id,
                name:name,
              })}/>
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
