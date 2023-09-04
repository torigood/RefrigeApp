import * as React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image} from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import BottomNavBar from './navigation/BottomNavBar';
import Home from './screens/Home';
import RefrigeRecipe from './screens/RefrigeRecipe';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Gloock-Regular': require('./assets/fonts/Gloock-Regular.ttf'),

    'Happiness-Sans-Bold': require('./assets/fonts/Happiness-Sans-Bold.ttf'),
    'Happiness-Sans-Regular': require('./assets/fonts/Happiness-Sans-Regular.ttf'),
    'Happiness-Sans-Title': require('./assets/fonts/Happiness-Sans-Title.ttf'),

    'SUIT-Bold': require('./assets/fonts/SUIT-Bold.ttf'),
    'SUIT-ExtraBold': require('./assets/fonts/SUIT-ExtraBold.ttf'),
    'SUIT-ExtraLight': require('./assets/fonts/SUIT-ExtraLight.ttf'),
    'SUIT-Heavy': require('./assets/fonts/SUIT-Heavy.ttf'),
    'SUIT-Light': require('./assets/fonts/SUIT-Light.ttf'),
    'SUIT-Medium': require('./assets/fonts/SUIT-Medium.ttf'),
    'SUIT-Regular': require('./assets/fonts/SUIT-Regular.ttf'),
    'SUIT-SemiBold': require('./assets/fonts/SUIT-SemiBold.ttf'),
    'SUIT-Thin': require('./assets/fonts/SUIT-Thin.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

    return (
      <BottomNavBar/>
    )
}
