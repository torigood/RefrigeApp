import { Text, View, Image, StyleSheet } from 'react-native';
import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

//Screens
import Home from '../screens/Home';
import Store from '../screens/Store';
import News from '../screens/News';
import Refrige from '../screens/Refrige';
import Profile from '../screens/Profile';
import { StackNav } from './StackNav';
import CustomTabLabelHome from '../CustomTabLabels/CustomTabLabelHome';
import CustomTabLabelStore from '../CustomTabLabels/CustomTabLabelStore';
import CustomTabLabelRefrige from '../CustomTabLabels/CustomTabLabelRefrige';
import CustomTabLabelNews from '../CustomTabLabels/CustomTabLabelNews';
import CustomTabLabelProfile from '../CustomTabLabels/CustomTabLabelProfile';

// Screen Names
const homeName = '레시피';
const storeName = '스토어';
const RefrigeName = '냉장고';
const newsName = '동네소식';
const profileName = '내 정보';

const Tab = createBottomTabNavigator();

const BottomNavBar = () => {
  const recipeIcon = require('../assets/images/icons/레시피아이콘.png');
  const storeIcon = require('../assets/images/icons/스토어아이콘.png');
  const refrigeIcon = require('../assets/images/icons/냉장고아이콘.png');
  const newsIcon = require('../assets/images/icons/동네소식아이콘.png');
  const pofileIcon = require('../assets/images/icons/내정보아이콘.png');

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              //marginBottom: 300,
              backgroundColor: '#F2F2F0', // Set the background color to beige
              borderTopLeftRadius: 50, // Set the border radius for the top left corner
              borderTopRightRadius: 50, // Set the border radius for the top right corner
              borderWidth: 1, // Add a top border
              borderTopWidth: 2, // Add a top border
              height: 100,
              width: 435,
              borderTopColor: 'black',
              alignSelf: 'center',
            },
          }}
        >
          <Tab.Screen
            name={homeName}
            component={StackNav}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => {
                return (
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: focused ? 'black' : '#F2F2F0',
                      borderRadius: 50,
                      padding: 5,
                      marginLeft: 30,
                      backgroundColor: focused ? '#779E74' : '#F2F2F0',
                    }}
                  >
                    <Image
                      source={recipeIcon}
                      style={[
                        styles.iconStyle,
                        { tintColor: focused ? 'white' : 'black' },
                      ]}
                    />
                  </View>
                );
              },
              tabBarLabel: ({ focused }) => (
                <CustomTabLabelHome label={homeName} focused={focused} />
              ),
            }}
          />
          <Tab.Screen
            name={storeName}
            component={Store}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => {
                return (
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: focused ? 'black' : '#F2F2F0',
                      borderRadius: 50,
                      padding: 5,
                      marginLeft: 10,
                      backgroundColor: focused ? '#779E74' : '#F2F2F0',
                    }}
                  >
                    <Image
                      source={storeIcon}
                      style={[
                        styles.iconStyle,
                        { tintColor: focused ? 'white' : 'black' },
                      ]}
                    />
                  </View>
                );
              },
              tabBarLabel: ({ focused }) => (
                <CustomTabLabelStore label={storeName} focused={focused} />
              ),
            }}
          />
          <Tab.Screen
            name={RefrigeName}
            component={Refrige}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => {
                return (
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: focused ? 'black' : '#F2F2F0',
                      borderRadius: 50,
                      padding: 5,
                      backgroundColor: focused ? '#779E74' : '#F2F2F0',
                    }}
                  >
                    <Image
                      source={refrigeIcon}
                      style={[
                        styles.iconStyle,
                        { tintColor: focused ? 'white' : 'black' },
                      ]}
                    />
                  </View>
                );
              },
              tabBarLabel: ({ focused }) => (
                <CustomTabLabelRefrige label={storeName} focused={focused} />
              ),
            }}
          />
          <Tab.Screen
            name={newsName}
            component={News}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => {
                return (
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: focused ? 'black' : '#F2F2F0',
                      borderRadius: 50,
                      padding: 5,
                      marginRight: 10,
                      backgroundColor: focused ? '#779E74' : '#F2F2F0',
                    }}
                  >
                    <Image
                      source={newsIcon}
                      style={[
                        styles.iconStyle,
                        { tintColor: focused ? 'white' : 'black' },
                      ]}
                    />
                  </View>
                );
              },
              tabBarLabel: ({ focused }) => (
                <CustomTabLabelNews label={newsName} focused={focused} />
              ),
            }}
          />
          <Tab.Screen
            name={profileName}
            component={Profile}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => {
                return (
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: focused ? 'black' : '#F2F2F0',
                      borderRadius: 50,
                      padding: 5,
                      marginRight: 30,
                      backgroundColor: focused ? '#779E74' : '#F2F2F0',
                    }}
                  >
                    <Image
                      source={pofileIcon}
                      style={[
                        styles.iconStyle,
                        { tintColor: focused ? 'white' : 'black' },
                      ]}
                    />
                  </View>
                );
              },
              tabBarLabel: ({ focused }) => (
                <CustomTabLabelProfile label={profileName} focused={focused} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F0',
    alignItems: 'center',
  },
  tabLabelContainer: {
    alignItems: 'center',
  },
});

export default BottomNavBar;
