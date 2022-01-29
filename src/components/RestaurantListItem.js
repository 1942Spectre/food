import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'

function RestaurantListItem(item,navigation) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Results",{id:item.id})} >
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{
                        uri: item.image_url,
                    }}
                />

                <Text style={styles.name}> {item.name} </Text>
                <Text style={styles.overview}> rating: {item.rating} , {item.review_count} reviews.</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "stretch",
        width: 250,
        marginLeft:15
    },
    image: {
        width: 250,
        marginBottom:5,
        borderRadius:5,
        height: 120,
        alignSelf: 'center'
    },
    name: {
        fontSize: 16,
        fontWeight: "800"
    },
    overview: {
        fontSize: 12,
        fontWeight: "100"
    }
})

export default RestaurantListItem