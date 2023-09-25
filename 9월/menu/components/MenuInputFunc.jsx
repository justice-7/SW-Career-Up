import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, 
    Alert, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';

const MenuInputFunc = () => {
    const [inputList, setInputList] = useState(["짜장면", "돈까스", "김치찌개"]);
    return (
        <View style={{height: 300, alignItems: 'center'}}>
            {inputList.map((menu) => {
                return (
                    <TextInput
                        style={{
                        borderWidth: 1,
                        padding: 10,
                        width: "88%",
                        borderRadius: 5,
                        marginBottom: 20
                        }}
                        value={menu}
                        placeholder='메뉴입력'/>
                )
            })}
            <TouchableOpacity
                style={{width: 100, backgroundColor: 'blue', alignItems: 'center', padding: 10}}
                onPress={()=> {
                    let newArray = [...inputList, ""];
                    setInputList(newArray)
                }}
            >
                <Text style={{color:"white", fontWeight: '900', fontSize:20}}>메뉴추가</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MenuInputFunc;