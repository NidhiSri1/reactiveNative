import axios from "axios";
import React, { useEffect, useState } from "react";
import {
    Button,
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import { useNavigate } from "react-router-native";

export const Weather = ({ captialName }) => {
    // http://api.weatherstack.com/current?access_key=f95950dda104f27b6dbe3b8bd759c832&query=delhi
    // f95950dda104f27b6dbe3b8bd759c832

    const [weather, setWeather] = useState({
        location: {
            country: "",
            temperature: "",
            weather_descriptions: "",
            weather_icons: "",
        },
        current: {
            country: "",
            id_day: "",
        },
        request: {
            language: "",
        },
    });
    const navigate = useNavigate();

    useEffect(() => {
        getWeather();
    }, []);
    const getWeather = async () => {
        // console.log("citys", captialName);
        try {
            const response = await axios.get(
                `http://api.weatherstack.com/current?access_key=bd8a663f3cf8c87ebdfb421a119e36df&query=${captialName}`
            );
            const data = await response.data;
            // console.log(data);
            setWeather(data);

            // console.log(data, "we");
        } catch (err) {
            console.log(err.message);
        }
    };

    // console.log("weather", weather);
    return (
        <View>
            <View>
                <Text style={styles.header}>Weather</Text>
            </View>
            <View style={styles.weather}>
                <Text style={styles.text}>
                    {" "}
                    Country : {weather.location.country}
                </Text>
                <Text style={styles.text}>City : {weather.request.query}</Text>
                <Text style={styles.text}>
                    Temperature : {weather.current.temperature}
                </Text>
                <Text style={styles.text}>
                    Description : {weather.current.weather_descriptions}
                </Text>
                <Text style={styles.text}>Day : {weather.current.is_day}</Text>
                <View>
                    <Image
                        source={{
                            uri: `${weather.current.weather_icons}`,
                        }}
                        style={{ width: 80, height: 80 }}
                    />
                </View>
            </View>

            <TouchableOpacity
                onPress={() => {
                    navigate("/countrylist");
                }}
            >
                <View style={styles.wrapper}>
                    <Text style={styles.button}>Back</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        fontWeight: "bold",
        fontSize: 25,
        alignSelf: "center",
    },
    weather: {
        // alignItems: "center",
        marginVertical: 20,
    },
    wrapper: {
        alignItems: "center",
        marginTop: 20,
        backgroundColor: "teal",
        padding: 10,
        borderRadius: 60,
        marginBottom: 40,
    },

    button: {
        color: "white",
        fontWeight: "bold",
    },
    text: {
        fontWeight: "bold",
        fontSize: 15,
    },
});
