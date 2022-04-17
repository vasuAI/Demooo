import {SafeAreaView, Text, View,StyleSheet,ScrollView} from 'react-native';
import React, {Component} from 'react';

const student = [
  {
    name: 'Alok',
    department: 'React-native',
    date: '4-march-2022',
    Address: {
      locality: 'noida',
      pincode: 201301,
      country: 'india',
    },
  },
  {
    name: 'Alok',
    department: 'Raeact-native',
    date: '4-march-2022',
    Address: {
      locality: 'noida',
      pincode: 201301,
      country: 'india',
    },
  },
  {
    name: 'Alok',
    department: 'Raeact-native',
    date: '4-march-2022',
    Address: {
      locality: 'noida',
      pincode: 201301,
      country: 'india',
    },
  },
];



export default class ReactJsx extends Component {


   renderMyItem=(item)=>{
     const {name,department,date,Address}=item
    return(
      <View style={{marginVertical:20}}>
        <Text style={{backgroundColor:'yellow',fontSize:40}}>{name}</Text>
        <Text style={{backgroundColor:'red',fontSize:40}}>{department}</Text>
        <Text style={{backgroundColor:'pink',fontSize:40}}>{date}</Text>
        <Text style={{backgroundColor:'white',fontSize:40}}>{JSON.stringify(Address)}</Text>
      </View>
    )
  }
  render() {
    return (
        <SafeAreaView style={styles.parent}>
          <View style={styles.innerParent}>
            <View style={styles.thirdInnner}>
            <View style={styles.fourthParent}/>
            </View>
           
            {/* <View style={styles.thirdInnner}/> */}

           {/* </View> */}
            {/* <ScrollView>
            {
             student.map(item=>this.renderMyItem(item))
            }
            </ScrollView> */}
          </View>
   
      </SafeAreaView>
    );
  }
}



const styles = StyleSheet.create({
    parent:{
        flex:1,
        backgroundColor:'red'
    },innerParent:{
      flex:1,
      backgroundColor:'blue'
    },thirdInnner:{
        flex:0.5,
        backgroundColor:'black'
    },fourthParent:{
      flex:1,
      backgroundColor:'green'
    },fifthParent:{
      flex:1,
      backgroundColor:'yellow'
    },
})