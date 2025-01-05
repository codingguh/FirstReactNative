import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

 function Basic() {
    const [count,setCount]= useState(0)
  return (
    <View>
      <View style={styles.boxContainer}>
        <View style={styles.redBox} />
        <View style={styles.blueBox} />
        <View style={styles.greenBox} />
      </View>
      <Image
        style={styles.image}
        source={{uri: 'https://picsum.photos/200/300'}}
      />
      <Image style={styles.image} source={require('../../assets/cob.png')} />
      <Button
        color={'red'}
        title="Click Me"
        onPress={() => setCount(count + 1)}
      />
      <Text>Count is {count}</Text>
    </View>
  );
}
export default Basic;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  redBox:{
    width:50,
    height:50,
    backgroundColor:'red'
  },
  blueBox:{
    width:50,
    height:50,
    backgroundColor:'blue'
  },
  greenBox:{
    width:50,
    height:50,
    backgroundColor:'green'
  },
  image:{
    width:150,
    height:150,
    resizeMode:'contain',
    marginBottom:10,
    marginTop:10
  }
});