import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import OrdersItem from '../components/orders/OrdersItem'
import firebase from "../dataBase/Firebase"


const Orders = () => {

    const [orders, setOrders] = useState({
        items: [
            {
                title: "Bologna",
                description: "With butter lettuce, tomato and sauce bechamel",
                price: "$13.50",
                image:
                    "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
            }
        ],
    });

    useEffect(() => {
        const db = firebase.firestore();
        const unsubscribe = db
            .collection("orders")
            .orderBy("createdAt", "desc")
            .onSnapshot((snapshot) => {
                snapshot.docs.map((doc) => {
                    setOrders(doc.data());
                });
            });

        return () => unsubscribe();
    }, []);
    function orderUpdate() {
        const db = firebase.firestore();
        const unsubscribe = db
            .collection("orders")
            .orderBy("createdAt", "desc")
            .onSnapshot((snapshot) => {
                snapshot.docs.map((doc) => {
                    setOrders(doc.data());
                });
            });
    }
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={{ flex: 1 }}>
                <OrdersItem orders={orders} />
            </View>
            <View style={{alignItems:"center"}}>
                <TouchableOpacity
                    style={{
                        borderRadius: 80,
                        backgroundColor: "#F7B403",
                        padding: 10,
                        alignItems: "center",
                        width: 250,
                        height: 50,
                        alignContent:"center"
                    }}
                    onPress={() => orderUpdate()}
                >
                    <Text>Actualizar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Orders
const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
})