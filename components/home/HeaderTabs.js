import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const HeaderTabs = (props) => {
    // const [activeTab, setActiveTab] = useState("Delivery");
    return (
        <View style={{ flexDirection: "row", alignSelf: 'center' }}>
            {/* Header Buttons  */}
            <HeaderButton
                text="Delivery"
                btnColor="black"
                textColor="white"
                activeTab={props.activeTab}
                setActiveTab={props.setActiveTab} />
            <HeaderButton
                text="Recoger"
                btnColor="white"
                textColor="black"
                activeTab={props.activeTab}
                setActiveTab={props.setActiveTab}
            />
            {/* End header buttons */}
        </View>
    )
}

export default HeaderTabs

const HeaderButton = (props) => (
    <TouchableOpacity style={{
        backgroundColor: props.activeTab === props.text ? "black" : "white",
        paddingHorizontal: 30,
        paddingVertical: 6,
        borderRadius: 30,
    }}
        onPress={() => props.setActiveTab(props.text)}
    >
        <Text style={{ color: props.activeTab === props.text ? "white" : "black", fontSize: 15, fontWeight: "bold" }}>
            {props.text}
        </Text>
    </TouchableOpacity>
)


