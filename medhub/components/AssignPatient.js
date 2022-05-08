import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Button } from 'react-native';
import axios from 'axios'
import React, {useState, useEffect} from 'react'
//import {useNavigation} from '@react-navigation/native'
import { Picker } from '@react-native-picker/picker'


export default function AssignPatient({ route, navigation }) {
  const { email,role_id,name} = route.params;  
  const [patients, SetPatients] = useState([]);
  const [patient_details, SetPatient_Details] = useState();
  const [selected_patient,SetSelected_Patient] = useState();
  const [user_id, SetUserId] = useState()
  const [relation, SetRelation]= useState()

  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/users/').then((response) => {
      console.log("After calling get", response); 
      SetUserId(response.data.find(x => x.email === email).user_id);
      var list = response.data.filter(function (chain) {
        return chain.role_id === 3;
    });
      SetPatients(list);
      if(list.length > 0){
          SetSelected_Patient(list[0].user_id);
      }
    });
  },[]);

  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/relations/relations/').then((response) => {
        console.log("After calling post", response.data); 
        if(role_id===1){
            var list = response.data.filter(function (chain) {
                return chain.user_id===selected_patient;

        });
        console.log("Before set relation doctor", list)
        if(list.length>0){
            SetRelation(list[0]);   
        }else{
            SetRelation(undefined);
        }
    }else{
            var list = response.data.filter(function (chain) {
                return chain.user_id===selected_patient;     
        });
        console.log("selected patient value:" , selected_patient)
        console.log("Before set relation", list)
        if(list.length>0){
            SetRelation(list[0]);
        }else{
            SetRelation(undefined);
        }}           
  });    
  },[selected_patient]);

  const handleAssign = () => {
    console.log("relation set", relation)  
    if (relation === undefined){
        if(role_id===2){
            alert("Patient should be assigned to doctor first")
            navigation.push("PatientsView", {
                email: email,
                name: name,
                role_id: role_id,
              })
        }
        var new_relation =
        {
            "user_id": selected_patient,
            "doc_id": user_id,
            "nurse_id":-1,
            "date": "2022-04-05"
          }
          console.log(relation)
        axios.post('http://127.0.0.1:8000/relations/relations/', new_relation).then((response) => {
          console.log("After calling post", response); 

          navigation.push("PatientsView", {
            email: email,
            name: name,
            role_id: role_id,
          });
        });
    }else{
        var new_relation =
        {
            "user_id": selected_patient,
            "doc_id": role_id===1?user_id:relation.doc_id,
            "nurse_id":role_id===2?user_id:relation.user_id,
            "date": "2022-04-05"
          }

          console.log("Put relation: ", new_relation);
        axios.put('http://127.0.0.1:8000/relations/relations/'+selected_patient+'/', new_relation).then((response) => {
          console.log("After calling post", response); 

          navigation.push("PatientsView", {
            email: email,
            name: name,
            role_id: role_id,
          });
        });

    }      
  }

  const handleDelete =()=>{
     
      axios.delete('http://127.0.0.1:8000/relations/relations'+ selected_patient).then((response)=>{
          console.log("After calling delete", response);
          navigation.navigate("PatientsView");
      });

  }

  

  

  return (
    <SafeAreaView style={styles.container} >
        <View style = {{flex : 0.9}}>
      <Picker
        selectedValue={selected_patient}
        style={{ width: 200 }}
        onValueChange={(itemValue, itemIndex) => {SetPatient_Details(patients[itemIndex]); SetSelected_Patient(itemValue)}}
      >
        {patients.map( (s, i) => {
            return <Picker.Item key={i} value={s.user_id} label={s.first_name + " "+ s.last_name} />
        })}
      </Picker>
      
          {patient_details != undefined && 
          <View>
              <Text> Name:  {patient_details.first_name + " " + patient_details.last_name} </Text>
              <Text> Gender: {patient_details.gender} </Text>
              <Text> Email:  {(patient_details.email==="None" || patient_details.email==="string") ? "":patient_details.email} </Text>
              <Text> Medical Condition:  {patient_details.medical_condition === "string"? "":patient_details.medical_condition} </Text>
              </View>}
    </View>
      <View style ={{flex:0.1}}>
        <Button  title = "Assign" onPress ={handleAssign}/>
        <Button  title = "Delete" onPress ={handleDelete}/>
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
