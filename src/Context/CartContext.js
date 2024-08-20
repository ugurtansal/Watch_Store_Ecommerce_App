import React,{ createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CartContext=createContext();

export const CartProvider=({children})=>{
    const [carts,setCart]=useState([]);
    const [sum,setSum]=useState(0);

    useEffect(()=>{
        loadCart();
    },[])

    const loadCart= async()=>{
        const carts=await AsyncStorage.getItem("carts");
        carts=carts?JSON.parse(carts):[];
        setCart(carts);
        totalPrice(carts);
    }

    const newCartItem=async(item)=>{
        const itemIndex=carts.findIndex((cart)=>cart.id===item.id);

        if(itemIndex===-1){
          const newCarItem=[...carts,item];
          await AsyncStorage.setItem("carts",JSON.stringify(newCarItem));
          setCart(newCarItem);
          totalPrice(newCarItem);
        }
    }

    const deleteItem=async(item)=>{
        const newCart=carts.filter((cart)=>cart.id!==item.id);
        await AsyncStorage.setItem("carts",JSON.stringify(newCart));
        setCart(newCart);
        totalPrice(newCart);
    }

    const totalPrice=(carts)=>{
        const totalSum=carts.reduce((amount,item)=>
            amount+item.price,0)
        setSum(totalSum);
    }

    const value={
        carts,
        newCartItem,
        deleteItem,
        sum,
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}