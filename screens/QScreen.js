import { View, Text, StyleSheet, Button, Modal } from "react-native";
import { useEffect, useState } from "react";
import FlipCard from "react-native-flip-card";
import { TouchableOpacity } from "react-native";
import { quizData } from "./QuizData";

function QScreen({navigation}){
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [timeLeft, setTimeLeft] = useState(10);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [score, setScore] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [correctAns, setCorrectAns] = useState('Wrong');

    const timer = setTimeout(() => {
        if (timeLeft > 0) {
            setTimeLeft(timeLeft - 1);
        } else {
            console.log(currentQuestion);
            if (currentQuestion <
                quizData.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setTimeLeft(10);
            } else {
                setQuizCompleted(true);
            }
        }
    }, 1000);

    const handleAnswer = (selectedOption) =>{
        if(selectedOption === quizData[currentQuestion].correctAnswer){
            setScore(score+1);
            setCorrectAns('Correct');
            setIsModalVisible(true);
           
        } else {
           
            setIsModalVisible(true);
        }
        if (currentQuestion < quizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setTimeLeft(10);
        } else {
            setQuizCompleted(true);
        }

    };
    
    useEffect(() => {timer;return () => clearTimeout(timer);},[currentQuestion,timeLeft]);


    return (
        <View style={styles.maincontainer}>

            <View style ={styles.topContainer}>

                <View style={styles.topContainerLeft}>
                    <Text style={styles.topText} >Your Score Is : </Text>
                </View>
                <View style={styles.topContainerLeftScore}>
                    <Text style={styles.topText1} >{score} </Text>
                </View>
                <View style={styles.topContainerRight}>
                    <Text style={styles.topText} >Time Left : </Text>
                </View>
                <View style={styles.topContainerRightTimer}>
                    <Text style={styles.topText1}>{timeLeft} secs</Text>
                </View>
                
            </View>
            
            <View style ={styles.middleContainer}>
            {quizCompleted ? (
                <View>
                    <Text> if quizComplted is True</Text>
                    <Text>Congratulations !!! </Text>
                    <Text> Your Total Score Is : {score} </Text>
                </View>
            ) : (
                <View>
                    <Text style={styles.question}>{quizData[currentQuestion].question}</Text>
                        {quizData[currentQuestion]
                            .options.map((option, index) => (
                            <TouchableOpacity 
                                activeOpacity={0.7}
                                key={index}
                                style={styles.option}
                                onPress={() => handleAnswer(option)}
                            >
                                
                                <Text style={styles.buttonText}>
                                    {option}
                                </Text>
                            </TouchableOpacity>
                        ))} 
                    <Modal 
                        presentationStyle="pageSheet"
                        visible={isModalVisible} 
                        onRequestClose={()=> {
                            setIsModalVisible(false)
                        setCorrectAns('Wrong')}}
                        animationType="slide"
                    >
                        <View style = {styles.buttonText} >
                            <Text style={styles.question}>{correctAns}</Text>
                            <Text style={styles.buttonText}>
                                {quizData[currentQuestion].Description}
                            </Text>
                            <Button  title="Close" color="midnightblue" onPress={() => setIsModalVisible(false)}></Button>
                        </View>
                    </Modal>
                </View>
                
            )}
            </View>

            <View style={styles.bottomContainer}>
            <Button title="Read More" onPress={() => navigation.navigate("Result")} />
            <Button title="Details" onPress={() => navigation.navigate("Result")} />
            </View>
        </View>

    );
}


const styles = StyleSheet.create({
    topContainer:{
        flex: 0.1,
        flexDirection: "row",
        backgroundColor: 'grey',
        alignSelf: "center",
        paddingLeft: 8,
        paddingRight: 8,
    },
    topContainerLeft:{
        flex: 0.35,
        flexDirection: "row",
        alignSelf: "flex-start",
        fontSize: 20,
        paddingTop: 10,
    },
    topContainerLeftScore:{
        flex: 0.15,
        flexDirection: "row",
        alignSelf: "flex-start",
        fontSize: 20,
        paddingTop: 10,
    },
    topContainerRight:{
        flex: 0.35,
        flexDirection: "row-reverse",
        paddingTop: 10,
        fontSize: 20,
    },
    topContainerRightTimer:{
        flex: 0.15,
        flexDirection: "row-reverse",
        paddingTop: 10,
        fontSize: 20,
    },
    maincontainer: {
        flex: 1,
        flexDirection: "column",
       backgroundColor: 'green'
    },
    middleContainer:{
        flex: 1.5,
        flexDirection: "column",
       backgroundColor: 'white',
       paddingTop: 8,
       paddingBottom: 8,
    },
    bottomContainer:{
        flex: 0.1,
        flexDirection: "row",
        alignSelf: "center",
       backgroundColor: 'yellow'
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
    text1: {
        fontSize: 20,
        fontWeight: 'condensedBold',
        color:"#fff"
    },
    topText: {
        fontSize: 18,
        fontWeight: "condensed",
        color:"#fff"
        
    },
    topText1: {
        fontSize: 18,
        fontWeight: "condensed",
        color:"black"
        
    },
    option: {
        backgroundColor: '#DDDDDD',
        padding: 10,
        marginBottom: 20,
        alignItems: 'flex-start',
    },
    optionCorrect: {
        backgroundColor: 'green',
        padding: 10,
        marginBottom: 20,
        alignItems: 'flex-start',
    },
    optionWrong: {
        backgroundColor: 'red',
        padding: 10,
        marginBottom: 20,
        alignItems: 'flex-start',
    },
    buttonText: {
        fontSize: 16,
        paddingLeft: 8,
        paddingRight: 8
    },
    question: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
       justifyContent: "flex-start"
,        paddingLeft: 8,
        paddingRight: 8
    },
});

export default QScreen;