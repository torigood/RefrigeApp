import * as React from 'react';
import { View, Text } from 'react-native';

const News = ({ navigation }) => {
    return (
        <View style={{flex: 1,
            backgroundColor: '#F2F2F0',
            alignItems: 'center', }}> 
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 50, fontWeight: 'bold', justifyContent: 'center', marginTop: 50}}
            >News Screen</Text>
        </View>
    );
}

export default News