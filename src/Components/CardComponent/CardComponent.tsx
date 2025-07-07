import { Text, View, Image, TouchableOpacity } from "react-native";
import { Styles } from "./CardComponentStyles";

 export interface CardComponentProps {
    text: string;
    isFavourite: boolean;
    onToggleFavourite: () => void;
}

export const CardComponent = ({ text, isFavourite, onToggleFavourite }: CardComponentProps) => (
    <View style={Styles.card}>
        <TouchableOpacity onPress={onToggleFavourite} style={{ height:70 }}>
            <Image style={Styles.favouriteIcon}
                source={
                    isFavourite
                        ? require("../../../assets/Icons/heart_red.png")
                        : require("../../../assets/Icons/heart_black.png")
                }
            />
        </TouchableOpacity>
        <Text>{text}</Text>
    </View>
);

