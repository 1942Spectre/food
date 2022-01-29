import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useBusinesses from '../hooks/useBusinesses';
import RestaurantList from '../components/RestaurantList';



function SearchScreen(props) {

    var [searchTerm, termChange] = useState("")
    let [searchApi, businesses, errorMessage] = useBusinesses()

    function priceFilter(price) {
        // price == "$" , "$$" , "$$$"
        return businesses.filter(result =>
            result.price === price)
    }

    return (
        <>
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
                    <RestaurantList title="Cost Effective" navigation={props.navigation} context={priceFilter("$")}></RestaurantList>
                    <RestaurantList title="Bit Pricier" navigation={props.navigation}  context={priceFilter("$$")} ></RestaurantList>
                    <RestaurantList title="Big Spender" navigation={props.navigation}  context={priceFilter("$$$")} ></RestaurantList>
                </View>
            </ScrollView>
        </>


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