import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CategoryListItem from './components/CategoryListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <CategoryListItem></CategoryListItem>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
});
