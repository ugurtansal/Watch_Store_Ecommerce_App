import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/dist/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import LikedScreen from './src/screens/LikedScreen';
import CartScreen from './src/screens/CartScreen';
import AccountScreen from './src/screens/AccountScreen';


MaterialIcons
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        headerShown:false,
        tabBarActiveTintColor: "#5b41ff",
        tabBarInactiveTintColor: "gray",
      }}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon:({color})=>{
            return(
            <Entypo name={"home"} color={color} size={25}/>
            ) }
        }}/>
        <Tab.Screen name="Favorites" component={LikedScreen} options={{
          tabBarIcon:({color})=>{
            return(
            <MaterialIcons name={"favorite"} color={color} size={25}/>
            )}
        }}/>
        <Tab.Screen name="Cart" component={CartScreen} options={{
          tabBarIcon:({color})=>{
            return(
            <FontAwesome6 name={"cart-shopping"} color={color} size={25}/>
            )}
        }}/>
        <Tab.Screen name="Account" component={AccountScreen}
         options={{
          tabBarIcon:({color})=>{
            return(
            <MaterialCommunityIcons name={"account"} color={color} size={25}/>
            )}
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})