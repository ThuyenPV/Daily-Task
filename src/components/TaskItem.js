import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function TaskItem({...props}) {
  const {title, description, priority, checked} = props.data;
  return (
    <View style={styles.taskContainer}>
      <BouncyCheckbox onPress={() => {}} isChecked={checked} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.priority}>{priority}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#CCF3EE',
    marginTop: 5,
    marginBottom: 5,
    paddingVertical: 6,
    paddingHorizontal: 30,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  description: {
    fontSize: 14,
    color: 'gray',
    paddingVertical: 10,
  },
  priority: {
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
  },
});
