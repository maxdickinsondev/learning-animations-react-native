import React, { useState, useMemo } from 'react';
import { StyleSheet, View, Animated, PanResponder } from 'react-native';

export default function App() {
  const [ball] = useState(new Animated.ValueXY({ x: 0, y: 0 }));

  const panResponder = useMemo(() => PanResponder.create({
    onMoveShouldSetPanResponder: (e, gestureState) => true,

    onPanResponderGrant: (e, gestureState) => {
      ball.setOffset({
        x: ball.x._value,
        y: ball.y._value
      });

      ball.setValue({ x: 0, y: 0 });
    },

    onPanResponderMove: Animated.event([null, {
      dx: ball.x,
      dy: ball.y
    }], { listener: (e, gestureState) => {
      console.log(gestureState);
    }}),

    onPanResponderRelease: () => {
      ball.flattenOffset();
    }
  }), []);

  return (
    <View style={styles.container}>
      <Animated.View 
        {...panResponder.panHandlers}
        style={[
          styles.ball,
          {
            transform: [
              { translateX: ball.x },
              { translateY: ball.y } 
            ]
          }
        ]}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },

  ball: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#7159c1'
  }
});
