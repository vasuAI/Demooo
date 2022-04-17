import React from 'react';
import { View, StyleSheet } from 'react-native';

const Temp = () =>{
    return(
        <View style = {{flex:1, flexDirection:'reverse'}}>
            <View style={{backgroundColor:'red', width:50, height:50 }}></View>
            <View style={{backgroundColor:'blue', width:50, height:50 }}></View>
            <View style={{backgroundColor:'green', width:50, height:50 }}></View>
            
              </View>
    )
}
const styles = StyleSheet.create({
    text:{
    }
})
export default Temp;