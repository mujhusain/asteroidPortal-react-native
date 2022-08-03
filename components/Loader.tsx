import React from 'react';
import {View, ActivityIndicator,Text,StyleSheet} from 'react-native';
import {Colors} from '../constants/Colors';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.gold} />
      <Text style={styles.text} >Loading...</Text>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  text: {
    fontSize: 16,
    color: Colors.gold,
    textAlign:'center',
    margin: 10
  },
});
