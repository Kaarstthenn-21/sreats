import React, { useState } from 'react'

import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableHighlight,
    StatusBar,
    SafeAreaView,
    ScrollView,
    ImageBackground,
    Dimensions,
    Image,
    Button
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import TextBox from "../login/TextBox"
import Btn from "../login/Btn"
import firebase from "../../dataBase/Firebase"

const signin = ({ navigation }) => {
    const [values, setValues] = useState({
        email: "",
        password: ""
    })

    function handleChange(text, eventName) {
        setValues(prev => {
            return {
                ...prev,
                [eventName]: text
            }
        })
    }

    function Login() {

        const { email, password } = values

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                navigation.navigate("TabBar")
            })
            .catch((error) => {
                alert("Upps email y/o contraseña inválido, si no tienes una cuenta regitrate")
                console.log(error.message)
                // ..
            });
    }
    return (
        <ScrollView style={{
            flex: 1,
            backgroundColor: "#FFF"
        }}
            showsVerticalScrollIndicator={false}
        >
            <ImageBackground
                source={require('../../assets/images/background.png')}
                style={{
                    height: Dimensions.get('window').height / 2.1,
                }} >
                <View style={styles.brandView}>
                    <Image
                        source={require('../../assets/icons/logo-mostacho.png')}
                        style={{
                            height: 60,
                            width: 140,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    />
                    <Text style={styles.brandViewText}>Mr EATS</Text>
                </View>
            </ImageBackground>
            {/* Welcome View */}
            <View style={styles.bottomView}>
                <View style={{ padding: 40 }}>
                    <Text style={{ color: "#000", fontSize: 30, fontWeight: "bold" }}>Bienvenido</Text>
                    <Text>No cuenta con cuenta?
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Registro")}
                        >
                            <Text style={{ color: "red", fontStyle: "italic" }}> Registrate ahora</Text>
                        </TouchableOpacity>
                    </Text>
                    {/* Form input view */}
                    <View style={{ marginTop: 30 }}>
                        <View style={{ marginBottom:10 }}>
                            <Text>Email</Text>
                            <TextBox placeholder="Kaarstthenn@gmail.com" onChangeText={text => handleChange(text, "email")} />
                        </View>

                        <View style={{ borderColor: "#4632A1" }}>
                            <Text>Password</Text>
                            <TextBox placeholder="Password" secureTextEntry={true} onChangeText={text => handleChange(text, "password")} />
                        </View>
                    </View>
                    <View
                        style={{
                            height: 100,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                borderRadius: 80,
                                backgroundColor: "#F7B403",
                                padding: 10,
                                alignItems: "center",
                                width: 250,
                                height: 50
                            }}
                            onPress={() => Login()}
                        >
                            <Text style={{ color: "#FFF", fontWeight: "900", fontSize: 18 }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>

        // <SafeAreaView styles={styles.safeAreaView}>
        //     <View>
        //         <TextInput onChangeText={text => handleChange(text, "email")} />
        //         <TextInput onChangeText={text => handleChange(text, "password")}
        //             secureTextEntry={true} />
        //         <TouchableHighlight
        //             onPress={() => Login()}
        //         >
        //             <Text>Login</Text>
        //         </TouchableHighlight>
        //         <TouchableHighlight
        //             onPress={() => navigation.navigate("Sign up")}
        //         >
        //             <Text>signup</Text>
        //         </TouchableHighlight>
        //     </View>
        // </SafeAreaView>
    )
}

export default signin
const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: "#eee",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    brandView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    brandViewText: {
        color: '#FFF',
        fontSize: 40,
        fontWeight: "bold",
        // textTransform: "uppercase"
    },
    bottomView: {
        flex: 1.5,
        backgroundColor: '#FFF',
        bottom: 50,
        borderTopStartRadius: 60,
        borderTopEndRadius: 60,
    }
})