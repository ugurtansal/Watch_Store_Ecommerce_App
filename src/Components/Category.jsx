import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Category = ({item,selectedCategory,setSelectedCategory}) => {
  return (
    <TouchableOpacity onPress={()=>setSelectedCategory(item)}>
        <Text style={[styles.text,selectedCategory===item&&
            styles.underline
        ]}>{item}</Text>
    </TouchableOpacity>
  )
}

export default Category

const styles = StyleSheet.create({
    text:{
        color: "gray",
        fontSize:20,
        marginHorizontal:10
    },
    underline:{
        color:"#5b41ff",
        borderBottomColor:"#5b41ff",
        borderBottomWidth:2,
        
     }
})