import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import { Inputs } from "./components/input";
import { NativeRouter, Route, Routes } from "react-router-native";
import { CountryList } from "./components/countryList";
import { useState } from "react";
import { Weather } from "./components/Weather";
export default function App() {
    const [name, setName] = useState();
    const [cityName, setCityName] = useState();
    const mainFunc = (names) => {
        setName(names);
    };
    const getCityName = (cName) => {
        setCityName(cName);
    };
  
    return (
        <NativeRouter>
            <SafeAreaView style={styles.container}>
                <Routes>
                    <Route
                        path="/"
                        element={<Inputs func={mainFunc} />}
                    ></Route>
                    <Route
                        path="/countrylist"
                        element={
                            <CountryList data={name} cName={getCityName} />
                        }
                    ></Route>
                    <Route
                        path="/weather"
                        element={<Weather captialName={cityName} />}
                    ></Route>
                </Routes>
                {/* <Inputs></Inputs> */}
            </SafeAreaView>
        </NativeRouter>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EBEAED",
        marginTop: 20,
    },
});
