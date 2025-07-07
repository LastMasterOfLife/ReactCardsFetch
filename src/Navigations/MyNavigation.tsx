import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { HomeScreen } from "../Screens/Home Screen/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen } from "../Screens/SpleshScreen/SplashScreen";
import { FavouriteScreen } from "../Screens/FavouriteScreen/FavouriteScreen";

export type RootStackParameterList = {
    Splash: undefined;
    Tabs: {
        Home: undefined;
        Favourites: undefined;
    }
}

const Tabs = createBottomTabNavigator();

const Stack = createNativeStackNavigator<RootStackParameterList>();

export function MyStack() {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Tabs" component={MyTabs} />
        </Stack.Navigator>
    );
}

function MyTabs(){
    return (
        <Tabs.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: "#f8f8f8",
                borderTopWidth: 0,
                elevation: 0,
            },
            tabBarActiveTintColor: "#6200ee",
            tabBarInactiveTintColor: "#888",
        }}>
            <Tabs.Screen name="Home" component={HomeScreen} />
            <Tabs.Screen name="Favourites" component={FavouriteScreen} />
        </Tabs.Navigator>
    );
}