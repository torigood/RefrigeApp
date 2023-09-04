import * as React from 'react';
import { View, Text } from 'react-native';

const Store = ({ navigation }) => {
    return (
        <View style={{flex: 1,
            backgroundColor: '#F2F2F0',
            alignItems: 'center', }}> 
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold', justifyContent: 'center', marginTop: 50}}
            >Stroe Screen</Text>
        </View>
    );
}
export default Store