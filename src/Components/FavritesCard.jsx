import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

const FavritesCard = () => {
  return (
    <View>
      <View style={styles.cartContainer}>
            
            <View style={{flexDirection:"row"}}>
                <Image source={require("../assets/girl1.png")} style={styles.image}/>
                <Text style={styles.nameTxt} numberOfLines={1}>Samsung fit 3 pro{""}</Text>
            </View>
            <Text style={styles.brandNameTxt} numberOfLines={1}>Samsung{""}</Text>
            <View style={{flexDirection:"row"}}>
                <Text style>${300.25}</Text>
            </View>
            <View style={styles.priceDeleteContainer}>
                <Text style={styles.price}>$139.90</Text>
           </View>
      </View>
      <TouchableOpacity style={styles.heartIcon}>
            <AntDesign name={"heart"} color={"#5b41ff"} size={30} />
      </TouchableOpacity>
    </View>
  )
}

export default FavritesCard

const styles = StyleSheet.create({
    cartContainer:{
        borderRadius:30,
        backgroundColor:"white",
        height:200,
        padding:15,
        margin:20
    },
    image:{
        height:170,
        width:120,
    },
    nameTxt:{
        color:"black",
        marginHorizontal:15,
        fontSize:22,
        fontWeight:"800",
        marginVertical:50,
        maxWidth:260
    },
    brandNameTxt:{
        color:"#88898c",
        position:"absolute",
        top:50,
        left:150,
        fontWeight:"bold",
        fontSize:20,
        marginVertical:50
    },
    color:{
        borderWidth:1,
        width:20,
        height:20,
        borderRadius:10,
        
    },
    colorNameTxt:{
        color:"black",
        marginHorizontal:5
    },
    colorsContainer:{
        borderWidth:1,
        height:40,
        borderColor:"#e5e6ea",
        position:"absolute",
        top:90,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        width:"25%",
        left:150,
        borderRadius:10
    },
    priceDeleteContainer:{
        flexDirection:"row",
        position:"absolute",
        top:150,
        left:150,    
        justifyContent:"space-between"
    },
    price:{
        color:"black",
        fontSize:25,
        fontWeight:"700",
        marginHorizontal:40
    },
    heartIcon:{
        position:"absolute",
        right:30,
        top:30
    }
})