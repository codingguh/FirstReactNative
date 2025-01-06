import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  top: {
    position: 'absolute',
    flexDirection: 'row',
    top: 40,
    left: 20,
    right: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  right: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '10',
  },
  skip: {
    color: 'white',
    fontWeight: 'bold',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: 20,
  },
  image: {
    width: width * 0.8,
    height: width * 0.8,
    resizeMode: 'contain',
    marginBottom: 33,
  },
  imageBottom: {
    width: width*0.9 ,
    height: 200,
    position: 'relative',
    bottom: 210,
    // marginBottom: 200,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  onboardingBottom: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    height: '40%',
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  highlight: {
    color: '#FFCE00',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 30,
    color: 'black',
  },
  buttonWrapper: {
    width: '90%',
    marginBottom: 50,
    marginTop: 50,
  },
  button: {
    height: 50,
    borderRadius: 12,
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
    marginTop: -150,
  },
  activeDotStyle: {
    backgroundColor: '#0067C6',
    width: 24,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    marginTop: -150,
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 100,
  },
});

const OnboardingData = [
  {
    id: 1,
    image: require('../../assets/onboarding1_human.png'),
    imageBottom: require('../../assets/onboarding_bottom_1.png'),
    title: (
      <Text style={styles.title}>
        Mudah dan <Text style={{color: '#4C90FF'}}>Infor</Text>
        <Text style={{color: '#EE723C'}}>matif</Text>
      </Text>
    ),
    description:
      'BRI Life MyAccess bantu Anda dapatkan Informasi Polis, Manfaat Asuransi, NAB dan Produk Terkini.',
    gradient: ['#0084F9', '#074BA4'], // Gradient for the first slide
  },
  {
    id: 2,
    image: require('../../assets/onboarding2.png'),
    // imageBottom: require('../../assets/onboarding2.png'),
    title: (
      <Text style={styles.title}>
        Atur dengan <Text style={{color: '#4C90FF'}}>Mu</Text>
        <Text style={{color: '#EE723C'}}>dah</Text>
      </Text>
    ),
    description: 'Kemudahan membuat pengingat Jatuh Tempo polis Anda.',
    gradient: ['#EE723C', '#E03703'], // Gradient for the second slide
  },
  {
    id: 3,
    image: require('../../assets/onboarding1_human.png'),
    imageBottom: require('../../assets/onboarding_bottom_1.png'),
    title: <Text style={styles.title}><Text style={{color: '#4C90FF'}}>Art</Text><Text style={{color: '#EE723C'}}>ikel</Text> Pilihan</Text>,
    description:
      'Nikmati artikel terbaru tentang asuransi, keuangan, dan kesehatan yang relevan untuk kebutuhan Anda.',
    gradient: ['#00B249', '#007D3C'], // Gradient for the third slide (green)
  },
];

const OnboardingScreen = ({navigation}) => {
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
        <LinearGradient
          key={slide.id}
          colors={slide.gradient} // Apply gradient dynamically
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={[styles.slide, {backgroundColor: slide.gradient[0]}]} // Fallback color for background
        >
          <View style={styles.top}>
            <TouchableOpacity onPress={() => navigation.replace('Basic')}>
              <Text style={styles.skip}>Lewati</Text>
            </TouchableOpacity>
            <View style={styles.right}>
              <Text>ID</Text>
              <Text>EN</Text>
            </View>
          </View>
          <Image source={slide.image} style={styles.image} />
          <Image source={slide.imageBottom} style={styles.imageBottom} />
          <View style={styles.onboardingBottom}>
            {slide.title}
            {/* <Text style={styles.title}>
              {slide.title.split(' ').map((word, i) =>
                i === 1 ? (
                  <Text key={i} style={styles.highlight}>
                    {word}{' '}
                  </Text>
                ) : (
                  `${word} `
                ),
              )}
            </Text> */}
            <Text style={styles.description}>{slide.description}</Text>
            <TouchableOpacity
              style={styles.buttonWrapper}
              onPress={() => {
                if (index === OnboardingData.length - 1) {
                  navigation.replace('Basic');
                } else {
                  swiperRef.current.scrollBy(1);
                }
              }}>
              <LinearGradient
                colors={['#0067C6', '#0085FF']}
                style={styles.button}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}>
                <Text style={styles.buttonText}>
                  {index === OnboardingData.length - 1
                    ? 'Yuk, Mulai'
                    : 'Lanjut'}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      ))}
    </Swiper>
  );
};

export default OnboardingScreen;
