import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react"; 
import { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";

function ListScreen({navigation}){
    const[dataSource, setDataSource] = useState([])

    const fetchData= async () => {
        try {
            const response = await fetch('https://api.npoint.io/084389e660a986d690d1')
            const responseJson = await response.json();
            //console.log(responseJson.Genre)
            setDataSource(responseJson.Genre)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    },[])

    return (
        <View style={styles.container}>
            <FlatList
            data={dataSource}
            ItemSeparatorComponent= {
                ()=> <View style={{height:1,backgroundColor:'green'}}>
                     </View>
            }
            renderItem={({item}) => (
                <View>
                    <TouchableOpacity activeOpacity={0.7} style={styles.appButtonContainer} onPress={() => navigation.navigate('Question',{ item })}>
                    <Text style={styles.appButtonText}>{item.name}</Text>
                    
                    <View style={{flexDirection:'row'}}>
                    
                    </View>
                    </TouchableOpacity>
                </View>
            )}
            >    
            </FlatList>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
       backgroundColor: 'green',
       justifyContent: "center",
       paddingHorizontal: 5,
       paddingTop: 10
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
    appButtonContainer: {
        height : 50,
        width: 350,
        backgroundColor: "#DDDDDD",
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginBottom: 4,
        justifyContent: "center",
        
        
      },
      appButtonText: {
        fontSize: 18,
        color: "#000",
        fontWeight: "condensed",
        alignSelf: "flex-start",
        textTransform: "uppercase"
      }
});

export default ListScreen;