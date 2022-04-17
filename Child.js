import {Text, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

export default class Child extends Component {
  constructor(props) {
    super(props);
    console.log('incoing props', props);
  }

  onClickButton=()=>{
      
        this.props.myCallback(12)
  }
  render() {
    const {item,heading,myCallback} = this.props;
    return (
      <View>
        <TouchableOpacity
        onPress={this.onClickButton}
          style={{
            backgroundColor: 'red',
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 20,
          }}>
          <View>
            <Text>{heading}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
