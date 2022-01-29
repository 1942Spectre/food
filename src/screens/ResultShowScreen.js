import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import yelp from '../api/yelp';

function priceColor(state) {
    switch (state.price) {
        case "$$$": return ("#ff595e")
        case "$$": return ("#ffca3a")
        case "$": return ("#8ac926")

    }
}

function ratingcolor(state) {
        if (state.rating  <= 4 ) {
            return ("#ff595e")
        }
        else return state.rating > 4.5 ? ("#8ac926"):("#ffca3a")
    }

function ResultsShowScreen(props) {

    const [state, editState] = useState(null)
    const id = props.navigation.getParam("id")

    async function getItemDetail(id) {
        const response = await yelp.get(`/${id}`)
        editState(response.data)
    }

    useEffect(
        () => { getItemDetail(id) },
        [])

    if (!state) {
        return null
    }


    return (
        <>
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                <Text style={styles.header}>{state.name ? state.name : ""}</Text>
                <FlatList
                    horizontal={true}
                    data={state.photos}
                    keyExtractor={(photo) => photo}
                    renderItem={({ item }) => {
                        return <Image style={{ ...styles.image, marginHorizontal: 20 }} source={{ uri: item }} />
                    }}
                />

                <FlatList
                    horizontal={true}
                    data={state.categories}
                    keyExtractor={(category) => category.alias}
                    renderItem={({ item }) => {
                        return <View style={{ marginHorizontal: 10, width: 100, height: 60, backgroundColor: "#023e8a", borderRadius: 40, justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: "#fff" }}>{item.title} </Text></View>
                    }}
                />
                <View style={{ flexDirection: 'row',alignItems:"center" }}>
                    <Text style={{ backgroundColor: priceColor(state), fontSize: 18, padding: 15, alignSelf: 'center', margin: 5 }}>
                        Price: {state.price}
                    </Text>
                    <Text style={{ backgroundColor: ratingcolor(state), padding: 15, alignSelf: 'stretch', margin: 5 }}>
                        Rating: {state.rating} ({state.review_count} reviews)
                    </Text>
                </View>


                <Text>Phone: {state.phone}</Text>

                <View style={{ justifySelf: "flex-end" }}>
                    <Text style={styles.address}>
                        {state.location.address1 ? state.location.address1 + "," : null}
                        {state.location.address2 ? state.location.address2 + "," : null}
                        {state.location.address3 ? state.location.address3 + "," : null}
                        {state.location.city}/{state.location.country}
                    </Text>
                </View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    header: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 25
    },
    image: {
        width: 325,
        marginBottom: 30
    },
    address: {
        fontSize: 11
    }
})

export default ResultsShowScreen