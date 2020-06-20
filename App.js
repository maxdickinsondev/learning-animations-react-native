import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Animated, Button } from 'react-native';

export default function App() {
  const [fade] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 5000
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View 
        style={{ opacity: fade }}
      >
        <View style={styles.fadeIn}>
          <Text style={styles.text}>Studying animations!</Text>
        </View>
    </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  fadeIn: {
    width: 250,
    height: 50,
    backgroundColor: 'powderblue'
  },

  text: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10
  }
});
