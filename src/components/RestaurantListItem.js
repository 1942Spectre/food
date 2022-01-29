import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'

function RestaurantListItem(item) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri: item.image_url,
                }}
            />

            <Text style={styles.name}> {item.name} </Text>
            <Text style={styles.overview}> rating: {item.rating} , {item.reviews} reviews.</Text>
        </View>
    )
}

var styles = StyleSheet.create({
    container:{
        alignItems:"stretch",
        width:250,
    },
    image:{
        width:240,
        height: 120,
        alignSelf:'center'
    },
    name:{
        fontSize:10,
        fontWeight:"600"
    },
    overview:{
        fontSize:6,
        fontWeight:"100"
    }
})

export default RestaurantListItem