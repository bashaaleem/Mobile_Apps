import { View, Text, StyleSheet, Button } from "react-native";

function ResultScreen({navigation}){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Result Screen
            </Text>
            <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />

        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'black'
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
});

export default ResultScreen;