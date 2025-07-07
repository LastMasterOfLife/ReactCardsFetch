import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Text, View } from "react-native";
import { RootStackParameterList } from "../../Navigations/MyNavigation";

type FavouriteScreenProps = StackScreenProps<RootStackParameterList,'Favourites'>;

export const FavouriteScreen = ({route}: FavouriteScreenProps)=>{
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Favourites</Text>
        </View>
    );
}