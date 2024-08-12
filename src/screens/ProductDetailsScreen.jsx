import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

import Tags from '../Components/Tags';
import CartButton from '../Components/CartButton';
import ProductCarousel from '../Components/ProductCarousel';
 
const ProductDetailsScreen = () => {
    const tags=["Details","Review"];
    const [selectedText,setSelectedText]=useState("Details");
    const [selectedColor,setselectedColor]=useState("Silver");
    const [isLiked,setIsLiked]=useState(false);
    const navigation=useNavigation();
    const item=useRoute().params.item;
     
  return (
    <View style={styles.container}>
      <ScrollView>
      <>
       <View> 
            
            <ProductCarousel images={item.images} />
        
            <TouchableOpacity style={styles.iconsContainer} onPress={()=>navigation.goBack()}>
                <AntDesign name={"arrowleft"} color={"black"} size={30}/>    
            </TouchableOpacity>  
            <TouchableOpacity style={[styles.heartIcon,styles.iconsContainer]} 
                onPress={()=>setIsLiked(!isLiked)}
            >
                {
                    isLiked? <AntDesign name={"heart"} color={"#5b41ff"} size={30} />
                    : <AntDesign name={"hearto"} color={"black"} size={30} />
                }
                
            </TouchableOpacity>  
        </View>
      <View style={{flexDirection:"row"}}>
        <Text style={styles.nameTxt}>{item.name}</Text>
        <View style={styles.ratingContainer}>
            <AntDesign name={"star"} size={20} color={"#ffd33c"}/>
            <Text style={styles.rateTxt}>4.3</Text>
        </View>
      </View>

      <Text style={styles.colorTxt}>Colors</Text>

        <View style={{flexDirection:"row",justifyContent:"space-around"}}>
            <TouchableOpacity style={[styles.colorsContainer,
                selectedColor==="Silver"&&{
                    borderColor:"#5b41ff"
                }
            ]} onPress={()=>setselectedColor("Silver")}>
                <View style={[styles.color,{backgroundColor:"silver"}]}/>
                <Text style={styles.colorNameTxt}>Silver</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.colorsContainer,
                selectedColor==="Orange"&&{
                    borderColor:"#5b41ff"
                }
            ]} onPress={()=>setselectedColor("Orange")}>
                <View style={[styles.color,{backgroundColor:"#f25745"}]}/>
                <Text  style={styles.colorNameTxt}>Bright Orange</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.colorsContainer,
                selectedColor==="Starlight"&&{
                    borderColor:"#5b41ff"
                }
            ]} onPress={()=>setselectedColor("Starlight")}>
                <View style={[styles.color,{backgroundColor:"#faf6f2"}]}/>
                <Text  style={styles.colorNameTxt}>Starlight</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.tagsContainer}>
            <Tags  tags={tags}
            selectedCategory={selectedText}
            setSelectedCategory={setSelectedText}/> 
            
        </View>
        
        {
        selectedText==="Details"?<Text style={styles.detailsReviewTxt}>{item.details}</Text>
        :<Text style={styles.detailsReviewTxt}>{item.review}</Text>
        }
          <CartButton price={item.price}/>
     </>
    </ScrollView>
</View>
  )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
   
    container:{
        padding:20,
        backgroundColor:"#ffffff",
       
    },
    iconsContainer:{
        position:"absolute",
        margin:10,
    },
    heartIcon:{
       alignSelf:"flex-end",
       right:5
    },
   
    nameTxt:{
        color:"black",
        fontSize:30,
        marginVertical:10,
        fontWeight:"bold"
    },
    colorTxt:{
        color:"black",
        fontSize:20,
        fontWeight:"600",
        marginTop:20,
    },
    colorsContainer:{
        borderWidth:1,
        height:40,
        borderColor:"#e5e6ea",
        marginTop:10,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        padding:10,
        borderRadius:10
    },
    color:{
        borderWidth:1,
        width:20,
        height:20,
        borderRadius:10,
        
    },
    colorNameTxt:{
        color:"black",
        marginHorizontal:5
    },
    tagsContainer:{
        marginVertical:20
    },
    ratingContainer:{
        
        width:70,
        height:40,
        backgroundColor:"#fcfaff",
        margin:10,
        flexDirection:"row",
        padding:10
    },
    rateTxt:{
        color:"#989dac",
        marginHorizontal:5,
        fontSize:18
    },
    detailsReviewTxt:{
        color:"black",
        fontSize:17.5,
        fontWeight:"300",
        lineHeight:24
    }
})