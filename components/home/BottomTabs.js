import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
const BottomTabs = () => {
    return (
        <View style={{
            flexDirection: 'row',
            margin: 10,
            marginHorizontal: 30,
            justifyContent: 'space-between'
        }}>
            <Icon icon="home" text="Inicio" />
            <Icon icon="store" text="Compras" />
            <Icon icon="receipt" text="Ordenes" />
            <Icon icon="user" text="Cuenta" />
        </View>
    )
}

export default BottomTabs

const Icon = (props) => (
    <TouchableOpacity>
        <View style={{}}>
            <FontAwesome5
                name={props.icon}
                size={25}
                style={{
                    marginBottom: 3,
                    alignSelf: 'center'
                }}
            />
            <Text>{props.text}</Text>
        </View>
    </TouchableOpacity>
)