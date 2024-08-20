import { FlatList, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import CartCard from '../Components/CartCard'
import LinearGradient from 'react-native-linear-gradient'
import { CartContext } from '../Context/CartContext'

const CartScreen = () => {
  const {carts,deleteItem,sum}=useContext(CartContext);
  console.log(carts);
  return (
    <View>
      
      <FlatList data={carts} renderItem={({item})=><CartCard item={item}
      deleteItem={deleteItem}
      />} keyExtractor={carts.id}
      
      ListFooterComponent={
        <>
        <View style={styles.billInfo}>
          <View style={styles.totalInfo}>
            <Text style={styles.totalTxt}>Total:</Text>
            <Text style={styles.totalTxt}>${sum}</Text>
          </View>
          <View style={styles.totalInfo}>
            <Text style={styles.totalTxt}>Shipping:</Text>
            <Text style={styles.totalTxt}>$0</Text>
          </View>
          <View style={styles.divider}/>
          <View style={styles.totalInfo}>
            <Text style={styles.totalTxt}>Grand Total:</Text>
            <Text style={styles.totalTxt}>${sum}</Text>
          </View>
      </View>
      <View style={styles.btnContainer}>
      <TouchableOpacity>
        <LinearGradient colors={["#8743ff","#4136f1"]} style={styles.btn} >
              <Text style={{fontWeight:"bold",fontSize:25}}>Checkout</Text>
        </LinearGradient>
      </TouchableOpacity>
      </View>
        </>
      }
      />
      
      
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  billInfo:{
    margin:20,
    backgroundColor:"white",
    borderRadius:35
  },
  totalInfo:{
    margin:20,
    flexDirection:"row",
     
  },
  totalTxt:{
    color:"black",
    fontSize:20,
    flex:1,
  },
  divider:{
    borderWidth:2,
    borderColor:"#c0c0c0"
  },
  btn:{
    borderWidth:1,
    width:"90%",
    alignSelf:"center",
    height:60,
    borderRadius:30,
    justifyContent:"center",
    alignItems:"center",
  }
})