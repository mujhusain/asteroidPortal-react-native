import React, {useLayoutEffect} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import AsteroidImage from '../components/AsteroidImage';
import { Colors } from '../constants/Colors';

function AsteroidDetails({route, navigation}) {
  const data = route.params.details;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Asteroid Id: ${data.id}`,
      headerRight: () => <Button title="Home" color="tomato" onPress={() => navigation.navigate("Home")}/>,
    });
  }, [navigation]);
  return (
    <>
    <AsteroidImage />
    <View style={styles.detailsContainer}>
      <Text style={styles.text} >Name: {data?.name} </Text>
      <Text style={styles.text} >Name Limited: {data?.name_limited}</Text>
      <Text style={styles.text} >Designation: {data?.designation}</Text>
      <Text style={styles.text} >NASA Jpl Url: {data?.nasa_jpl_url}</Text>
      <Text style={styles.text} >Absolute magnitude h: {data?.absolute_magnitude_h}</Text>
    </View>
    </>
  );
}

export default AsteroidDetails;

const styles = StyleSheet.create({
  detailsContainer:{
    padding: 18,
    margin: 10,
    alignItems:'center',
    borderRadius:8
  },
  text:{
    color: Colors.gray700,
    fontSize:22,
    marginVertical:4,
    borderWidth:1,
    backgroundColor: Colors.gold,
    paddingHorizontal: 8,
    paddingVertical:4,
    width:350,
    borderRadius:20,
    textAlign:'center'
  }
})