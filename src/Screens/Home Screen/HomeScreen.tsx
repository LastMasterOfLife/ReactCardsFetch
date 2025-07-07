import React, { useEffect, useState } from "react";
import { View , Text, FlatList, Button, ActivityIndicator, TouchableOpacity} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParameterList } from "../../Navigations/MyNavigation";
import { CardComponent, CardComponentProps } from "../../Components/CardComponent/CardComponent";
import { ApiClass } from "../../Class/ApiClass";
import { Colors } from "react-native/Libraries/NewAppScreen";

type HomeScreenProps = {
    favourites: ApiClass[];
    toggleFavourite: (item: ApiClass) => void;
};

export const HomeScreen = ({ favourites, toggleFavourite }: HomeScreenProps) => {
    const [card, setCard] = useState<ApiClass[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        fetchCard();
    }, []);

    const fetchCard = async () => {
        try {
            const response = await fetch('https://mocki.io/v1/eb50db11-b87d-421a-9f7c-4b4d240c2b4f');
            if (response.ok) {
                const data = await response.json();
                setCard(data.quotes);
                setLoading(false);
            } else {
                setError(`Error: status code ${response.status}`);
                setLoading(false);
            }
        } catch (error) {
            console.error("Error fetching card:", error);
            setError('Error fetching card');
            setLoading(false);
        }
    };

    const RenderItem = ({item}: {item: ApiClass}) => {
        const isFavourite = favourites.some(fav => fav.id === item.id);

        return (
            <CardComponent 
                text={item.content}
                isFavourite={isFavourite}
                onToggleFavourite={() => toggleFavourite(item)}
            />
        );
    };

    if (loading) {
        return (
            <View>
                <ActivityIndicator color={Colors.black} />
                <Text>Loading...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View>
                <Text style={{color: 'red'}}>{error}</Text>
            </View>
        );
    }

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <FlatList 
                data={card}
                renderItem={RenderItem}
                keyExtractor={(item) => item.id}
                style={{ width: '99%', marginTop: 20 }}
            />
            <Button title="Fetch card" onPress={fetchCard} />
        </View>
    );
};
