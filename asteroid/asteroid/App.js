import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Home } from "./src/components/home";
import { LinearGradient } from "expo-linear-gradient";
import { NativeRouter, Route, Routes } from "react-router-native";
import { AsteroidDetails } from "./src/components/asteroidDetails";
import { Provider } from "react-redux";
import { store } from "./src/Redux/store";

export default function App() {
    return (
        <>
            <Provider store={store}>
                <NativeRouter>
                    <View style={styles.container}>
                        <Routes>
                            <Route path="/" element={<Home></Home>}></Route>

                            <Route
                                path="/asteroid"
                                element={<AsteroidDetails></AsteroidDetails>}
                            ></Route>
                        </Routes>
                    </View>
                </NativeRouter>
            </Provider>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: "#bde0fe",
    },
});
