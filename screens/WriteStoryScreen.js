import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';

export default class WriteStory extends React.Component {
  constructor(){
    super()
    this.state = {
      title:'',
      author:'',
      story:'',

      
    }
  }
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TextInput  onChangeText = {(text)=>{
          this.setState({
            title:text,
            
            })
        }} value = {this.state.title}/> 
        <TextInput  onChangeText = {(text)=>{
          this.setState({
            author:text,
            
            })
        }} value = {this.state.author}/> 
        <TextInput  props multiline= {true} onChangeText = {(text)=>{
          this.setState({
            story:text,
            
            })
        }} value = {this.state.story}/> 

        <TouchableOpacity><Text>Submit</Text></TouchableOpacity>
        </View>
      );
    }
  }