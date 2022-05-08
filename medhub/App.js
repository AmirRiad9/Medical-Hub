import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Doctors from './components/Doctors';
import Home from './components/Home';
import AddUser from './components/AddUser';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/screens/HomeScreen';
import LoginScreen from './components/screens/LoginScreen';
import UserDetails from './components/screens/UserDetails';
import Patients from './components/Patients';
import MedicalStaff from './components/MedicalStaff';
import Nurses from './components/Nurses';
import AssignPatient from './components/AssignPatient';


const Stack = createStackNavigator();

export default function App() {
  const [view, setView] = useState("Doctors");
  
  return (

    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen  options={{headerShown:false}} name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="UserDetails" component={UserDetails} />
      <Stack.Screen name = "PatientsView" component ={Patients}/>
      <Stack.Screen name = "Doctors" component = {Doctors}/>
      <Stack.Screen name = "Nurses" component = {Nurses}/>
      <Stack.Screen name = "Add User" component = {AddUser}/>
      <Stack.Screen name = "Assign Patient" component = {AssignPatient}/>
    </Stack.Navigator>
  </NavigationContainer>

    // <SafeAreaView style={styles.container}>
    //   {view === "Add User" && <AddUser/>}
    //   {view === "Doctors" && <Doctors/>}
      
    //   <View style = {{flexDirection:"row"}} > 
    //     {view != "Doctors" && <Button title="Home" style={{flex:0.5, backgroundColor:"blue"}} onPress = { () => setView("Doctors")}/>}
    //     {view != "Add User" && <Button title ="Add User" style={{flex:0.5, backgroundColor:"blue"}} onPress = { () => setView("Add User")} />}
        
    //   </View>
    // </SafeAreaView>
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
