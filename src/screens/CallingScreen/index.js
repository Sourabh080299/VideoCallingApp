import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const CallingScreen = () =>{
    return(
        <View style={styles.page}>
            <View style={styles.cameraPreview}>
                <Text style={styles.name}>Sourabh</Text>
                <Text style={styles.phoneNumber}>ringing 91+ 9691619115</Text>
            </View>
            <View style={styles.buttonsContainer}>
                 <View style={styles.iconButton}>
                    <Ionicons name="ios-volume-high-sharp" size={40} color={'black'}></Ionicons>
                 </View>
                 <View style={styles.iconButton}>
                    <Ionicons name="ios-camera-reverse" size={40} color={'black'}></Ionicons>
                 </View>
                 <View style={styles.iconButton}>
                    <MaterialIcons name="videocam-off" size={40} color={'black'}></MaterialIcons>
                 </View>
                 <View style={styles.iconButton}>
                    <Ionicons name="videocam-sharp" size={40} color={'black'}></Ionicons>
                 </View>
                 <View style={styles.iconButton}>
                    <Ionicons name="volume-mute" size={40} color={'black'}></Ionicons>
                 </View>
                 <View style={[styles.iconButton,{backgroundColor:'red'}]}>
                    <Ionicons name="call" size={40} color={'white'}></Ionicons>
                 </View>
                
            </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    page : {
        backgroundColor : 'white',
        height : '100%'
    },
    cameraPreview : {
        backgroundColor : 'green',
        flex : 1,
        alignItems : 'center',
        paddingTop : 10
    },
    name : {
        fontSize : 40,
        fontWeight : 'bold',
        margin : 5
    },
    phoneNumber : {
        fontSize : 30
    },
    buttonsContainer : {
        backgroundColor : '#333333',
        paddingTop :10,
        paddingBottom : 40,
        borderTopLeftRadius : 15,
        borderTopRightRadius : 15,
        width : '100%',
        alignItems : 'center',
        marginTop : 'auto',
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    iconButton : {
        backgroundColor : 'lightgrey',
        borderRadius : 30,
        padding : 5
    }
})

export default CallingScreen;