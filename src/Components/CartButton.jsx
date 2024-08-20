import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../Context/CartContext';

const CartButton = ({item,price,selectedColor}) => {
  const {newCartItem}=useContext(CartContext);
  const navigation=useNavigation();

  const handleAdd=(item)=>{
    item.color=selectedColor;
    newCartItem(item); 
    navigation.navigate('Cart');
  }
  return (
    <View>
      <TouchableOpacity onPress={()=>handleAdd(item)}>
        <LinearGradient colors={["#8743ff","#4136f1"]} style={styles.btn}  >
              <FontAwesome name={"opencart"} color={"white"} size={25}/>
              <Text style={styles.txt}>Add To Cart |</Text>
              <Text style={styles.txt}>${price}</Text>
        </LinearGradient>
      </TouchableOpacity>
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
    borderRadius:15,
    marginVertical:20
  },
  txt:{
    fontSize:22,
    marginHorizontal:10,
    fontWeight:"bold",
    color:"white"
  }
})