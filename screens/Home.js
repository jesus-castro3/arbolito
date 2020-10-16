import React, { useState, useCallback, useEffect } from 'react';
import { View, StyleSheet, RefreshControl } from 'react-native';
import { FlatList, Switch, TextInput } from 'react-native-gesture-handler';
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation }) => {
  const [value1, setValue1] = useState('');
  const [colorPalettes, setColorPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchColorPalettes = useCallback(async () => {
    const result = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );
    if (result.ok) {
      const palettes = await result.json();
      setColorPalettes(palettes);
    }
  }, []);

  useEffect(() => {
    fetchColorPalettes();
  }, [fetchColorPalettes]);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchColorPalettes();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, [fetchColorPalettes]);

  return (
    <View style={styles.container}>
      <TextInput
        value={value1}
        secureTextEntry
        onChangeText={setValue1}
        placeholder="Input your name"
      />
      <FlatList
        data={colorPalettes}
        keyExtractor={(item, idx) => item.paletteName + idx}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
        renderItem={({ item }) => (
          <PalettePreview
            handlePress={() =>
              navigation.navigate('ColorPalette', {
                paletteName: 'Solarized',
                colors: item.colors,
              })
            }
            colorPalette={item}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default Home;
