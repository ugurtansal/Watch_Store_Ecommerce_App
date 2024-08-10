import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.txt}>Find Your Suitable Watch Now</Text>
      <View style={styles.searchContainer}>
        <View style={styles.search}>
            <Ionicons name={"search-outline"} size={24} color={"#5b41ff"}  style={styles.searchIcon}/>
            <TextInput placeholder='Search...' placeholderTextColor={"black"} style={styles.searchTxt}/>
        </View>
        <Ionicons name={"apps-sharp"} color={"#5b41ff"} size={45} />
      </View>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
    txt:{
        color:"black",
        fontSize:40,
        fontWeight:"bold",
    
    },
    search:{
        borderWidth:1,
        borderRadius:20,
        height:50,
        flexDirection:"row",
        padding:10,
        flex:1,
        marginHorizontal:10
    },
    searchContainer:{
        marginVertical:25,
        flexDirection:"row",
        
    },
    searchIcon:{
        marginHorizontal:10
    },
    searchTxt:{
        color:"black",
        paddingVertical:0,
        fontSize:20
    }
})