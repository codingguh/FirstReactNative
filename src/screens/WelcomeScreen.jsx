import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { height } = Dimensions.get('window');

const WelcomeScreen = () => {
  return (
    <LinearGradient
      colors={['#0084F9', '#074BA4']}
      start={{ x: 0, y: 0 }} // Start from top left
      end={{ x: 1, y: 1 }} // End at bottom right
      style={styles.container}
    >
      <View style={styles.contentContainer}>
        {/* Welcome text and other components */}
        {/* <Text style={styles.welcomeText}>Welcome Screen</Text> */}
        <View style={styles.topContainer}>
        <Image source={require('../../assets/login_image.png')}/>
        </View>
        
        <View style={styles.bottomContainer}>
          {/* Bottom content */}
          <View style={styles.bottomInnerContainer}>
            <Text style={styles.title}>Halo, selamat datang</Text>
            <Text style={styles.content}>
            Masuk untuk nikmati fitur MyAccess atau daftar sebagai
            pengguna dengan beberapa langkah mudah.
            </Text>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Masuk</Text>
            </TouchableOpacity>

            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
              <Text style={styles.dividerText}>Atau</Text>
              <View style={styles.divider} />
            </View>

            <TouchableOpacity style={styles.buttonOutline}>
              <Text style={styles.buttonTextOutline}>Daftar</Text>
            </TouchableOpacity>

            <View style={styles.guestContainer}>
              <Text style={styles.guestText}>Anda juga bisa masuk sebagai tamu. </Text>
              <TouchableOpacity style={styles.guestButton}>
                <Image source={require('../../assets/my_answer.png')} style={styles.guestButtonImage} />
                <Text style={styles.guestButtonText}>Masuk sebagai tamu</Text>
                <Image source={require('../../assets/arrow-left.png')} style={styles.guestButtonArrow} />
              </TouchableOpacity>
            </View>

          </View>
        </View>
        <View style={styles.poweredByContainer}>
              <Text style={styles.poweredByText}>didukung oleh</Text>
              <Image source={require('../../assets/logo.png')} style={styles.poweredByImage} />
            </View>
        {/* <View style={styles.footerContainer}>
          <Text>didukung oleh</Text>
          <Image source={require('../../assets/logo.png')} />
        </View> */}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    // justifyContent: 'space-between', /// Space out content vertically
    // padding: 20, // Added padding for the content
  },
  welcomeText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40, // Add margin to top
  },
  topContainer:{
    position:'absolute',
    height: height * 0.35,
    bottom:height-height * 0.65+120,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  bottomContainer: {
    position: 'absolute',
    height: height * 0.65,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingTop: 24,
    paddingLeft: 12,
    paddingRight: 12,
  },
  bottomInnerContainer: {
    // alignItems: 'center',
    paddingBottom: 24,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#0067C6',
    borderWidth: 1, // Changed from '2px' to 2
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonTextOutline:{
    color:'#0067C6',
    fontSize: 16,
    textAlign: 'center',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 23,
  },
  divider: {
    flex: 1,
    height: 2,
    backgroundColor: '#e0e0e0',
  },
  dividerText: {
    color: '#a1a1a1',
    marginHorizontal:25
  },
  footerContainer: {
    position: 'absolute',
    bottom: 12,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  guestContainer: {
    marginTop: 66,
  },
  guestText: {
    marginBottom: 8,
  },
  guestButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#008FE2',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
    width:'100%',
    justifyContent: 'center',
    height:65,
    alignItems: 'center',
  },
  guestButtonImage: {
    width: 65,
    height: 65,
    marginRight: 24,
    // position:'absolute',
    marginLeft:-12
  },
  guestButtonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  guestButtonArrow: {
    marginLeft: 8,
  },
  poweredByContainer: {
    flexDirection: 'row',
    position:'absolute',
    bottom:24,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto', // Push to the bottom
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  poweredByText: {
    fontWeight: 'bold',
  },
  poweredByImage: {
    marginLeft: 8,
  },
  title:{
    fontSize:22,
    fontWeight:'bold',
    marginBottom:20
  },
  content:{
    fontWeight:200,
    color:'gray',
    marginBottom:20
  }

});

export default WelcomeScreen;
