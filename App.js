import React, { useState, useEffect } from 'react';
import { StyleSheet, StatusBar, View, ImageBackground,
  Animated, TouchableOpacity, Text
} from 'react-native';

import bg from './src/assets/background.jpg';

export default function App() {
  const [fade] = useState(new Animated.Value(0));

  function signIn() {
    Animated.spring(fade, {
      toValue: 370,
      velocity: 10  
    }).start();
  }

  function signInFacebook() {
    Animated.timing(fade, {
      toValue: 0,
      duration: 3000
    }).start();
  }

  return (
    <ImageBackground source={bg} style={styles.image} resizeMode="cover">
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />

        <View style={styles.areaButton}>
          <TouchableOpacity style={[styles.buttonSign]} onPress={signIn}>
            <Text style={styles.textButton}>SIGN IN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonFacebook} onPress={signInFacebook}>
            <Text style={[styles.textButton, { color: '#fff' }]}>SIGN IN WITH FACEBOOK</Text>
          </TouchableOpacity>
        </View>

        <Animated.View style={[styles.areaAnimated, { top: fade }]}>

        </Animated.View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    flex: 1
  },

  areaAnimated: {
    height: 200,
    backgroundColor: '#fff',
  },

  areaButton: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    right: 20,
    paddingBottom: 40,
    zIndex: 1
  },

  buttonSign: {
    width: 300,
    height: 50,
    backgroundColor: '#CCC',
    borderRadius: 25,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonFacebook: {
    width: 300,
    height: 50,
    backgroundColor: '#4267B2',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },

  textButton: {
    fontSize: 18,
    textAlign: 'center'
  },
});
