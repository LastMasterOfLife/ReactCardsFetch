import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParameterList } from "../../Navigations/MyNavigation";


type SplashScreenProps = StackScreenProps<RootStackParameterList,'Splash'>;

export const SplashScreen=({navigation}: SplashScreenProps)=>{
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Welcome!</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Tabs')}>
                <Text>Home</Text>
            </TouchableOpacity>
        </View>
    );
}