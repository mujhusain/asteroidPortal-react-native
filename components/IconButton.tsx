import React from 'react'
import { Text, View,StyleSheet } from 'react-native'

type dataType={
  title:string,
  icon:string,
}

function IconButton({title,icon}:dataType) {
  return (
    <View style={styles.iconButton} >
        <Text>{title}</Text>
    </View>
  )
}

export default IconButton;

const styles = StyleSheet.create({
    iconButton: {
        flex:1,
        flexDirection:'row',
        borderWidth:1,
    }
})