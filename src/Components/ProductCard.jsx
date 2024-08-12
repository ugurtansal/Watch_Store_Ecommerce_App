import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ProductCard = ({item}) => {
  const navigatior=useNavigation();
  return (
    <TouchableOpacity onPress={()=>
      { navigatior.navigate("PRODUCT_DETAILS",{ item })}}  
      style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri:item.image}} style={styles.image}/>
      </View>
      <View>
        <Text style={styles.modelTxt} numberOfLines={1}>{item.name}{" "}</Text>
      </View>
      <Text style={styles.brandTxt}>{item.brand}</Text>
      <View>
        <Text style={styles.priceTxt}>${item.price}</Text>
      </View>
    </TouchableOpacity> 
  )
}

export default ProductCard

const styles = StyleSheet.create({
    imageContainer:{
        
    },
    image:{
        height:150,
        width:"100%",
        borderRadius:15,
        resizeMode:"center",
    },
    container:{
        marginHorizontal:5,
        padding:10,
        width:"48%",
        backgroundColor:"#ffffff",
        borderRadius:30,
        marginVertical:10
    },
    modelTxt:{
        color:"black",
        marginVertical:10,
        fontSize:20,
        fontWeight:"600"
    },
    brandTxt:{
        color:"gray",
        fontSize:20,
        fontWeight:"bold"
    },
    priceTxt:{
        color:"#5b41ff",
        fontSize:22,
        marginTop:15,
        fontWeight:"800"
    }
})