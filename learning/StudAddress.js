import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const StudAddress = props => {
  console.log('student', props);
  const {Address} = props;
  // console.log('pincode',Address);
  return (
    <SafeAreaView>
      <View style={styles.cointainer}>
      <Text style={styles.text2}>Address   </Text>
        <Text style={styles.text}>HouseNo:       {Address.houseNo}</Text>
        <Text style={styles.text}>Locality:          {Address.locality}</Text>
        <Text style={styles.text}>City:                 {Address.city}</Text>
        <Text style={styles.text}>District:           {Address.district}</Text>
        <Text style={styles.text}>State:              {Address.state}</Text>
        <Text style={styles.text}>Pincode:         {Address.pincode}</Text>
        <Text style={styles.text}>Country:         {Address.country}</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    cointainer:{
        // backgroundColor:'red',
        borderRadius:12,
        borderWidth:1,
        justifyContent:'space-around',
        paddingHorizontal:25,   
    },
    text:{
        padding:10,
        fontSize:18,
    },
    text2:{
        justifyContent:'center',
        textAlign:'center',
        fontSize:25
    }
});
export default StudAddress;
