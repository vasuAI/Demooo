import React from 'react';
import {View,StyleSheet,Text, Image, ScrollView, SafeAreaView} from 'react-native';

const logo = {
    path1: 'https://i.pinimg.com/736x/ea/69/dc/ea69dc6226e72a33f82d3add20b470df.jpg',
    path2:'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbnxlbnwwfHwwfHw%3D&w=1000&q=80',
    path3:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRecNnYHAJj_rzW_fmVL2qZw_CQCh0ko6uwdA&usqp=CAU',
    path4:'https://i.pinimg.com/originals/f4/ed/18/f4ed18e4f8c07a1688153de9daa5bd6c.jpg'
  };


  


const Demo = () =>{
    return(
        <ScrollView>
        <SafeAreaView style={styles.parent}>
          <Image style={styles.height} source={{uri:logo.path1}}></Image>
          <Image style={styles.height} source={{uri:logo.path2}}></Image>
          <Image style={styles.height} source={{uri:logo.path3}}></Image>
          <Image style={styles.height} source={{uri:logo.path4}}></Image>

    
        </SafeAreaView>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    parent:{

    flex:1,
    backgroundColor:'red'
    },
    parent2:{
      color:'blue',
      fontSize: 20,
    fontWeight: "bold",
    fontFamily:'Cochin',
    },
    height:{
        height:300,
        width:'100%',
        backgroundColor:'blue'
    }
})
export default Demo;