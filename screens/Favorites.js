import React from 'react'
import { View, Text, Button } from 'react-native'
import { getRestaurantFavoriteApi } from "../api/Favorite"
const Favorites = () => {

    const checkFavorites = async () => {
        const response = await getRestaurantFavoriteApi();
        console.log(response);
      };
    return (
        <View>
            <Text>Favoritos</Text>
            <Text>Favoritos</Text>
            <Text>Favoritos</Text>
            <Text>Favoritos</Text>
            <Button title="Favoritos" onPress={checkFavorites} />
        </View>
    )
}

export default Favorites
