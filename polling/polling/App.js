import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
    useEffect(() => {
        handleRequest();
    }, []);

    const handleRequest = async () => {
        try {
            const data = await axios.get(
                "https://hn.algolia.com/api/v1/search_by_date?tags=story&page=2"
            );

            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
