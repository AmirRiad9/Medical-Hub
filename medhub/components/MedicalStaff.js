import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Patients from './Patients';
import Doctors from './Doctors';
import Nurses from './Nurses';
import { NavigationActions } from 'react-navigation';





export default function MedicalStaff() {
    const navigation = useNavigation();
  return (
        <View>
  
        
        <Button title= "Doctors" onPress = {() => navigation.navigate("Doctors")} >
        
         </Button>
         <Button title = "Nurses" onPress = {() => navigation.navigate("Nurses")}>
            
         </Button>
        
      
    </View>
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
