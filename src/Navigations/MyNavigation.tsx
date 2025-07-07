import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import { HomeScreen } from "../Screens/Home Screen/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen } from "../Screens/SpleshScreen/SplashScreen";
import { FavouriteScreen } from "../Screens/FavouriteScreen/FavouriteScreen";
import { ApiClass } from "../Class/ApiClass";
import Ionicons from 'react-native-vector-icons/Ionicons';


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
    const [favourites, setFavourites] = useState<ApiClass[]>([]);

    const toggleFavourite = (item: ApiClass) => {
        setFavourites(prev => {
            const exists = prev.some(fav => fav.id === item.id);
            if (exists) {
                return prev.filter(fav => fav.id !== item.id);
            } else {
                return [...prev, item];
            }
        });
    };

    return (
        <Tabs.Navigator screenOptions={({route}) =>({
            headerShown: false,
            tabBarStyle: {
                backgroundColor: "#f8f8f8",
                borderTopWidth: 0,
                elevation: 0,
            },
            tabBarActiveTintColor: "#6200ee",
            tabBarInactiveTintColor: "#888",
            tabBarIcon: ({ color, size }) => {
      let iconName = '';

      if (route.name === 'Home') {
        iconName = 'home-outline';
      } else if (route.name === 'Favourites') {
        iconName = 'heart-outline';
      }

      return <Ionicons name={iconName} size={size} color={color} />;
    },
        })}>
            <Tabs.Screen 
                name="Home"
                children={() => (
                    <HomeScreen 
                        favourites={favourites} 
                        toggleFavourite={toggleFavourite} 
                    />
                )}
            />
            <Tabs.Screen 
                name="Favourites"
                children={() => (
                    <FavouriteScreen favourites={favourites} 
                    toggleFavourite={toggleFavourite}/>
                )}
            />
        </Tabs.Navigator>
    );
}
