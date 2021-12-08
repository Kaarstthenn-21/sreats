import React from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";


const SearchBar = ({ cityHandler }) => {
    return (
        <View style={{ marginTop: 15, flexDirection: "row" }}>
            <GooglePlacesAutocomplete
                query={{ key: "AIzaSyCgAk0B8TZbATyANbojAN-6u13BrU0nirU" }}
                onPress={(data, details = null) => {
                    console.log(data.description)
                    const city = data.description.split(',')[0]
                    cityHandler(city);
                }}
                placeholder="Buscar..."
                styles={{
                    textInput: {
                        backgroundColor: "#eee",
                        borderRadius: 20,
                        fontWeight: "500",
                        marginTop: 7,
                    },
                    textInputContainer: {
                        backgroundColor: "#eee",
                        borderRadius: 50,
                        flexDirection: "row",
                        alignItems: 'center',

                    },

                }}
                renderLeftButton={() =>
                    <View style={{ marginLeft: 10 }}>
                        <Ionicons
                            name='location-sharp'
                            size={24}>
                        </Ionicons>
                    </View>}
                renderRightButton={() => (
                    <View style=
                        {{
                            flexDirection: "row",
                            marginRight: 8,
                            backgroundColor: "white",
                            padding: 9,
                            borderRadius: 30,
                            alignItems: "center"
                        }}>
                        <AntDesign name="clockcircle" size={11} />
                        <Text>
                            Buscar
                        </Text>
                    </View>
                )}
            />
        </View>
    )
}

export default SearchBar
