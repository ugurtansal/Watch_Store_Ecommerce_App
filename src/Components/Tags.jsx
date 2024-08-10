import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Category from './Category'

const Tags = () => {
    const tags=["All Brands","Apple","Samsung","Xiaomi","Huawei","Sony","Oppo"];
    const [selectedCategory,setSelectedCategory]=useState("All Brands")
  return (
    <View style={{margin:5}}>
    <FlatList
    data={tags}
    renderItem={({item})=><Category
    item={item} selectedCategory={selectedCategory}
    setSelectedCategory={setSelectedCategory}
    />}
    horizontal={true} showsHorizontalScrollIndicator={false}
    keyExtractor={(item)=>item}
    ItemSeparatorComponent={<View style={{paddingHorizontal:5}}/>}
    />
    </View>
  )
}

export default Tags

const styles = StyleSheet.create({})