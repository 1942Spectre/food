import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useBusinesses from '../hooks/useBusinesses';
import RestaurantList from '../components/RestaurantList';




function SearchScreen() {

    var [searchTerm, termChange] = useState("")
    let [searchApi, businesses, errorMessage] = useBusinesses()

    function priceFilter(price) {
        // price == "$" , "$$" , "$$$"
        return businesses.filter(result =>
            result.price === price)
    }

    return (
        <View style={{flex:1}}>

            <View style={styles.header}>
                <SearchBar
                    onTermEdit={termChange}
                    termState={searchTerm}
                    onTermSubmit={() => searchApi(searchTerm)}
                ></SearchBar>

            </View>
            <ScrollView style={{paddingBottom:20}}>
                {errorMessage ? <Text>{errorMessage}</Text> : null}
                <View style={{ flexDirection: 'column', alignItems: 'stretch', justifyContent: 'flex-start', height: "90%" }}>
                    <RestaurantList title="Cost Effective" context={priceFilter("$")}></RestaurantList>
                    <RestaurantList title="Bit Pricier" context={priceFilter("$$")} ></RestaurantList>
                    <RestaurantList title="Big Spender" context={priceFilter("$$$")} ></RestaurantList>
                </View>
            </ScrollView>
        </View >


    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
        height: "10%"
    }
})

export default SearchScreen