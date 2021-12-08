import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet, StatusBar,TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import firebase from "../dataBase/Firebase";
import MenuItems from "../components/restaurantDetail/MenuItems";

export default function OrderCompleted({navigation}) {
    const [lastOrder, setLastOrder] = useState({
        items: [
            {
                title: "Bologna",
                description: "With butter lettuce, tomato and sauce bechamel",
                price: "$13.50",
                image:
                    "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
            },
        ],
    });

    const { items, restaurantName } = useSelector(
        (state) => state.cartReducer.selectedItems
    );

    const total = items
        .map((item) => Number(item.price.replace("$", "")))
        .reduce((prev, curr) => prev + curr, 0);

    const totalUSD = total.toLocaleString("en", {
        style: "currency",
        currency: "USD",
    });

    useEffect(() => {
        const db = firebase.firestore();
        const unsubscribe = db
            .collection("orders")
            .orderBy("createdAt", "desc")
            .limit(1)
            .onSnapshot((snapshot) => {
                snapshot.docs.map((doc) => {
                    setLastOrder(doc.data());
                });
            });

        return () => unsubscribe();
    }, []);

    return (
        <SafeAreaView style={styles.safeAreaView}>
            {/* green checkmark */}
            <View
                style={{
                    margin: 15,
                    alignItems: "center",
                    height: "100%",
                }}
            >
                <TouchableOpacity
                onPress={()=> navigation.navigate("TabBar")}
                >
                <LottieView
                    style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
                    source={require("../assets/animations/check-mark.json")}
                    autoPlay
                    speed={0.5}
                    loop={false}                    
                />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Su orden de {restaurantName} tiene un total de $ {totalUSD}0
                </Text>
                <ScrollView>
                    <MenuItems
                        food={lastOrder.items}
                        hideCheckbox={true}
                        marginLeft={10}
                    />
                    <LottieView
                        style={{ height: 200, alignSelf: "center" }}
                        source={require("../assets/animations/cooking.json")}
                        autoPlay
                        speed={0.5}
                    />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
})