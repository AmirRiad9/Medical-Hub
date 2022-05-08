import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {auth} from '../firebase'
import {useNavigation} from '@react-navigation/native'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from '@firebase/auth'
import React, {useState, useEffect} from 'react'
import Doctors from "../Doctors"
import { Picker } from '@react-native-picker/picker';
import axios from 'axios'
import Patients from '../Patients'

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password,setPassword]=useState('');
    const [role, SetRole] = useState(0);
    const [userinfo, SetUserInfo] = useState();

    const navigation = useNavigation();
    

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged(user => {
    //       if (user) {
    //         navigation.navigate("Home")
    //       }
    //     })
    
    //     return unsubscribe
    //   }, [])

    const handleSignUp = () =>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(userCredentials =>{
            const user = userCredentials.user;
            console.log(user.email)
        })
        .catch(error => alert(error.message))
    }

    const handleLogin = () =>{
        signInWithEmailAndPassword(auth,email,password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('logged in with:', user.email);
            axios.get('http://127.0.0.1:8000/users/').then((response) => {
            console.log("After calling get", response); 
        var userinfolist = response.data.filter(function (chain) {
        return chain.email === user.email;
        
    });
       if(userinfolist.length === 0 ){
        navigation.push('UserDetails', {
            email: user.email,
          })
       }else{
        if(userinfolist[0].role_id === 1 || userinfolist[0].role_id === 2){
            navigation.push("PatientsView", {
                email: user.email,
                name: userinfolist[0].first_name,
                role_id: userinfolist[0].role_id,
              })
        }else if(userinfolist[0].role_id === 3){
            navigation.push("Doctors",{
                user_id:userinfolist[0].user_id,
                name: userinfolist[0].first_name,

            })
        }   
        SetUserInfo(userinfolist[0]);
        console.log(userinfolist[0]);

       }
     
        })})
        
        .catch(error => alert(error.message))
    }

  return (
    <KeyboardAvoidingView style = {styles.container} behavior = "padding">
        <View style= {styles.inputContainer}>
            <TextInput
            placeholder = "Email"
            value ={email}
            onChangeText ={text =>setEmail(text) }
            style= {styles.input}
            />
            <TextInput
            placeholder = "Password"
            value ={password}
            onChangeText ={text => setPassword(text)}
            style= {styles.input}
            secureTextEntry
            />
            </View>
    <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin}
        style={styles.button}
        >
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignUp}
        style={[styles.button,styles.buttonOutline]}
        >
            <Text style={ styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
inputContainer:{
    width:'80%'

},
input:{
backgroundColor:'white',
paddingHorizontal:15,
paddingVertical:10,
borderRadius:10,
marginTop:5
},
buttonContainer:{
    width: '60%',
    justifyContent:'center',
    alignItems:'center',
    marginTop: 40,

},
button:{
backgroundColor:'#0782F9',
width:'100%',
padding:15,
borderRadius:10,
alignItems:'center',
},
buttonOutline:{
    backgroundColor:'white',
    marginTop:5,
    borderColor:'#0782F9',
    borderWidth: 2,

},
buttonOutlineText:{
    color:'#0782F9',
    fontWeight:'700',
    fontSize:16,
},
buttonText:{
    color:'white',
    fontWeight:'700',
    fontSize:16,
}
  });