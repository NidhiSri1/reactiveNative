import {
    View,
    Text,
    Button,
    Image,
    Linking,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { useNavigate } from "react-router-native";
import { useDispatch, useSelector } from "react-redux";

export const AsteroidDetails = () => {
    const navigate = useNavigate();
    const selector = useSelector((store) => store.asteroid_det);
    console.log(selector.is_potentially_hazardous_asteroid);
    return (
        <>
            <View style={styles.div}>
                <Text style={styles.text}>
                    Asteroid Id : {selector.neo_reference_id}
                </Text>

                <Text style={styles.text}>Name : {selector.name}</Text>

                <Text
                    style={{ color: "blue", margin: 10 }}
                    onPress={() => Linking.openURL(`${selector.nasa_jpl_url}`)}
                >
                    Nasa Jpl Url
                </Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigate("/")}
                >
                    <View>
                        <Text style={styles.texts}>BACK</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    div: {
        alignContent: "center",
        width: 270,
        // marginTop: 20,
        marginVertical: 160,
        marginHorizontal: 40,
        borderRadius: 30,
        padding: 20,
        // borderWidth: 2,
        // borderColor: "#FF5722",
        backgroundColor: "white",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    },
    text: {
        margin: 10,
    },
    button: {
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
// box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
