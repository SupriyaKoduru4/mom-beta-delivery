import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

export default function LoadingScreen() {
  return (
    <View style={{flex:1 , justifyContent:"center" , alignItems:"center"}}>
      <ActivityIndicator size={"large"}/>
    </View>
  )
}