import { View, Text, StyleSheet, Button, Image , TouchableOpacity} from "react-native";
import welcome from '../assets/welcome.png';

function HomeScreen(props){
    return (
        
        <View style={styles.container}>
            <Text style={styles.text}> Welcome   ||   مرحباً </Text>
            <Text style={styles.text1}> Al-Quran (القرآن) and Al-Hadees (الحديس)  </Text>
            <Text style={styles.text}>Islamic Quiz App </Text>
            <Image source={welcome} style={styles.image}/>
            <AppButton title='Start' onPress={() => props.navigation.navigate("List")} />
        </View>
    );
}

const AppButton = ({ onPress, title }) => (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "green"
    },
    text: {
        fontSize: 28,
        justifyContent: "center",
        fontWeight: 'condensed',
        marginBottom: 16,
        color:"#fff"
    },
    text1: {
        fontSize: 20,
        justifyContent: "center",
        fontWeight: 'condensedBold',
        marginBottom: 18,
        color:"#fff"
    },
    image:{
       resizeMode: "contain",
       marginBottom: 80,
       marginLeft: 6,
       marginRight: 8,
       width: 380,
       height: 400
    },
    appButtonContainer: {
        elevation: 8,
        width: 350,
        backgroundColor: "#007bff", //blue color for button
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
    
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "condensed",
        alignSelf: "center",
        textTransform: "uppercase"
      }
    
});

export default HomeScreen;