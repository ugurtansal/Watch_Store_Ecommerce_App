import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome6 from 'react-native-vector-icons/dist/FontAwesome6';
import LinearGradient from 'react-native-linear-gradient';

const CartButton = ({price}) => {
  return (
    <View>
      
      <LinearGradient colors={["#8743ff","#4136f1"]} style={styles.btn}>
            <FontAwesome6 name={"cart-shopping"} color={"white"} size={25}/>
            <Text style={styles.txt}>Add To Cart |</Text>
            <Text style={styles.txt}>${price}</Text>
      </LinearGradient>
    </View>
  )
}

export default CartButton

const styles = StyleSheet.create({
  btn:{
    flexDirection:"row",
    height:75,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:25,
    marginVertical:20
  },
  txt:{
    fontSize:25,
    marginHorizontal:10,
    fontWeight:"bold"
  }
})