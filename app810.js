import React,{Component} from 'react';
import {StyleSheet,Text,View,Image} from 'react-native';
import styled from 'styled-components/native'

export default class Blackpink extends Component{
  render(){
    return(
      <Container>
        <Item transparent>
          <Image style={{flex:1,height:"100%",width:"100%",justifyContent:'center'}}
          source={{
              uri:'https://images.workpointnews.com/workpointnews/2020/08/26155108/1598431861_28004_web-logo27may20207.jpg'
            }}
          ></Image>
          <Title>Ice-Cream</Title>
        </Item>
        <Item primary>
        <Image style={{flex:1,height:"50%",width:"70%",alignItems:'center',justifyContent:'center'}}
          source={{
              uri:'https://i.ytimg.com/vi/dGCSeyKL5dE/maxresdefault.jpg'
            }}
          ></Image>
          <Title>Blackpink with Selena Gomaz</Title>
        </Item>
      </Container>
    );
  }
}
const Container=styled.View`
  flex:1;
  padding:50px 0;
  justify-contants:center;
  background-color:pink;
  align-Items:center;
`
const Title=styled.Text`
  font-Size:20;
  text-align:center;
  
`
const Item=styled.View`
  flex:1;
  border:1px solid ;
  margin:2px 0;
  border-radius:10px;
  box-shadow:0 0 10px;
  height:200px;
  width:80%;
  padding:10px;
`
const Shape=styled.View`
clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
`