import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';


const CartCard = ({item,delteItem}) => {
    
  return (
    <SafeAreaView style={{padding:20}}>
      <View style={styles.cartContainer}>
            <View style={{flexDirection:"row"}}>
                <Image source={{uri:item.image}} style={styles.image}/>
                <Text style={styles.nameTxt} numberOfLines={1}>{item.name} {""}</Text>
            </View>
            <Text style={styles.brandNameTxt} numberOfLines={1}>{item.brand}{""}</Text>
            <View style={styles.colorsContainer} >
                    <View style={[styles.color,{backgroundColor:"silver"}]}/>
                    <Text style={styles.colorNameTxt}>Silver</Text>
            </View>

            <View style={styles.priceDeleteContainer}>
                <Text style={styles.price}>${item.price}</Text>
                <TouchableOpacity onPress={()=>delteItem(item)}>
                    <MaterialIcons  name={"delete"} size={32} color={"#5b41ff"} style={styles.deleteIcon}/>
                </TouchableOpacity>
                 </View>
      </View>
    </SafeAreaView>
  )
}

export default CartCard

const styles = StyleSheet.create({
    cartContainer:{
        borderRadius:30,
        backgroundColor:"white",
        height:200,
        padding:15
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
        
    },
    brandNameTxt:{
        color:"#88898c",
        position:"absolute",
        top:50,
        left:150,
        fontWeight:"bold",
        fontSize:20
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
    
})