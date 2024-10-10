import React from 'react';
import {Text, View, Image, SafeAreaView} from 'react-native';

const name = "Williams Adusei";
const school = "Kwame Nkrumah University of Science and Technology(KNUST)";
const skills = "I'm a tech enthusiast with a fair knowledge of C++,C#,Python and Mobile App development";

const Portfolio = () => {
  return (
    <SafeAreaView
    style ={{flex:1}}>
      <View>
        <Image
          source={
          require('../Work-App/assets/blur.png')
          }
          style={{width: 200, height: 200}}
        />
        <Text
        style={{fontStyle:'italic', fontColor:'red'}}>Name:{name}</Text>
        <Text
        style={{fontStyle:'italic', fontColor:'red'}}>School:{school}</Text>
        <Text
        style={{fontStyle:'italic', fontColor:'red'}}>skills and Interests:{skills}</Text>
        </View>
    </SafeAreaView>
  );
};

export default Portfolio;
