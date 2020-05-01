import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import image1 from '../../../assets/login.png';
import image2 from '../../../assets/login.png';
import image3 from '../../../assets/login.png';

const slides = [
  {
    key: '1',
    title: 'Hello All',
    text: 'Say something cool',
    image: image1,
    backgroundColor: '#59b2ab',
  },
  {
    key: '2',
    title: ' Be Cool',
    text: 'Other cool stuff',
    image: image2,
    backgroundColor: '#febe29',
  },
  {
    key: '3',
    title: 'Let us Start',
    text: 'We are already cool!',
    image: image3,
    backgroundColor: '#22bcb5',
  }
];

export default class Intro extends Component {
  constructor(props){
    super(props);
    this.state={
      showSlides: true
    }
  }

  renderSlide = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }
  onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showSlides: false });
  }

  

  render() {
    if (!this.state.showSlides) {
      return <View style={styles.container}>
        <Text style= {styles.text}>
          You are Home!!
        </Text>


      </View>;
    } else {
      return <AppIntroSlider
       showSkipButton
       renderItem={this.renderItem} 
       slides={slides} 
       onDone={this.onDone}/>;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16
  }
});
