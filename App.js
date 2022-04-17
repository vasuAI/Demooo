import React from 'react';
import {
  Button,
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Demo from './src/Demo';
import Sample from './src/Sample';
import Calling from './src/Calling';
import StudAddress from './learning/StudAddress';
import Name from './learning/Name';
import Department from './learning/Department';
import Age from './learning/Age';
import NewDemo from './src/newDemo';

export default class my extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [{
        firstName:'',
        midName:'',
        lastName:''
      }],
      Age:'',
      Nationality:'',
      DOB:'',
      Address:{
        houseNo:'',
        locality:'',
        city:'',
        district:'',
        state:'',
        pincode:'',
        country:'',
      },
      Department:{
        Sname:'',
        Rollno:'',
        Course:'',
        Department:''

      }
    };
    console.log('constructor called');
    
  }

  render() {
     //console.log("pincode",this.state.Department);
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
        <Button title='Get Data'
          onPress={() => {
            this.setState({
              name: [{
                firstName:'Vasu',
                midName:'.....',
                lastName:'Choubey'
              }],
              Age:'22',
              //Pincode:this.Pincode +"201203,"
              Address:{...this.state.Address,
                houseNo:'456',
                locality:'Model Town',
                city:'Noida',
                district:'Noida',
                state:'Uttar-Pradesh',
                pincode:'201204',
                country:'India',
                },
              //Address:{...this.state.Address,state1:{...this.state.Address.state1,hometown:'up'}}
              Department:{...this.state.Department,
                Sname:'Vasu',
                Rollno:'18065253',
                Course:'Btech',
                Depart:'CSE React-Native'
              }
            });
          }}/>

        <Name name={this.state.name} />
        <Age Age = {this.state.Age} />
      <StudAddress Address = {this.state.Address} />
      <Department Department = {this.state.Department}/>
      {/* <NewDemo /> */}
      {/* <Department /> */}

        {/* <Calling  setValue={callParent}  /> */}
        {/* <Sample /> */}
        {/* <Demo/> */}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    marginTop:10,
    flex:1,
   textAlign:'center',
   justifyContent:'center'
  },
  

})




// const callParent=()=>{
//     console.log("call back call")
// }
