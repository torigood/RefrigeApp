import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import RefrigeRecipe from '../screens/RefrigeRecipe';
import ShoppingCart from '../screens/ShoppingCart';
import SearchScreen from '../screens/SearchScreen';

const Stack = createNativeStackNavigator();

const StackNav = () => {
    return (
      <Stack.Navigator 
      screenOptions={{headerShown: false,}}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="RefrigeRecipe"component={RefrigeRecipe}/>
        <Stack.Screen name="ShoppingCart"component={ShoppingCart}/>
        <Stack.Screen name="SearchScreen"component={SearchScreen}/>
      </Stack.Navigator>
    )
}

export {StackNav};