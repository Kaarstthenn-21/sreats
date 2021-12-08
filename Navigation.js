import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home'
import RestaurantDetail from './screens/RestaurantDetail'
import OrderCompleted from './screens/OrderCompleted'
import { Provider as ReduxProvider } from 'react-redux'
import configureStore from './redux/store'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from "./navigation/tabBar"
import firebase from "./dataBase/Firebase";
import signin from './components/auth/signin'
import signup from './components/auth/signup'
// import Login from "./components/auth/login"

const store = configureStore();

export default function RootNavigation() {
    const Stack = createStackNavigator();
    const screenOptions = {
        headerShown: false,
    };
    //Auth firebase
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    firebase.auth().onAuthStateChanged((user) => {
        if (user != null) {
          setIsLoggedIn(true)
        } else {
          setIsLoggedIn(false);
        }
      });
    return (
        <ReduxProvider store={store} >
            <NavigationContainer>
                {isLoggedIn ?
                    <Stack.Navigator
                        screenOptions={screenOptions}>
                        <Stack.Screen name="TabBar" component={TabBar} />
                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
                        <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
                    </Stack.Navigator> :
                    <Stack.Navigator
                    screenOptions={screenOptions}>
                        <Stack.Screen name="Login" component={signin} />
                        <Stack.Screen name="Registro" component={signup} />
                    </Stack.Navigator>}
            </NavigationContainer>
        </ReduxProvider>
    );


}
// {/* <ReduxProvider store={store} >
// <NavigationContainer independent={true}>
//     <TabBar />
// </NavigationContainer>
// </ReduxProvider> */}

// <Tab.Navigator
//                      initialRouteName="Home"
//                      tabBarOptions={{
//                        activeTintColor: "#000",
//                        activeBackgroundColor: "#feb72b",
//                        inactiveTintColor: "#FFF",
//                        inactiveBackgroundColor: "#527318"}}
//                        tabBar={props => <CustomTab {...props} />}
//                     >
//                     <Tab.Screen
//                         name="Home"
//                         component={Home}
//                         options={{
//                             tabBarLabel: 'Home',
//                             tabBarIcon: ({ color, size }) => (
//                                 <Ionicons name="ios-home" size={size} color={color} />
//                               ),
//                             headerShown: false
//                         }}
//                     />
//                     <Tab.Screen
//                         name="RestaurantDetail"
//                         component={RestaurantDetail}
//                         options={{
//                             tabBarLabel: 'Settings',
//                         }}
//                     />
//                 </Tab.Navigator>
