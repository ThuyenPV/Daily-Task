import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function TaskTitle() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Today</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#000',
  },

  titleContainer: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: '#FFF',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
});
