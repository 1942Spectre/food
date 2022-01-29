import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 

function SearchBar(kwargs){

    return (
        <View style={styles.box}>
            <Ionicons name="search" size={24} color="black"  style={styles.icon} />
            <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.input}
            value={kwargs.termState}
            onChangeText={kwargs.onTermEdit}
            placeholder='Search'
            onEndEditing={kwargs.onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        borderRadius:2,
        display:"flex",
        marginHorizontal:50,
        marginVertical:10,
        flexDirection:'row',
        justifyContent:'space-around',
        flexBasis:'auto',
        backgroundColor:'#F0EEEE',
        width:'80%',
        height:40
    },
    input:{
        flex:1,
        marginHorizontal:'auto',
        fontSize:18,
    },
    icon:{
        fontSize:30,
        alignSelf:'center',
        marginHorizontal:10
        
    }
})

export default SearchBar