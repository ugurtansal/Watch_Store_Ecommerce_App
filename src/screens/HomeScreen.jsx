import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import Tags from '../Components/Tags'


const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Tags style={styles.tags}/>
      <Text style={{color:"black"}}>AAAA</Text>
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