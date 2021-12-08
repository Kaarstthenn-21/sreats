import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home"
import Orders from "../screens/Orders";
import Account from "../screens/Account"
import MyTabBar from "../components/tabNavigation/myTabBar";
import Favorites from "../screens/Favorites";
// import signin from "../components/auth/signin";

const Tab = createBottomTabNavigator();

const TabBar = () => {
    return (
        <Tab.Navigator
            tabBar={props => <MyTabBar {...props} />}
            independent={true}
            screenOptions={{
                activeTintColor: "red",
                inactiveTintColor: "blue"
            }}
        >
            {/* <Tab.Screen
                name="signin"
                component={signin}
                options={{
                    title: "Inicio",
                    icon: require("../assets/icons/home.png"),
                    headerShown: false
                }}
            /> */}
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    title: "Inicio",
                    icon: require("../assets/icons/home.png"),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Orders"
                component={Orders}
                options={{
                    title: "Inicio",
                    icon: require("../assets/icons/orders.png"),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={Favorites}
                options={{
                    title: "Favoritos",
                    icon: require("../assets/icons/favorito.png"),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    title: "Perfil",
                    icon: require("../assets/icons/account.png"),
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    );
};

export default TabBar;
