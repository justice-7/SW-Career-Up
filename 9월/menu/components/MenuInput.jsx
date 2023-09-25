import { StyleSheet, Text, View, Image, TextInput, Button, 
    Alert, ScrollView, SafeAreaView } from 'react-native';

class MenuInput extends Component {
    render() {
        return(
            <View style={{height: 300, alignItems: 'center'}}>
                <TextInput
                    style={{
                    borderWidth: 1,
                    padding: 10,
                    width: "88%",
                    borderRadius: 5,
                    marginBottom: 20
                    }}
                    placeholder='메뉴입력'/>
                    <TouchableOpacity
                    style={{width: 100, backgroundColor: 'blue', alignItems: 'center', padding: 10}}
                    onPress={()=> {
        
                    }}
                >
                <Text style={{color:"white", fontWeight: '900', fontSize:20}}>메뉴추가</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default MenuInput;