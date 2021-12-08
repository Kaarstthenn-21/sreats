import React, { useState, useEffect } from "react"
import { View, Text, SafeAreaView, StyleSheet, StatusBar, ScrollView } from 'react-native'
import { Divider } from "react-native-elements/dist/divider/Divider"
import BottomTabs from "../components/home/BottomTabs"
import Categories from '../components/home/Categories'
import HeaderTabs from '../components/home/HeaderTabs'
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems'
import SearchBar from '../components/home/SearchBar'

const Home = ({ navigation }) => {
    const YELP_API_KEY =
        "9yHiceb1ce71I7JhiqAILyCkeRTB5V5D7StOGyXP2GHkKuANbmAgxK9sBmo0hzOHBcTi8ac-R7nQgnIFVaWuw2iF9oznmSVjXlnAs_deWXwCEtoScUQBycbZjKeQYXYx";
    const [restaurantData, setRestaurantData] = React.useState(localRestaurants);
    const [city, setCity] = useState("San Francisco");
    const [activeTab, setActiveTab] = useState("Delivery");

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) =>
                setRestaurantData(
                    json.businesses.filter((business) =>
                        business.transactions.includes(activeTab.toLowerCase())))
            );
    };
    console.log(restaurantData[1].id)
    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab]);

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={{ backgroundColor: "white", padding: 20 }}>
                <HeaderTabs
                    activeTab={activeTab}
                    setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems
                    restaurantData={restaurantData}
                    navigation={navigation}
                />
            </ScrollView>
            <Divider width={1} />
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: "#eee",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
})