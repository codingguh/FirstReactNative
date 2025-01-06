import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({navigation}) => {
  const [show, setShow] = useState(true);
  const fadeAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: true,
    }).start(() => {
      setShow(false);
      navigation.replace('Home'); // Replace with your main screen name
    });
  }, []);

  return (
    <LinearGradient
      colors={['#0084F9', '#074BA4']}
      style={styles.linearGradient}>
      {show && (
        <Animated.View style={[styles.splash, {opacity: fadeAnim}]}>
          <View style={styles.leftSide}>
            <Image source={require('../../assets/leftside_splashscreen.png')} />
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/myaccess.png')} // Replace with your logo path
              style={styles.logo}
            />
          </View>
        </Animated.View>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  splash: {
    borderRadius: 10,
    padding: 20,
    position: 'relative',
    // alignItems: 'center', // Remove this as it's handled by linearGradient
    // justifyContent: 'center', // Remove this as it's handled by linearGradient
  },
  leftSide: {
    flex:1,
    position: 'absolute',
    left: 0,
    top:0,
    height:'100%',
    width:200,
    marginTop:-420,
    marginLeft:-80
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    // ... your logo styles ...
  },
});

export default SplashScreen;
