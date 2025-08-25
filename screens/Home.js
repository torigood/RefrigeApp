import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import { recipesAPI } from '../src/api';

const Home = ({ navigation }) => {
  // 모든 useState는 맨 위에 한번에
  const [isButton1Clicked, setIsButton1Clicked] = useState(false);
  const [foodName, setFoodName] = useState('');
  const [popularRecipes, setPopularRecipes] = useState([]);
  const [simpleRecipes, setSimpleRecipes] = useState([]);
  const [weatherRecipes, setWeatherRecipes] = useState([]);
  const [currentWeather, setCurrentWeather] = useState('rainy');
  const [loading, setLoading] = useState(false); // 일단 false로

  // 컴포넌트 마운트 시 데이터 로드
  useEffect(() => {
    loadRecipes();
  }, []);

  const loadRecipes = async () => {
    try {
      setLoading(true);

      // 병렬로 API 호출
      const [popularRes, simpleRes, weatherRes] = await Promise.all([
        recipesAPI.getPopularRecipes(),
        recipesAPI.getSimpleRecipes(),
        recipesAPI.getWeatherRecipes(currentWeather),
      ]);

      setPopularRecipes(popularRes.data);
      setSimpleRecipes(simpleRes.data);
      setWeatherRecipes(weatherRes.data);
    } catch (error) {
      console.error('레시피 로드 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  // 날씨 텍스트 반환
  const getWeatherText = () => {
    switch (currentWeather) {
      case 'rainy':
        return '비오는 날';
      case 'sunny':
        return '화창한 날';
      case 'cloudy':
        return '흐린 날';
      default:
        return '오늘';
    }
  };

  // 레시피 카드 컴포넌트
  const RecipeCard = ({ recipe, style }) => (
    <TouchableOpacity style={[styles.recipeCard, style]}>
      <Image source={{ uri: recipe.imageUrl }} style={styles.recipeImage} />
      <Text style={styles.recipeName}>{recipe.name}</Text>
      <Text style={styles.recipeTime}>{recipe.cookingTime}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center' }]}>
        <Text>로딩 중...</Text>
      </View>
    );
  }

  // Images
  const rainIcon = require('../assets/images/icons/rain.png');
  const womanIconMain = require('../assets/images/icons/여자아이콘.png');
  const SearchIcon = require('../assets/images/icons/검색.png');
  const CartIcon = require('../assets/images/icons/쇼핑.png');
  const KimchiIcon = require('../assets/images/foods/김치아이콘.png');

  const handleBox1Press = () => {
    console.log('홈');
    setIsButton1Clicked(!isButton1Clicked);
    navigation.navigate('Home');
  };

  const handleBox2Press = () => {
    console.log('냉장고 레시피');
    navigation.navigate('RefrigeRecipe');
  };

  const handleSearchIconPress = () => {
    console.log('검색');
    navigation.navigate('SearchScreen');
  };

  const handleCartIconPress = () => {
    console.log('카트');
    navigation.navigate('ShoppingCart');
  };

  return (
    <View style={styles.container}>
      <View style={styles.recipeContainer}>
        <Text style={styles.recipeText}>Recipe</Text>
      </View>
      <View style={styles.searchIconContainer}>
        <TouchableOpacity
          style={styles.searchButton}
          onPress={handleSearchIconPress}
        >
          <Image source={SearchIcon} style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.cartIconContainer}>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={handleCartIconPress}
        >
          <Image source={CartIcon} style={styles.cartIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button1} onPress={handleBox1Press}>
          <Text style={styles.buttonText}>홈</Text>
        </TouchableOpacity>
        <View style={styles.verticalLine} />
        <TouchableOpacity
          style={[
            styles.button2,
            { borderColor: isButton1Clicked ? 'black' : 'grey' },
          ]}
          onPress={handleBox2Press}
        >
          <Text
            style={[
              styles.buttonText,
              { color: isButton1Clicked ? 'black' : 'grey' },
            ]}
          >
            냉장고 레시피
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* 날씨별 추천 */}
        <View style={styles.recomenContainer}>
          <Text style={styles.recommenText}>
            {getWeatherText()},{' '}
            <Image source={rainIcon} style={styles.rainIcon} />
          </Text>
          <Text style={styles.recommenText}>이런 요리는 어떤가요?</Text>
        </View>

        <View style={styles.womenIconContainer}>
          <Image source={womanIconMain} />
        </View>

        {/* 날씨별 추천 레시피 */}
        <FlatList
          horizontal
          data={weatherRecipes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <RecipeCard recipe={item} />}
          style={{ marginTop: 20 }}
          showsHorizontalScrollIndicator={false}
        />

        {/* 오늘의 인기 레시피 */}
        <View style={styles.famousRecipeContainer}>
          <Text style={styles.todaysRecipe}>오늘의 인기 레시피</Text>
          <View style={styles.horizontalLine} />

          <FlatList
            data={popularRecipes}
            keyExtractor={(item) => item.id}
            numColumns={2}
            renderItem={({ item }) => (
              <RecipeCard recipe={item} style={{ margin: 10, width: '45%' }} />
            )}
            style={{ marginTop: 20 }}
          />
        </View>

        {/* 간편식 섹션 */}
        <View style={styles.simpleCookTextCotainer}>
          <Text style={styles.simpleCookText}>요리하기 귀찮을 때,</Text>
          <Text style={styles.simpleCookText}>간편식으로 뚝딱!</Text>
        </View>

        <FlatList
          horizontal
          data={simpleRecipes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <RecipeCard recipe={item} />}
          style={{ marginTop: 20 }}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
};

// 스타일에 추가
const newStyles = {
  recipeCard: {
    width: 120,
    height: 140,
    backgroundColor: 'white',
    borderRadius: 8,
    marginHorizontal: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  recipeImage: {
    width: '100%',
    height: 80,
    borderRadius: 6,
  },
  recipeName: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
  },
  recipeTime: {
    fontSize: 10,
    color: '#666',
    marginTop: 2,
  },
};

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
    fontSize: 21,
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
    borderRadius: 8,
    marginTop: -12,
    flex: 1,
  },
  horizontalLine: {
    borderTopWidth: 2,
    borderColor: 'black',
    marginTop: 50,
  },
  todaysRecipe: {
    fontFamily: 'SUIT-SemiBold',
    fontSize: 12,
    color: '#496646',
    paddingLeft: 10,
    paddingTop: 10,
  },

  ////////////////////////////////////////
  simpleCookTextCotainer: {
    //borderWidth: 2,
    width: 174,
    height: 58,
    marginTop: 80,
  },
  simpleCookText: {
    fontSize: 21,
    fontFamily: 'Happiness-Sans-Bold',
  },
  foodImageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  foodImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover', // Adjust the resizeMode based on your requirements
  },
});

export default Home;
