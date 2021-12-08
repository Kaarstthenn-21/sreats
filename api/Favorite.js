import AsyncStorage from "@react-native-async-storage/async-storage"
import { includes, pull } from "lodash"


export async function getRestaurantFavoriteApi() {
    try {
        const response = await AsyncStorage.getItem("favorites");
        console.log("Respuesta", response)
        return JSON.parse(response || []);
    } catch (error) {
        throw error;
    }
}


export async function addRestaurantFavorite(id) {
    // try {
    //     const favorites = [];
    //     favorites.push(id);
    //     await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
    // } catch (error) {
    //     throw error;
    // }
    try {
        const favorites = await getRestaurantFavoriteApi()
        favorites.push(id)
        await AsyncStorage.setItem("favorites", JSON.stringify(favorites))
    } catch (error) {
        throw error;
    }
}

export async function isRestaurantFavoriteApi(id) {
    try {
        const response = await getRestaurantFavoriteApi();
        return includes(response, id)
    } catch (error) {
        throw error;
    }
}