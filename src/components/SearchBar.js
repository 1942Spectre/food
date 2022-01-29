import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native'

function SearchBar(changeText){

    [state,changeState] = useState("");

    return (
        <View>
            <TextInput
            value={state}
            onChangeText={(text) => changeState(text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        borderColor:'black',
        borderWidth:5,
        borderRadius:2,
        display:"flex",
    },
    input:{
        backgroundColor:'#dee2e6'
    }
})

export default SearchBar