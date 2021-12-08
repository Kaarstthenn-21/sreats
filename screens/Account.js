import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import firebase from '../dataBase/Firebase'
const Account = () => {
    return (
        <View>
            <Text>Cuenta</Text>
            <Text>Cuenta</Text>
            <Text>Cuenta</Text>

            <TouchableOpacity
            style={{backgroundColor:"#000"}}
                onPress={() => firebase.auth().signOut()}
            >
                <Text>Cuenta</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Account
