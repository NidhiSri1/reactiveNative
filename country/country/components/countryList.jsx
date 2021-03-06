import { useEffect, useState } from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { useNavigate } from "react-router-native";
import axios from "axios";

export const CountryList = ({ data, cName }) => {
    const navigate = useNavigate();
    const [countryName, setCountryName] = useState(data);
    const [countryList, setCountryList] = useState([]);

    useEffect(() => {
        handleApi();
    }, []);
    const handleApi = async () => {
        try {
            const response = await axios.get(
                `https://restcountries.com/v3.1/name/${countryName}`
            );
            const data = await response.data;
            setCountryList(data);
        } catch (error) {
            console.error(error);
        }
    };
    const getWeather = (e) => {
        cName(e.capital[0]);
        navigate("/weather");
        console.log(e.capital[0]);
    };
    return (
        <ScrollView>
            <View>
                <Text style={styles.text}>Country Details</Text>
                <View>
                    {countryList.map((e, i) => {
                        const image = e.flags.png;

                        return (
                            <View style={styles.country} key={i}>
                                <Text>Capital: {e.capital}</Text>
                                <Text>Population: {e.population}</Text>
                                <Text>latlng: {e.latlng}</Text>
                                <View>
                                    <Text>Flag : </Text>
                                    <Image
                                        source={{
                                            uri: `${image}`,
                                        }}
                                        style={{ width: 200, height: 100 }}
                                    />
                                </View>
                                <TouchableOpacity onPress={() => getWeather(e)}>
                                    <View style={styles.weather}>
                                        <Text style={styles.button}>
                                            Captial Weather
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        );
                    })}
                </View>
                <TouchableOpacity onPress={() => navigate("/")}>
                    <View style={styles.wrapper}>
                        <Text style={styles.button}>Back</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    country: {
        paddingVertical: 10,
        marginVertical: 5,
        backgroundColor: "white",
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
        // marginHorizontal: 120,
        display: "flex",
        alignItems: "center",
        marginVertical: 10,
        fontSize: 30,
    },
    weather: {
        marginVertical: 20,
        backgroundColor: "teal",
        width: 130,
        padding: 5,
        borderRadius: 10,
        alignItems: "center",
    },
});
