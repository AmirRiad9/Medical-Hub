import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, Button } from 'react-native';
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {useNavigation} from '@react-navigation/native'


export default function Nurses() {
  const [userList, SetUserList] = useState([]);
  const navigation = useNavigation();
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/users/').then((response) => {
      console.log("After calling get", response); 
      var list = response.data.filter(function (chain) {
        return chain.role_id === 2;
    });
    console.log(list)
      SetUserList(list);
    });
  },[]);

  

  return (
    <SafeAreaView style={styles.container}>
      <FlatList horizontal = {false}
      showsHorizontalScrollIndicator = {false}
      contentContainerStyle={{
          paddingHorizontal: 10
      }}
      keyExtractor = {(item,index) => item.id }
      data={userList}
      renderItem = {(itemData, index) => (
          
            <View >
                
                <Text> {itemData.item.first_name + " " + itemData.item.last_name} </Text>
            </View>
      )
                      
      }
      ></FlatList>
      <View>
        <Button title = "View Doctors" onPress ={()=> navigation.navigate("Doctors")}/>
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
