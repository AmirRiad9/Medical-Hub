import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, TouchableOpacity, TextInput, Button, ScrollView } from 'react-native';
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Picker } from '@react-native-picker/picker';
//import DatePicker from 'react-native-date-picker'
import DatePicker from 'react-native-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useNavigation} from '@react-navigation/native'

export default function AddUser() {
  const [firstname, SetFirstname] = useState("");
  const [lastname, SetLastname] = useState("");
  const [gender, SetGender] = useState("Male");
  const [contact_number, SetContactnumber] = useState("");
  const [dob, SetDob] = useState(new Date(1598051730000));
  const [open, setOpen] = useState(false)
  const [role, SetRole] = useState("");
  const [address, SetAddress] = useState("");
  const [billing, SetBilling] = useState("");
  const [allergies, SetAllergies] = useState("");
  const [insurance_id, SetInsuranceid] = useState("");
  const [medicalhistory, SetMedicalhistory] = useState("");
  const [medicalcondition, SetMedicalcondition] = useState("");
  const [emergencynumber, SetEmergencynumber] = useState("");
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [email, SetEmail] = useState("");
  const navigation = useNavigation();
  
  
  const saveUser = () =>{
    var user =
    {
        "first_name": firstname,
        "last_name": lastname,
        "gender": gender,
        "dob": dob,
        "contact_number": contact_number,
        "role_id": role,
        "address": address,
        "billing": billing,
        "allergies": allergies,
        "insurance_id": insurance_id,
        "medical_history": medicalhistory,
        "medical_condition": medicalcondition,
        "emergency_contact_number": emergencynumber,
        "email": email
      }
        axios.post('http://127.0.0.1:8000/users/', user).then((response) => {
          console.log("After calling post", response); 
        //console.log(user)
          //SetUserList(list);
          navigation.navigate("PatientsView");
        });
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
        <ScrollView  style = {{flex:0.9, padding:10}}  >
       
      <Text style = {styles.titleText} > Add User Form </Text>
    
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
          <Text>{dob.toString()}</Text>
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
        <TextInput onChangeText = {SetEmail} value = {email} style={styles.input}
          placeholder="Email" />
        <TextInput onChangeText = {SetAddress} value = {address} style={styles.input}
          placeholder="Address" />
        <TextInput onChangeText = {SetBilling} value = {billing} style={styles.input}
          placeholder="Billing"/>
         <TextInput onChangeText = {SetAllergies} value = {allergies} style={styles.input}
          placeholder="Allergies" />
        <TextInput onChangeText = {SetInsuranceid} value ={insurance_id.toString()}  style={styles.input}
          placeholder="Insurance ID"/>
         <TextInput onChangeText = {SetMedicalhistory} value = {medicalhistory}  style={styles.input}
          placeholder="Medical History" />
        <TextInput onChangeText = {SetMedicalcondition} value = {medicalcondition} style={styles.input}
          placeholder="Medical Condition"/>
        <TextInput onChangeText = {SetEmergencynumber} value = {emergencynumber.toString()}  style={styles.input}
          placeholder="Emergency Contact Number"/>
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

