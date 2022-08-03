import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {getDetails, getList} from '../api/api';
import Loader from '../components/Loader';
import LogoImage from '../components/LogoImage';
import {Colors} from '../constants/Colors';


function HomeScreen({navigation}: any) {
  const isFocused = useIsFocused();

  const [asteroidId, setAsteroidId] = useState('');
  const [loading, setLoading] = useState(false);

  function handleInputChange(text: string) {
    setAsteroidId(text.trim());
  }

  useEffect(() => {
    setAsteroidId('');
    setLoading(false);
  }, [navigation, isFocused]);

  function handleSearch() {
    setLoading(true);

    if (asteroidId.length == 0) {
      Alert.alert(
        'Please Enter Asteroid Id',
        'Asteroid id length should be number type',
      );
      return null;
    }
    getAsteroidData(asteroidId);
  }

  async function getAsteroidData(asteroidId: string) {
    try {
      const {data} = await getDetails(asteroidId);
      navigation.navigate('Asteroid Details', {details: data});
    } catch (error) {
      console.log(error);
      Alert.alert('Asteroid id not Found', 'Please enter valid Asteroid Id');
      setLoading(false);
    }
  }

  function handleRandom() {
    setLoading(true);

    async function getAsteroidList() {
      try {
        let temp;
        const {data} = await getList();
        let arr = data?.near_earth_objects?.map((item: {id: number}) => item.id);
        temp = arr[Math.floor(Math.random() * arr?.length)];

        getAsteroidData(temp);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }
    getAsteroidList();
  }

  function handleReset() {
    setAsteroidId('');
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <View style={styles.homeScreen}>
      {/* <LogoImage /> */}
      <Text style={styles.title}>ASTEROID PORTAL</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Asteroid Id"
          value={asteroidId}
          keyboardType="numeric"
          onChangeText={handleInputChange}
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <Button onPress={handleSearch} title="Search" />
          <Button title="Reset" onPress={handleReset} color="gray" />
          <Button
            title="Random"
            color={Colors.primary800}
            onPress={handleRandom}
          />
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.primary100,
  },
  inputContainer: {
    marginTop: 20,
    borderColor: Colors.primary100,
    padding: 8,
    width: '80%',
    borderRadius: 4,
  },
  input: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 20,
    backgroundColor: Colors.primary50,
    textAlign: 'center',
    color: Colors.gray700,
  },
  buttonContainer: {
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    fontSize: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
});
