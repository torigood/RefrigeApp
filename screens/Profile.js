import * as React from 'react';
import { View, Text } from 'react-native';

const Profile = ({ navigation }) => {
    return (
        <View style={{flex: 1,
            backgroundColor: '#F2F2F0',
            alignItems: 'center', }}> 
            <Text
                style={{ fontSize: 26, fontWeight: 'bold', justifyContent: 'center', marginTop: 50}}
            >Profile Screen</Text>
        </View>
    );
}

export default Profile;