import React from 'react';
import {View, Button, StyleSheet, TextInput, Alert} from 'react-native';
import Temp from './Temp';



const Separator =() =>{
    return(
    <View style={styles.Separator}></View>
    )}
const Sample = () => {
  return (
    <View style={styles.first}>
      <Button
        title="Click Me"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        onPress={() =>{Alert.alert('Simple button')}}
        />
      {Separator()}

      <TextInput placeholder="Helldfddddfso Woooosrld"></TextInput>
      {Separator()}
      <Button
        title="Click Me"
        disabled
        accessibilityLabel="Learn more about this purple button"
        onPress={() =>{Alert.alert('U cnt press this button')}}
        />
    <Temp />
    </View>
  );
};
const styles = StyleSheet.create({
  first: {
    color: 'red',
    padding: 50,
  },
  Separator:{
    borderBottomColor:'black',
    borderBottomWidth:2


  }
});
export default Sample;