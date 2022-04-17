import { Text, View,SafeAreaView, Alert } from 'react-native'
import React, { Component } from 'react'
import Child from './Child'

export default class pratice extends Component {

    
  myCallback=(id)=>{
    console.log("user click from child component")
    Alert.alert("user click"+id)
  }  

  render() {
    return (
      <SafeAreaView style={{flex:1}}>
          <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
          <Text>pratice</Text>
          <Child myCallback={this.myCallback} heading={"name"} item={[{name:'nitish',roll:12},{name:'nitish',roll:12}]} />;
   
      </SafeAreaView>
    )
  }
}