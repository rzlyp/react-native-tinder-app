/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Nav from './global-widgets/nav'
import SwipeCards from 'react-native-swipe-cards';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconz from 'react-native-vector-icons/Ionicons';


var image1 = "http://cdn2.tstatic.net/suryamalang/foto/bank/images/jessica-veranda_20170425_154455.jpg"
var image2 = "https://steemitimages.com/0x0/https://cdn.steemitimages.com/DQmTGhVmkZgdEiRNz1CfL2y7ZS26ZTzN111y75XCwacg5dw/nancy.jpg"
var image3 = "https://cf.dvh.bz/library/1/5/7/5/1/15751_840x576.jpg"
var image4 = "https://www.wowkeren.com/display/images/photo/2018/09/12/00223802.jpg"
var image5 = "https://channel-korea.com/wp-content/uploads/2017/05/tzuyu-dispatch-2-1.jpg"

const Cards = [{
  "id": 1,
  "first_name": "Jessica Veranda",
  "age": 21,
  "friends": 9,
  "interests": 38,
  "image": image1
}, {
  "id": 2,
  "first_name": "Nancy",
  "age": 27,
  "friends": 16,
  "interests": 49,
  "image": image2
}, {
  "id": 3,
  "first_name": "Wirda Manshur",
  "age": 29,
  "friends": 2,
  "interests": 39,
  "image": image3
}, {
  "id": 4,
  "first_name": "Lisa Black Black",
  "age": 20,
  "friends": 18,
  "interests": 50,
  "image": image4
}, {
  "id": 5,
  "first_name": "Tzuyu Chaan",
  "age": 28,
  "friends": 2,
  "interests": 13,
  "image": image5
}]

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      cards: Cards
    }
  }
  Card(x){
    return (
      <View style={styles.card}>
        <Image source ={{url : x.image}} resizeMode="contain" style ={{width:350, height:350}} />
        <View style={{width:350, height:70, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <View style={{flexDirection:'row', margin:15, marginTop:25,}} >
        <Text style={{fontSize:20, fontWeight:'300', color:'#444'}}>{x.first_name}, </Text>
        <Text style={{fontSize:21, fontWeight:'200', color:'#444'}}>{x.age}</Text>
        </View>
        <View style={{flexDirection:'row'}} style={{marginRight : 10}}>
        <View style={{padding:0,  borderLeftWidth:1,borderColor:'#e3e3e3'}}><Icon name='people-outline' size={20} color="#777" style={{}} /><Text style={{fontSize:12, fontWeight:'200', color:'#555'}}>{x.friends}</Text></View>
        </View>
        </View>
      </View>
    )
  }
    handleYup (card) {
    console.log(`Yup for ${card.text}`)
  }

  handleNope (card) {
    console.log(`Nope for ${card.text}`)
  }
  noMore(){
    return (
      <View style={styles.card} >
        <Text>No More Cards</Text>
      </View>
    )
  }

  yup(){
    console.log(this.refs['swiper'])
this.refs['swiper']._goToNextCard()  }

nope(){
    console.log(this.refs['swiper'])
this.refs['swiper']._goToNextCard()  }

  render() {
    return (
      <View style={styles.container}>
           <Nav chat = {() => this.props.navigator.replace({id: "messages"})} toProfile = {() => this.props.navigator.replace({id:'profile'})} />
      <SwipeCards
        ref = {'swiper'}
        cards={this.state.cards}
        containerStyle = {{  backgroundColor: '#f7f7f7', alignItems:'center', margin:20}}
        renderCard={(cardData) => this.Card(cardData)}
        renderNoMoreCards={() => this.noMore()}
        handleYup={this.handleYup}
        handleNope={this.handleNope} />
        </View>
    )
}
}
//onPress = {() => this.renderNope()} 

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#f7f7f7',
  },
  buttons:{
    width:80, 
    height:80, 
    borderWidth:10, 
    borderColor:'#e7e7e7', 
    justifyContent:'center', 
    alignItems:'center',
    borderRadius:40
  },
  buttonSmall:{
    width:50, 
    height:50, 
    borderWidth:10, 
    borderColor:'#e7e7e7', 
    justifyContent:'center', 
    alignItems:'center',
    borderRadius:25
  },
   card: {
    flex: 1,
    alignItems: 'center',
    alignSelf:'center',
    borderWidth:2,
    borderColor:'#e3e3e3',
    width: 350,
    height: 420,
  }
 
});
