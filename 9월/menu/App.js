import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert, ScrollView, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import MenuInputFunc from './components/MenuInputFunc';
import MenuSelect from './components/MenuSelect';

export default function App() {
  const [selectList, setSelectList] = useState([""]);
  return (

    <SafeAreaView>
      <ScrollView>
        <View style={{height: 200}}>
          <MenuSelect selectList={selectList}/>
        </View>
        <MenuInputFunc selectList={selectList} setSelectList={setSelectList}/> 
      </ScrollView>
    </SafeAreaView>
  
  );
}


