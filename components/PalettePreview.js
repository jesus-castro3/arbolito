import React from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const PalettePreview = ({ handlePress, colorPalette }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={[styles.title]}>{colorPalette.paletteName}</Text>
      <FlatList
        style={styles.list}
        data={colorPalette.colors.slice(0, 5)}
        keyExtractor={(item, idx) => item.colorName + idx}
        renderItem={({ item }) => (
          <View style={[styles.box, { backgroundColor: item.hexCode }]} />
        )}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    marginBottom: 10
  },
  box: {
    marginRight: 5,
    width: 20,
    height: 20,
    elevation: 2,
    shadowRadius: 1,
    shadowOpacity: 0.5
  },
  list: {
    marginBottom: 10,
    flexDirection: 'row'
  }
});

export default PalettePreview;
