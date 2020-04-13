import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CategoryListItem from './components/CategoryListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Motherfucker, it's me, Domieeeeee</Text>
      <CategoryListItem></CategoryListItem>
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
});
