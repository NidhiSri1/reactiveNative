import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { useNavigate } from "react-router-native";
import { add_asteroid_list } from "../Redux/action";

export const Home = () => {
    const navigate = useNavigate();
    const [id, setId] = useState();

    const dispatch = useDispatch();
    const selector = useSelector((store) => store.asteroid_det);

    const handleChange = (e) => {
        setId(e);
    };

    const handleSubmit = async () => {
        try {
            let response = await axios.get(
                `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=tHCqLdNS3GWe508ZlSP6zVFpt9l7dut0Uvwv00Rr`
            );
            // console.log("response", response.data);
            dispatch(add_asteroid_list(response.data));
            navigate("/asteroid");
        } catch (err) {
            alert("Please Click again");
            console.log(err);
        }
    };

    const handleRandomId = async () => {
        try {
            let response = await axios.get(
                `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=tHCqLdNS3GWe508ZlSP6zVFpt9l7dut0Uvwv00Rr`
            );

            const randomNumber = Math.floor(
                Math.random() * response.data.near_earth_objects.length
            );
            // console.log(
            //     response.data.near_earth_objects[randomNumber].neo_reference_id
            // );
            setId(
                response.data.near_earth_objects[randomNumber].neo_reference_id
            );

            handleSubmit();
        } catch (err) {
            console.log(err);
        }
    };
    // 3542519

    return (
        <>
            <View style={styles.container}>
                <TextInput
                    onChangeText={handleChange}
                    style={styles.input}
                    placeholder="Enter Asteroid ID "
                ></TextInput>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleSubmit()}
                >
                    <View>
                        <Text style={styles.texts}>Click Me</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleRandomId}
                >
                    <View>
                        <Text style={styles.texts}>Random Asteroid ID</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        // backgroundColor: "red",
    },
    upper: {
        width: 360,
        height: 600,
    },
    input: {
        borderRadius: 10,
        backgroundColor: "white",
        width: 300,
        height: 45,
        padding: 5,
        alignSelf: "center",
    },
    button: {
        // width: 100,
        backgroundColor: "#457b9d",
        alignSelf: "center",
        marginVertical: 20,
        height: 40,
        borderRadius: 10,
    },
    texts: {
        color: "white",
        alignSelf: "center",
        padding: 9,
    },
});
