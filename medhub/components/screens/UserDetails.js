import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, TouchableOpacity, TextInput, Button, ScrollView } from 'react-native';
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Picker } from '@react-native-picker/picker';
//import DatePicker from 'react-native-date-picker'
import DateTimePicker from '@react-native-community/datetimepicker';

export default function UserDetails({ route, navigation }) {
  const { email} = route.params;
  const [firstname, SetFirstname] = useState("");
  const [lastname, SetLastname] = useState("");
  const [gender, SetGender] = useState("Male");
  const [contact_number, SetContactnumber] = useState(0);
  const [dob, SetDob] = useState(new Date(1598051730000));
  const [role, SetRole] = useState(0);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false)
    
  
  
  
  const saveUser = () =>{
    console.log(email);
    var user =
    
      {
        
          "first_name": firstname,
          "last_name": lastname,
          "gender": gender,
          "dob": dob,
          "contact_number": contact_number,
          "role_id": role,
          "address": "string ",
          "billing": " string",
          "allergies": "string ",
          "insurance_id": 0,
          "medical_history": " string",
          "medical_condition": " string",
          "emergency_contact_number": 0,
          "email": email
        
      }
      console.log(user);
        axios.post('http://127.0.0.1:8000/users/', user).then((response) => {
          console.log("After calling post", response); 
        //console.log(list)
          //SetUserList(list);
        });
        alert("User added successfuly");
        navigation.navigate("Login");
  }
  
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    SetDob(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };


  return (
    <SafeAreaView style={styles.container}>
        <View style = {{padding:10}} >
        <ScrollView  style = {{flex:0.9, padding:60}}  >
       
      <Text style = {styles.titleText} > User Details </Text>
    
        <TextInput onChangeText = {SetFirstname} value = {firstname} style={styles.input}
          placeholder="First Name" />
          
        <TextInput onChangeText = {SetLastname} value = {lastname} style={styles.input}
          placeholder="Last Name"/>
        <Picker
          selectedValue={gender}
          onValueChange={currentGender => SetGender(currentGender)}>
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
        <TextInput onChangeText = {SetContactnumber} value = {contact_number.toString()} style={styles.input}
          placeholder="Contact Number" />
           <Button onPress={showDatepicker} title="Select DOB" />
        {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={dob}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
        
      )}
        <Picker
          selectedValue={role}
          onValueChange={currentRole => SetRole(currentRole)}>
          <Picker.Item label="Doctor" value= "1"/>
          <Picker.Item label="Nurse" value="2" />
          <Picker.Item label="Patient" value="3" />
          </Picker>
</ScrollView>
<View style = {{flex:0.1}}>
<Button onPress={saveUser} title="Submit"  />
     </View>

</View>
</SafeAreaView>

  );
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      width: 250,
      borderWidth: 1,
      padding: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    titleText: {
        textAlign:"center",
        width: 250,
        fontSize: 20,
        fontWeight: "bold"
      }
  }
);

