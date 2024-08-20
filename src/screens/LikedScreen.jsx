import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FavritesCard from '../Components/FavritesCard'

const LikedScreen = () => {
  return (
    <View>
      <FavritesCard/>
      <FavritesCard/>
    </View>
  )
}

export default LikedScreen

const styles = StyleSheet.create({})