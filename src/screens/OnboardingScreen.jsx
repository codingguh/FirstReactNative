import React, { useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

const OnboardingData = [
  {
    id: 1,
    image: require('../../assets/onboarding1.png'),
    title: 'Mudah dan Informatif',
    description:
      'BRI Life MyAccess bantu Anda dapatkan Informasi Polis, Manfaat Asuransi, NAB dan Produk Terkini.',
  },
  {
    id: 2,
    image: require('../../assets/onboarding2.png'),
    title: 'Atur dengan Mudah',
    description: 'Kemudahan membuat pengingat Jatuh Tempo polis Anda.',
  },
  {
    id: 3,
    image: require('../../assets/onboarding1.png'),
    title: 'Artikel Pilihan',
    description:
      'Nikmati artikel terbaru tentang asuransi, keuangan, dan kesehatan yang relevan untuk kebutuhan Anda.',
  },
];

const OnboardingScreen = ({ navigation }) => {
  const swiperRef = useRef(null);

  return (
    <Swiper
      ref={swiperRef}
      loop={false}
      showsPagination={true}
      dotStyle={styles.dotStyle}
      activeDotStyle={styles.activeDotStyle}
      paginationStyle={styles.paginationStyle} // Custom position for dots
    >
      {OnboardingData.map((slide, index) => (
        <View key={slide.id} style={styles.slide}>
          <Image source={slide.image} style={styles.image} />
          <View style={styles.onboardingBottom}>
            <Text style={styles.title}>
            {slide.title.split(' ').map((word, i) =>
              i === 1 ? <Text key={i} style={styles.highlight}>{word} </Text> : `${word} `
            )}
          </Text>
          <Text style={styles.description}>{slide.description}</Text>
          <TouchableOpacity
            style={styles.buttonWrapper}
            onPress={() => {
              if (index === OnboardingData.length - 1) {
                navigation.replace('Basic');
              } else {
                swiperRef.current.scrollBy(1);
              }
            }}
          >
            <LinearGradient
              colors={['#0067C6', '#0085FF']}
              style={styles.button}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.buttonText}>
                {index === OnboardingData.length - 1 ? 'Yuk, Mulai' : 'Lanjut'}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          </View>
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0E7AFE',
    paddingHorizontal: 20,
  },
  image: {
    width: width * 0.8,
    height: width * 0.8,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    // color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  onboardingBottom:{
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    height: '40%',
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius:20,
    borderTopRightRadius:20
  },
  highlight: {
    color: '#FFCE00',
  },
  description: {
    fontSize: 16,
    // color: '#FFFFFF',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 30,
  },
  buttonWrapper: {
    width: '80%',
    marginBottom: 50,
    marginTop:50
  },
  button: {
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  dotStyle: {
    backgroundColor: '#CCCCCC',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    marginTop:-150,
  },
  activeDotStyle: {
    backgroundColor: '#0067C6',
    width: 24,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    marginTop:-150,
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 100, // Adjust the value to place dots above the button
  },
});

export default OnboardingScreen;
