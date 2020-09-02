import React, { Component } from 'react';
import {Text, View } from 'react-native';

class Blackpink extends Component{
  constructor(props){
    super(props)
    this.state={
      title:"Ice Cream",
      title2:"With Selena Gomez",
      title3:"BlackPink"
    }
  }
  render(){
    return (
    <View>
      <Text>{this.state.title}</Text>
      <Text>{this.state.title3}</Text>
      <Text>{this.state.title2}</Text>
    </View>
    )
  }
}
export default Blackpink;
