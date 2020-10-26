import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { PALETTE } from '../utils/theme';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

const Home = ({ navigation }) => {
  const openModal = () => {
    navigation.navigate('NewTreeProposal');
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>The map will be here</Text>
        <TouchableOpacity
          style={styles.treeButtonContainer}
          onPress={openModal}
        >
          <FontAwesome
            style={styles.pluscircleo}
            name="plus-square"
            size={16}
            color={PALETTE.teal}
          />
          <MaterialCommunityIcons
            name="tree-outline"
            size={44}
            color={PALETTE.teal}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    position: 'relative',
    height: '100%',
  },
  treeButtonContainer: {
    width: 70,
    height: 70,
    position: 'absolute',
    bottom: 50,
    right: 10,
    borderRadius: 50,
    backgroundColor: PALETTE.green,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: PALETTE.teal,
    borderWidth: 3,
    shadowOpacity: 0.4,
  },
  treeButton: {
    width: 55,
    height: 55,
  },
  pluscircleo: {
    position: 'absolute',
    top: 15,
    left: 15,
    zIndex: 100,
    width: 15,
    fontWeight: 'bold',
    backgroundColor: PALETTE.green,
  },
});

export default Home;
