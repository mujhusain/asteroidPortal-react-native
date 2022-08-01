import React from 'react';
import {Image,Text, View, StyleSheet} from 'react-native';

function LogoImage() {
  return (
    <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require('../assets/ast3.png')} />
    </View>
  );
}

export default LogoImage;

const styles = StyleSheet.create({
  logoContainer: {
  justifyContent: 'center',
  alignItems: 'center',
  },
  logo: {
  },
});
