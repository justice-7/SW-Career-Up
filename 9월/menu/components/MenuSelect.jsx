import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert, ScrollView, SafeAreaView } from 'react-native';


const MenuSelect = ({selectList}) => {
    const [isSelect, setIsSelect] = useState(false);
    const [selectChoice, setSelectChoice] = useState("");

    return(
        <View style={{
            alignItems: 'center',
            paddingTop: 30
        }}>
            <Text
                style={{fontSize: 30}}
            >
               {isSelect ?
               "선택완료"
               :
               "메뉴를 골라 보아요"
               } 
            </Text>
            {
                isSelect ?
                <>
                    <Text
                        style={{fontSize: 30}}
                    >
                        {selectChoice}
                    </Text>
                    <Text
                        style={{fontSize: 30}}
                    >
                        다시 선택하시겠습니까?
                    </Text>
                </>
                :
                <>
                </>
            }
            <View>
                <button
                    title={"메뉴선택"}
                    onPress={() => {
                        if(selectList[selectList.length-1] === "") {
                            Alert.alert(
                                "메뉴를 입력하세요.",
                                "메뉴를 입력하고 입력을 추가하세요.",
                                [
                                    {text: "네", onPress:() => {console.log("OK!")}}
                                ]
                            )
                        }
                        else{
                            setIsSelect(true);
                            setSelectChoice(
                                selectList[Math.floor(Math.random()*selectList.length)]
                            )
                        }
                    }}
                />
            </View>
        </View>
    )
}

export default MenuSelect;