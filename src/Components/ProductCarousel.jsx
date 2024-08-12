import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useReducer, useRef, useState } from 'react'

const screenWidth = Dimensions.get("window").width;
const ProductCarousel = ({images}) => {

    const [activeImage,setActiveImag]=useState(0);

    const onViewRef=useRef((viewableItems)=>{
        if(viewableItems.viewableItems.length>0){
            setActiveImag(viewableItems.viewableItems[0].index);
        }
    }
    )

    return(
        <>
       
            <FlatList
            data={images}
            renderItem={({item})=>{
                return (
                    <View style={styles.productImageWrapper}>
                        <Image source={{uri:item}} style={styles.image}/>
                    </View>
                );
            }}
            horizontal={true} showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            snapToAlignment='center'
            snapToInterval={screenWidth }
            decelerationRate={"fast"}
            onViewableItemsChanged={onViewRef.current}
            keyExtractor={(item,index)=>index}
            />
            <View style={styles.pagination}>
             {
                images.map((_,index)=>
                (
                <View style={[styles.dot,
                    activeImage===index&&{
                        borderRadius:32,
                        width:20
                    },
                    {
                        backgroundColor:activeImage===index? "#5b41ff":"grey"
                    }
                ]}/>
                )
                )
             }
            </View>
         </>
  );
}

export default ProductCarousel

const styles = StyleSheet.create({
    productImageWrapper:{
        justifyContent:"center",
        alignItems:"center",
        width:screenWidth,
        paddingTop:20,
        marginTop:20
    },
    image:{
        height:350,
        width:350,
        resizeMode:"cover",
        borderRadius:10
    },
    pagination:{
        flexDirection:"row",
        justifyContent:"center",
        marginVertical:10
    },
    dot:{
        height:10,
        width:10,
        borderRadius:5,
        marginHorizontal:5,
        backgroundColor:"gray"
    }
})