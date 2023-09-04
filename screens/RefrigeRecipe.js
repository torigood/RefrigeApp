import { React, useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, ScrollView} from 'react-native';

const RefrigeRecipe = ({navigation}) => {
  const rainIcon = require('../assets/images/icons/rain.png')

  const [isButton2Clicked, setIsButton2Clicked] = useState(false);

  const handleBox1Press = () => {
    console.log('홈');
    navigation.navigate('Home')
  };

  const handleBox2Press = () => {
    console.log('냉장고 레시피');
    setIsButton2Clicked(!isButton2Clicked);
    navigation.navigate('RefrigeRecipe')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading_recipe}>
        Recipe
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button1, { borderColor: isButton2Clicked ? 'black' : 'grey' }]}
          onPress={handleBox1Press}>
          <Text style={[styles.buttonText, { color: isButton2Clicked ? 'black' : 'grey' }]}>홈</Text>
        </TouchableOpacity>

        <View style={styles.verticalLine}/>

        <TouchableOpacity
          style={styles.button2}
          onPress={handleBox2Press}>
          <Text style={styles.buttonText}>냉장고 레시피</Text>
        </TouchableOpacity>
      </View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F0',
    alignItems: 'center', 
  },
  heading_recipe: {
    marginTop: 54,
    fontSize: 36,
    fontWeight: 'normal',
    alignItems: 'center',
    fontFamily: 'Gloock-Regular',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  button1: {
    borderWidth: 2,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: 'black',
    width: 178,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
    borderWidth: 2,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: 'black',
    width: 179,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
  },
  verticalLine: {
    height: 21,
    borderLeftWidth: 2,
    borderColor: 'black',
    marginTop: 10,
  },

});

export default RefrigeRecipe;