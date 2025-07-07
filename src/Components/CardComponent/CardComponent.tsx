import React from "react";
import { Text, View } from "react-native";
import { Styles } from "./CardComponentStyles";

 export interface CardComponentProps {
    text: String;
}

export const CardComponent = (props: CardComponentProps)=>{
    const { text } = props;
    return (
        <View style={Styles.card}>
            <Text style={Styles.text}>{text}</Text>
        </View>
    );
}

