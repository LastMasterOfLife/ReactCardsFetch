import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { RootStackParameterList } from "../../Navigations/MyNavigation";
import { ApiClass } from "../../Class/ApiClass";
import { CardComponent } from "../../Components/CardComponent/CardComponent";

type FavouriteScreenProps = {
    favourites: ApiClass[];
    toggleFavourite: (item: ApiClass) => void;
};


export const FavouriteScreen = ({ favourites, toggleFavourite }: FavouriteScreenProps) => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{ fontSize: 25, fontWeight: "bold", marginTop: 20 }}>Favourites</Text>

            {favourites.length === 0 ? (
                <Text style={{ marginTop: 50, fontSize: 18, color: "#888" }}>
                    Nessun preferito
                </Text>
            ) : (
                <FlatList 
                    data={favourites}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <CardComponent 
                            text={item.content}
                            isFavourite={true}
                            onToggleFavourite={() => toggleFavourite(item)}
                        />
                    )}
                />
            )}
        </View>
    );
};