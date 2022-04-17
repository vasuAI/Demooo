import {Text, View} from 'react-native';
import React, {Component} from 'react';

export default class newDemo extends Component {

  handleCounter=()=> {
    console.log('handlefuncton called');
  }
  constructor(){
    super();
    this.state={
      age:'',
      height:''
    }
  }
   abc=th
  render() {
    return (
      <View>
        <Text onPress={this.handleCounter}>newDemo</Text>
      </View>
    );
  }
}
