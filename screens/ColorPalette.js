import React from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
  const { colors, paletteName } = route.params;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={colors}
          keyExtractor={(item, idx) => item + idx}
          renderItem={({ item }) => (
            <ColorBox text={item.colorName} hex={item.hexCode} />
          )}
          ListHeaderComponent={() => (
            <Text style={styles.header}>{paletteName}</Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  header: {
    fontWeight: 'bold',
  },
});

export default ColorPalette;
