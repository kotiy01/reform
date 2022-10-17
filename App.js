/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={require('./img/bgImg.jpg')} resizeMode="cover" style={styles.bgImg}>
        <View style={styles.viewText}>
          <Text style={styles.mainText}>Добрый день{'\n'}USERNAME</Text>
        </View>
        <View style={styles.btnsBlock}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Практика</Text>
          </View>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Диалог</Text>
          </View>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Музыка</Text>
          </View>
        </View>
        <View style={styles.navBlock}>
          <View style={styles.navContainer}>
            <Image source={require('./img/burgerMenu.png')} style={styles.navImg}></Image>
            <Image source={require('./img/homePage.png')} style={styles.navImg}></Image>
            <Image source={require('./img/personalAccount.png')} style={styles.navImg}></Image>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  bgImg: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
  },
  viewText: {
    width: '80%',
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: '10%',
  },
  mainText: {
    fontSize: 36,
    fontWeight: '600',
    color: '#48598D',
  },
  btnsBlock: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  btn: {
    width: 240,
    height: 56,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 50,
  },
  btnText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#48598D',
  },
  navBlock: {
    bottom: 0,
    width: '100%',
    height: 75,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6371A0',
  },
  navContainer: {
    width: '70%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  }
});

export default App;
