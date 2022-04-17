import React from 'react';
import { View,Text, Button, StyleSheet } from 'react-native'

export default class Calling extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            name:'vasu',
            number:1
        }
        console.log('constructor called');
        }

     
        componentDidMount(){
            console.log('component mounted');
        }
        UNSAFE_componentWillReceiveProps(props){
            console.log('component recive props',props);
        }
        componentDidUpdate(){
            console.log('component update');
        }



        
    render(){
        const {name,number}=this.state
        return(
            <View style={{flex:1}}>
                {/* <Button title='Increment' onPress={()=>this.props.setValue()}  */}
                <Button title='Increment' onPress={ () =>{
                    this.setState({
                        number:this.state.number +1

                    })

                }} 
                />
                <Text style= {styles.btn}>{number}
                </Text>
                <Text style= {styles.btn}>{name}
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    btn:{
        justifyContent:'center',
        textAlign:'center',
        color:'red',
        fontSize:20
    }
})

//export default Calling;