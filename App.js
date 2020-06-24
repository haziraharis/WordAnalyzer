import React, {Component} from 'react';
import {Text, View, Button, TextInput, Alert} from 'react-native';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      words: ' ' ,
      consonants: 0,
      vowels: 0,
      numChars: 0
    }
  }

  wordAnalyzer = () => {
    let vowel = 0;
    let cons = 0;
    let noChar = 0;

    for (let i = 0; i < this.state.words.length; i++){
      let str = this.state.words[i];

      if(str != ' '){
        if(str=='a' || str=='e' || str=='i' || str=='o' || str=='u'){
          vowel++;
          this.setState({vowels: vowel});
        }
        else{
          cons++;
          this.setState({consonants: cons});
        }
        noChar++;
        this.setState({numChars: noChar});
      }
        
    }
    return;
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.container}>
        <Text style={Styles.welcome}>A Word Analyzer</Text>
        </View>
        <View style={Styles.container}>
        <Text style={Styles.desc}>Hello Geeks! <p>A Word Analyzer that will analyze any word and determine number of
consonants and vowels.</p> </Text>
        <TextInput onChangeText={(words) => this.setState({words})} style={Styles.inputBox} placeholder='Type Here'/>
        <Text></Text>
        <Text></Text>
        </View>
        <View style={Styles.container}>
        <Button color="#3d5464" onPress={this.wordAnalyzer} title='Analyze'/>
        <Text></Text>
        <Text style={Styles.results}>Words: {this.state.words}</Text>
        <Text style={Styles.results}>Consonants: {this.state.consonants}</Text>
        <Text style={Styles.results}>Vowels: {this.state.vowels}</Text>
        <Text style={Styles.results}>Characters: {this.state.numChars}</Text>
        </View>
      </View>
    );
  }
}

import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#c3deea',
    },
    welcome: {
      fontSize: 50,
      textAlign: 'center',
      margin: 10,
    },
    results: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 10,
    },
    desc: {
      textAlign: 'center'
    },
    inputBox: {
    margin: 10,
    paddingHorizontal: 60,
    paddingVertical: 15,
    justifyContent: 'center',
    backgroundColor:'#fcfbfb',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'black'
    }
});