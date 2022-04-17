import React from 'react';
import { SafeView, View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

const Age = (props) =>{
    const {Age} = props
    console.log('age component called');
        return(
            <SafeAreaView>
                <View style={styles.age}>
                <Text style ={styles.text}>Age:        <Text style={styles.spanColor}>      {Age}</Text></Text>

                </View>

            </SafeAreaView>
        )
}
const styles = StyleSheet.create({
    age:{
        borderRadius:12,
        borderWidth:1,
        padding:30,
       fontSize:40,
     },
     text:{
        padding:5,
        fontSize:18
    },
    spanColor:{
        color:'red',
        fontSize:25

    }
})
export default Age;