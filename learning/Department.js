import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

const Department = (props) =>{
    console.log("department",props);
    const {Department} = props
    // console.log('pincode',Address);
        return(
            <SafeAreaView >
                <View  style={styles.dept}>
                <Text style = {styles.text2}>Department</Text>
                <Text style={styles.text}>Sname:             {Department.Sname}</Text>
                 <Text style={styles.text}>Rollno:               {Department.Rollno}</Text>
                <Text style={styles.text}>Course:              {Department.Course}</Text>
                <Text style={styles.text}>Department:     {Department.Depart}</Text>
                </View>
           
            </SafeAreaView>
        )
}
const styles = StyleSheet.create({
    dept:{
        borderRadius:12,
        borderWidth:1,
        justifyContent:'space-around',
        paddingHorizontal:25,
    },
    text:{
        padding:15,
        fontSize:18,
    },
    text2:{
        justifyContent:'center',
        textAlign:'center',
        fontSize:25
    }
  })
export default React.memo(Department);