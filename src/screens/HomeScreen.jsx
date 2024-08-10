import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'


const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20
    }
})