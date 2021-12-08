import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { addRestaurantFavorite, isRestaurantFavoriteApi } from "../../api/Favorite"

export default function Favorites(props) {

    const { id } = props;

    const [isFavorite, setIsFavorite] = useState(undefined);
    const [reloadCheck, setReloadCheck] = useState(false);
    console.log(isFavorite)
    useEffect(() => {
        (async () => {
            try {
                const response = await isRestaurantFavoriteApi()
                setIsFavorite(response);
            } catch (error) {
                setIsFavorite(false)
            }
        })();
    }, [id, reloadCheck])

    const onReloadCheckFavorite = () => {
        setReloadCheck((prev) => !prev);
    };

    const removeFavorite = () => {
        console.log("Eliminar de favoritos");
    };

    const addFavorite = async () => {
        try {
            await addRestaurantFavorite(id);
            onReloadCheckFavorite();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <TouchableOpacity
            style={{
                position: 'absolute',
                right: 30,
                top: 20
            }}
        >
            {isFavorite ? (
                <MaterialCommunityIcons
                    name='heart'
                    size={35}
                    color="#F7B403"
                    onPress={isFavorite ? removeFavorite : addFavorite}
                />
            ) : (
                <MaterialCommunityIcons
                    name='heart-outline'
                    size={35}
                    color="#FFF"
                    onPress={isFavorite ? removeFavorite : addFavorite}
                />
            )}
        </TouchableOpacity>
    )
}
