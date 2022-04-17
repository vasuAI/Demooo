import {Text,ScrollView, Button, View, SafeAreaView, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {render} from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

export default class NewApp extends Component {

  constructor(props){
    super(props);
    this.state = {
      StudentDetails : [
        {
          name: 'Vasu-1',
          image: '',
          department: 'React-native',
          date: '4-march-2022',
          },
        {
          name: 'Vasu-2',
          image: '',
          department: 'Flutter',
          date: '4-march',
        },
        {
          name: 'Vasu-3',
          image: '',
          department: 'React-Js',
          date: '4-march-2022',
        },
      ]
    }
  }

  addCard = () => {
    this.setState({
      StudentDetails: [...this.state.StudentDetails, {
        name: 'Student6',
          department: 'React-Js',
          date: '4-march-2022',
      }]
    })
  }
  deleteCard = (index) =>{
    this.state.StudentDetails.splice(index,1)
    this.setState({})

  }
  renderDetail = (items) => {
    const {name, department, date, Address} = items;
    return (
      <View >
        <View styles={styles.card}>
          <View style={styles.data}>
            <Text style={styles.text}>name:{name}</Text>
            <Text>Department:{department}</Text>
            <Text>Date:{date}</Text>
            <Text></Text>
          </View>
          <Image
            style={styles.image}
            source={require('../images/studentPic.jpg')}></Image>
        </View>


        
        <Button style={styles.btn}
          onPress= { ()=>{
            let index = this.state.StudentDetails.findIndex(i => i==items)
          this.deleteCard(index)}}
          title='Remove User'
          />
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView  showsVerticalScrollIndicator={false}>
        <View>

        {this.state.StudentDetails.map(item => this.renderDetail(item))}
        
        </View>
        </ScrollView>
        <View style={styles.buttonParent}>
          <Button 
          onPress= {this.addCard}
          title='Click to add'
          />
          

        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 1.0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  card: {
    
  },
  data: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    borderRadius: 50,
    width: 100,
    height: 100,
  },
  buttonParent:{
    marginBottom:20,
    paddingHorizontal:20
  },
  text:{
    fontSize:30,
    padding:15,
    fontWeight:'100',

  },
  btn:{
    
  }
});
