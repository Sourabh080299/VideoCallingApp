import React, { useState, useEffect }  from "react";
import {Text, FlatList, View, StyleSheet, TextInput} from 'react-native';
import dummyContacts from '../../../assets/data/contact.json';
const ContactScreen = () =>{
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredContacts, setFilteredContacts] = useState(dummyContacts)
    useEffect(()=>{
        const newContacts = dummyContacts.filter(
            contact => contact.user_display_name.toLowerCase().includes( searchTerm.toLowerCase() ),
            );
        setFilteredContacts(newContacts);
    }, [searchTerm]);
    return (
        <View>
            <TextInput 
            value={searchTerm}    
            onChangeText={setSearchTerm}        
            style={styles.searchInput} 
            placeholder="Search......"/>
            <FlatList
            data={filteredContacts}
            renderItem = {({item})=> <Text style={styles.contactName}>{item.user_id}  {item.user_name}💯 </Text>}
            ItemSeparatorComponent = {()=> <View style = {styles.separator}></View>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    page : {
      padding : 15,
    },
    contactName : {
      paddingVertical : 15,
      marginVertical : 10,
      fontSize : 20,
    },
    separator : {
      width :'100%',
      height :1,
      backgroundColor : 'lightgray'
    },
    searchInput : {
        margin : 5,
        backgroundColor : 'black',
        borderRightWidth : 10,
        padding : 10,
        borderRadius : 50,

    }
});

export default ContactScreen;