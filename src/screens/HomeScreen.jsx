import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../Components/Header'
import Tags from '../Components/Tags'
import ProductCard from '../Components/ProductCard'
import { smartWatches } from "../data/smartWatches";

const HomeScreen = () => {
  const tags=["Smart Watches","Headphones","Apple","Samsung","Xiaomi","Huawei","Sony","Oppo"];
  const [selectedCategory,setSelectedCategory]=useState("Smart Watches");
  return (
    <SafeAreaView style={styles.container}>
      
      <FlatList 
      
      ListHeaderComponent={
        <>
        <Header/>
        <Tags style={styles.tags} tags={tags}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}/>    
        </>
      }
      data={smartWatches} keyExtractor={(item)=>item.id} numColumns={2} renderItem={({item,index})=><ProductCard 
        item={item} />}
        columnWrapperStyle={{
          justifyContent:"space-between"
        }}
       
        />
      
      
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        
        padding:20
    },
    tags:{
        marginVertical:10
    }
})