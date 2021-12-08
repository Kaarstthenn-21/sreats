import React, { useState } from 'react'
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    Dimensions,
    Image,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    TextInput

} from "react-native"
import TextBox from "../login/TextBox"
import Btn from "../login/Btn"
import firebase from "../../dataBase/Firebase"

export default function signup({ navigation }) {

    const [values, setValues] = useState({
        email: "",
        password: "",
        password2: ""
    })

    function handleChange(text, eventName) {
        setValues(prev => {
            return {
                ...prev,
                [eventName]: text
            }
        })
    }

    function SignUp() {

        const { email, password, password2 } = values

        if (password == password2) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                })
                .catch((error) => {
                    alert(":( Algo salio mal, verifica los campos esten bien")
                    console.log(error.message)
                    // ..
                });
        } else {
            alert("No coinciden las contraseñas")
        }
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
                    height: Dimensions.get('window').height / 2,
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
                    <Text style={{ color: "#000", fontSize: 30, fontWeight: "bold" }}>Registro</Text>
                    <Text>Ya cuenta con una cuenta?
                        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                            <Text style={{ color: "red", fontStyle: "italic" }}>  Loguearse</Text>
                        </TouchableOpacity>
                    </Text>
                    {/* Form input view */}
                    <View style={{ marginTop: 5 }}>
                        <View>                           
                            <TextBox placeholder="Email@gmail.com" onChangeText={text => handleChange(text, "email")} />
                        </View>
                        <View style={{ borderColor: "#4632A1" }}>                            
                            <TextBox placeholder="Password" secureTextEntry={true} onChangeText={text => handleChange(text, "password")} />
                            <TextBox placeholder="Confirme Password" secureTextEntry={true} onChangeText={text => handleChange(text, "password2")} />
                        </View>
                    </View>
                    {/* End Form */}
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
                                width: 280,
                                height: 50
                            }}
                            onPress={() => SignUp()}
                        >
                            <Text style={{ color: "#FFF", fontWeight: "900", fontSize: 18 }}>Registrarse</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>)
}
const styles = StyleSheet.create({
    view: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
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