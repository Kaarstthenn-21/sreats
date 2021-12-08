import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'

const OrdersItem = ({ orders }) => {
    const food = orders.items

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {food.map((food, index) => (
                <View key={index}>
                    <View style={styles.menuItemStyle}>
                        <FoodInfo food={food} />
                        <FoodImage food={food} marginLeft={0} />
                    </View>
                    <Divider
                        width={0.3}
                        orientation="horizontal"
                        style={{ marginHorizontal: 20 }} />
                </View>
            ))}
        </ScrollView>
    )
}

export default OrdersItem;
const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent: "space-evenly" }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
);

const FoodImage = ({ marginLeft, ...props }) => (
    <View>
        <Image
            source={{ uri: props.food.image }}
            style={{
                width: 100,
                height: 100,
                borderRadius: 8,
                marginLeft: marginLeft,
            }}
        />
    </View>
);
const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },

    titleStyle: {
        fontSize: 19,
        fontWeight: "600",
    },
});