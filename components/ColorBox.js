import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ text, hex }) => {
  const customColor = {
    backgroundColor: hex,
  };

  return (
    <View style={[styles.box, customColor]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    margin: 5,
    padding: 7,
    borderRadius: 3,
    alignItems: 'center',
    elevation: 2,
    shadowRadius: 1,
    shadowOpacity: 0.5
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ColorBox;
