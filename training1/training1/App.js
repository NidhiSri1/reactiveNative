import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
} from "react-native";

export default function App() {
    const [list, setList] = useState({});

    useEffect(() => {
        handleApi();
    }, []);

    const handleApi = async () => {
        try {
            const res = await axios.get(
                "https://randomuser.me/api/?results=10"
            );

            const data = await res.data.results;

            setList(data);
        } catch (err) {
            console.log(err);
        }
    };

    const renderUser = (item) => {
        return (
            <View style={styles.row}>
                <View>
                    <Image
                        source={{
                            uri: `${item.item.picture.thumbnail}`,
                        }}
                        style={styles.image}
                    ></Image>
                </View>
                <View>
                    <Text>
                        {item.item.name.first} {item.item.name.last}
                    </Text>
                    <Text>{item.item.email}</Text>
                    <Text>{item.item.location.city}</Text>
                    <Text style={styles.overFlow} numberOfLines={1}>
                        Just checking if the app is working when it overflows
                    </Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={list}
                keyExtractor={(item) => item.index}
                renderItem={renderUser}
            ></FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    row: {
        flexDirection: "row",
        margin: 8,
        alignItems: "center",
    },
    image: {
        height: 50,
        width: 50,
        marginRight: 20,
        borderRadius: 25,
    },
    img: {
        margin: 4,
    },
    overFlow: {
        color: "red",
        width: Dimensions.get("window").width - 100,
    },
});
