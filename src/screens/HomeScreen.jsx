import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import Tags from '../Components/Tags'
import ProductCard from '../Components/ProductCard'
import { smartWatches } from "../data/smartWatches";

const HomeScreen = () => {
   
  return (
    <SafeAreaView style={styles.container}>
      
      <FlatList 
      
      ListHeaderComponent={
        <>
        <Header/>
        <Tags style={styles.tags}/>
        
        </>
      }
      data={smartWatches} numColumns={2} renderItem={({item})=><ProductCard 
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