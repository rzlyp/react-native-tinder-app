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
  TextInput,
  TouchableOpacity,
  ScrollView,
  ListView,
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

var convos = [{
  "id": 1,
  "name": "Jessica Veranda",
  "message": "Kapan - kapan ke jepang bareng yuk.",
  "image" : image1
}, {
  "id": 2,
  "name": "Nancy",
  "message": "So, when you will go to south korean? i'll waiting you",
  "image" : image2
}, {
  "id": 3,
  "name": "Wirda Mashur",
  "message": "Kapan atuh ta'arufin aku? ayah udah nunggu nih",
  "image" : image3
}, {
  "id": 4,
  "name": "Lisa Black Pink",
  "message": "If i come to indonesian again, i'll meet you",
  "image" : image4
}, {
  "id": 5,
  "name": "Tzuzu",
  "message": "can't wait to see you soon",
  "image" : image5
}]

var newMatches = [{
  "id": 1,
  "first_name": "Veranda",
  "image" : image1
}, {
  "id": 2,
  "first_name": "Nancy",
  "image" : image2
}, {
  "id": 3,
  "first_name": "Wirda",
  "image" : image3
}, {
  "id": 4,
  "first_name": "Lisa",
  "image" : image4
}, {
  "id": 5,
  "first_name": "Tzuyu-Chan",
  "image" : image5
}];

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Messages extends Component {
  constructor(props){
    super(props)

    this.state = {
      dataSource: ds.cloneWithRows(newMatches),
      convoData: ds.cloneWithRows(convos),
    }

  }
  
  eachPic(x){
    return(
      <TouchableOpacity style={{alignItems:'center'}}>
      <Image source = {{url:x.image}} style={{width:70, height:70, borderRadius:35, margin:10}} />
      <Text style={{fontWeight:'600', color:'#444'}}>{x.first_name}</Text>
      </TouchableOpacity>
      )}

    convoRender(x){
      return(
              <TouchableOpacity style={{alignItems:'center', flexDirection:'row', marginTop:5, marginBottom:5, borderBottomWidth:1, borderColor:'#e3e3e3'}}>
              <Image source = {{url:x.image}} style={{width:70, height:70, borderRadius:35, margin:10}} />
              <View>
              <Text style={{fontWeight:'600', color:'#111'}}>{x.name}</Text>
              <Text 
              numberOfLines ={1}
              style={{fontWeight:'300', color:'#888', width:200}}>{x.message}</Text>
              </View>
              </TouchableOpacity>)}

   
  render() {
    return (
      <View style = {{flex:1}}>
      <Nav type = 'message' onPress = {() => this.props.navigator.replace({id:'home'})} />
      <ScrollView style={styles.container}>
      <TextInput 
      style = {{height:50, }}
      placeholder="Search"
      />
      <View style={styles.matches}>
      <Text style = {{color:'#da533c', fontWeight:'600', fontSize:12}}>New Match</Text>
      <ListView 
      horizontal={true}
      showsHorizontalScrollIndicator = {false}
    dataSource={this.state.dataSource}
    pageSize = {5}
      renderRow={(rowData) =>this.eachPic(rowData)}
      />
      </View>
      <View style = {{margin:10}}>
      <Text style = {{color:'#da533c', fontWeight:'600', fontSize:12}}>MESSAGES</Text>
      <ListView 
      horizontal={false}
      scrollEnabled = {false}
      showsHorizontalScrollIndicator = {false}
    dataSource={this.state.convoData}
    pageSize = {5}
      renderRow={(rowData) =>this.convoRender(rowData)}
      />
      </View>
     
        </ScrollView>
        </View>
    )
}
}
//onPress = {() => this.renderNope()} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10

  },
  matches:{
  borderTopWidth:1,
  paddingTop:15, 
  borderTopColor:'#da533c',
  borderBottomWidth:1,
  paddingBottom:15, 
  borderBottomColor:'#e3e3e3'
  },
  buttons:{
    width:80, 
    height:80, 
    borderWidth:10, 
    borderColor:'#fff', 
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
