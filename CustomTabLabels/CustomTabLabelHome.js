import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CustomTabLabelHome = ({ label, focused }) => {
    const labelColor = focused ? '#779E74' : 'black';
  
    return (
      <View style={styles.tabLabelContainer}>
        <Text style={{ 
            color: labelColor, 
            fontSize: 10,
            marginLeft: 30,
            fontFamily: 'SUIT-Light' }}>{label}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    tabLabelContainer: {
      alignItems: 'center',
    },
  });
  

export default CustomTabLabelHome;