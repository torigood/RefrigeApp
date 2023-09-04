import { React, useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, ScrollView} from 'react-native';

const Home = ({navigation}) => {
  // Images
  const rainIcon = require('../assets/images/icons/rain.png')
  const womanIconMain = require('../assets/images/icons/여자아이콘.png')
  const SearchIcon = require('../assets/images/icons/검색.png')
  const CartIcon = require('../assets/images/icons/쇼핑.png')

  const [isButton1Clicked, setIsButton1Clicked] = useState(false);

  const handleBox1Press = () => {
    console.log('홈');
    setIsButton1Clicked(!isButton1Clicked);
    navigation.navigate('Home')
  };

  const handleBox2Press = () => {
    console.log('냉장고 레시피');
    navigation.navigate('RefrigeRecipe')
  };

  const handleSearchIconPress = () => {
    console.log('검색');
    navigation.navigate('SearchScreen')
  }

  const handleCartIconPress = () => {
    console.log('카트');
    navigation.navigate('ShoppingCart');
  }

  return (
    <View style={styles.container}>
      <View style={styles.recipeContainer}>
        <Text style={styles.recipeText}>
          Recipe
        </Text>
      </View>

      <View style={styles.searchIconContainer}>
        <TouchableOpacity 
        style={styles.searchButton} 
        onPress={handleSearchIconPress}>
          <Image source={SearchIcon} style={styles.serachIcon}/>
        </TouchableOpacity>
      </View>

      <View style={styles.cartIconContainer}>
        <TouchableOpacity 
        style={styles.cartButton} 
        onPress={handleCartIconPress}>
          <Image source={CartIcon} style={styles.cartIcon}/>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button1}
          onPress={handleBox1Press}>
          <Text style={styles.buttonText}>홈</Text>
        </TouchableOpacity>

      
        <View style={styles.verticalLine}/>

        <TouchableOpacity
          style={[styles.button2, { borderColor: isButton1Clicked ? 'black' : 'grey' }]}
          onPress={handleBox2Press}>
          <Text style={[styles.buttonText, { color: isButton1Clicked ? 'black' : 'grey' }]}>냉장고 레시피</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.recomenContainer}>
        <Text style={styles.recommenText}> 
        비오는 날,  <Image source={rainIcon} style={styles.rainIcon}/>
        </Text>
        <Text style={styles.recommenText}>이런 요리는 어떤가요?</Text>
      </View>

      <View style={styles.womenIconContainer}>
        <Image source = {womanIconMain}/>
      </View>

      <View style={styles.famousRecipeContainer}>
        <View style={styles.horizontalLine}/>
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
////////////////////////////////////////////
  recipeContainer: {
    marginTop: 54,
    width: 380,
    borderWidth: 0,
    alignItems: 'center',
  },
  recipeText: {
    fontSize: 36,
    fontFamily: 'Gloock-Regular',
    fontWeight: 'normal',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  searchIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchButton: {
    borderWidth: 0,
    borderColor: 'black',
    width: 30,
    height: 30,
    marginLeft: 250,
    marginTop: -35,
  },
  cartIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartButton: {
    borderWidth: 0,
    borderColor: 'black',
    width: 30,
    height: 30,
    marginLeft: 330,
    marginTop: -35,
  },
/////////////////////////////////////////
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
//////////////////////////////////////////////////
  recomenContainer: {
    width: 197,
    height: 58,
    borderWidth: 0,
    marginRight: 160,
    marginLeft: 16,
    marginTop: 30,
  },
  recommenText: {
    fontFamily: 'Happiness-Sans-Bold',
    marginTop: 2,
    fontSize: 20,
  },
  rainIcon: {
    marginTop: 2,
  },
  womenIconContainer: {
    width: 100,
    height: 100,
    borderWidth: 0,
    marginLeft: 220,
    marginTop: -70,
  },

////////////////////////////////////
  famousRecipeContainer: {
    width: 358,
    height: 206,
    borderWidth: 2,
    borderRadius: 30,
    marginTop: -12,
  },
  horizontalLine: {
    borderTopWidth: 2,
    borderColor: 'black',
    marginTop: 60,
  },
});

export default Home;