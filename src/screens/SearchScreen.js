import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

function SearchScreen() {

    var [searchTerm,termChange] = useState("")

    return (
        <View>
            <View>
                <View style={styles.header}>
                    <SearchBar 
                    onTermEdit={(term) => termChange(term)}  
                    termState={searchTerm} 
                    onTermSubmit={() => console.log(searchTerm)}
                    ></SearchBar>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#ee9b00',
        flexDirection:'row',
        justifyContent:'center'
    }
})

export default SearchScreen