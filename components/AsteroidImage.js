import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

function AsteroidImage() {
  return (
    <View style={styles.logoContainer}>
    <Image style={styles.logo} source={require('../assets/ast.png')} />
  </View>
  )
}

export default AsteroidImage;

const styles = StyleSheet.create({
    logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    },
    logo: {
    },
  });
  