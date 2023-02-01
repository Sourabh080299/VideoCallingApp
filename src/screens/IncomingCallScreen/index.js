import React from "react";
import {View, Text, StyleSheet, ImageBackground, Pressable, Alert} from 'react-native';
import bg from '../../../assets/images/callingBg.jpg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
const IncomingCallScreen = () =>{
    const onDecline = () => {
        Alert.alert("declined")
    }
    const onAccept = () => {
        Alert.alert("Accepted")
    }
    return (
        <ImageBackground source={bg} style={styles.bg} resizeMode='cover'>
            <Text style={styles.name}>Sourabh</Text>
            <Text style={styles.phoneNumber}>ringing 91+ 9691619115</Text>
            <View style={[styles.row,{marginTop : 'auto'}]}>
                <View style={styles.iconContainer}>
                    <Ionicons name='alarm' size={40}></Ionicons>
                    <Text style={styles.iconText}>Remind me</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Entypo name='message' size={40}></Entypo>
                    <Text style={styles.iconText}>Message</Text>
                </View>
            </View>
            <View style={styles.row}>
                <Pressable onPress={onDecline} style={styles.iconContainer}>
                    <Feather name='x' size={40} style={styles.iconButton}></Feather>
                    <Text style={styles.iconText}>Decline</Text>
                </Pressable>
                <Pressable onPress={onAccept} style={styles.iconContainer} >
                    <Feather name='check' size={40} style={styles.iconButtonAccept}></Feather>
                    <Text style={styles.iconText}>Accept</Text>
                </Pressable>
            </View>

        </ImageBackground>
        
    )
}

const styles = StyleSheet.create({
    name : {
        fontSize : 40,
        fontWeight : 'bold',
        margin : 5
    },
    phoneNumber : {
        fontSize : 30
    },
    bg : {
        flex : 1,
        alignItems : 'center'
    }
    ,
    row : {
       width : '100%',
       flexDirection : 'row',
       justifyContent : 'space-around',
       marginBottom : 60
    },
    iconButton : {
        backgroundColor : 'red',
        borderRadius : 30,
        padding : 5
    },
    iconButtonAccept : {
        backgroundColor : 'lightgreen',
        borderRadius : 30,
        padding : 5
    },
    iconContainer : {
        alignItems :'center'
    },
    iconText : {
        fontSize : 23
    }
})

export default IncomingCallScreen;