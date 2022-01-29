import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import RestaurantListItem from './RestaurantListItem';

function RestaurantList(kwargs) {
    return (
        <View style={styles.listContainer}>
            <Text style={styles.title}>{kwargs.title}</Text>
            <FlatList
                horizontal={true}
                data={kwargs.context}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return RestaurantListItem(item)
                }
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        shadowColor: "#111",
        shadowOpacity: .3,
        borderColor: "#F0EEEE",
        flex:1

    },
    title: {
        color: "#666",
        fontSize: 18,
        fontWeight: '500'
    }
})

export default RestaurantList