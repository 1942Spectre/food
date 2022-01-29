import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import RestaurantListItem from './RestaurantListItem';



function RestaurantList(props) {

    if(!(props.context.length > 0)){
        return null;
    }
    return (
        <View style={styles.listContainer}>
            <Text style={styles.title}>{props.title}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={props.context}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return RestaurantListItem(item,props.navigation)
                }
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        backgroundColor: "#fff",
        justifyContent:"flex-start",
        paddingBottom:20

    },
    title: {
        marginLeft:15,
        marginBottom:5,
        color: "#000",
        fontSize: 18,
        fontWeight: '500'
    }
})

export default RestaurantList