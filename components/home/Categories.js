import React from 'react'
import { View, Text, Image, ScrollView, FlatList } from 'react-native'
const items = [
    {
      image: require("../../assets/images/shopping-bag.png"),
      text: "Recoger",
    },
    {
      image: require("../../assets/images/soft-drink.png"),
      text: "Bebidas",
    },
    {
      image: require("../../assets/images/bread.png"),
      text: "Panaderia",
    },
    {
      image: require("../../assets/images/fast-food.png"),
      text: "Comida Rápida",
    },
    {
      image: require("../../assets/images/deals.png"),
      text: "Health",
    },
    {
      image: require("../../assets/images/coffee.png"),
      text: "Café",
    },
    {
      image: require("../../assets/images/desserts.png"),
      text: "Postres",
    },
  ];

const Categories = () => {

    return (
        <View style={{
            marginTop: 5,
            backgroundColor: '#fff',
            paddingVertical: 10,
            paddingLeft: 20,
        }}>
            <ScrollView showsHorizontalScrollIndicator={false}
                horizontal={true}>
                {items.map((item, index) => (
                    <View key={index} style={{ alignItems: 'center', marginLeft: 15, marginRight: 30 }} >
                        <Image source={item.image} style={{ width: 50, height: 40, resizeMode: "contain" }} />
                        <Text style={{ fontSize: 13, fontWeight: "bold" }}>{item.text}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}


export default Categories
