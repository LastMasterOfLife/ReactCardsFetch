import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    card: {
        marginVertical: 10,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        // position: "relative", // non serve: è già di default
    },
    text: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
    },
    favouriteIcon: {
        width: 24,
        height: 24,
        top: "-10%",
        right: "-45%",
    },
});
