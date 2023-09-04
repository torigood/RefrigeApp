import { React, useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, ScrollView} from 'react-native';

const SearchScreen = ({navigation}) => {
  return (
    <View style={{flex: 1,
        backgroundColor: '#F2F2F0',
        alignItems: 'center', }}> 
        <Text
            onPress={() => navigation.navigate('Home')}
            style={{ fontSize: 50, fontWeight: 'bold', justifyContent: 'center', marginTop: 50}}
        >Search Screen</Text>
    </View>
  )
}

export default SearchScreen