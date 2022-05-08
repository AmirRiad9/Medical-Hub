import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Patients from './Patients';
import MedicalStaff from './MedicalStaff';



export default function Home() {
    const [role, Setrole] = useState("");
  
  return (
        <View>
        {role === "" && <View>
        
        <Button title= "Medical Staff" onPress = {() => Setrole("MedicalStaff")} >
        
         </Button>
         <Button title = "Patients" onPress = {() => Setrole("Patient")}>
            
         </Button></View>
        }
        {
            role != "" && <Button title= "Home" onPress = {() => Setrole("")}>
            </Button>
        }
        {
            role === "MedicalStaff" && <Patients/>
        }
        {
            role === "Patient" && <MedicalStaff/>
        }
    
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
