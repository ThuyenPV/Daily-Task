import {View, Text, FlatList} from 'react-native';
import React from 'react';
import TaskItem from './TaskItem';

const tasks = [
  {
    id: 1,
    title: 'Task 1',
    description: 'Description 1',
    priority: 'High',
    checked: false,
  },
  {
    id: 2,
    title: 'Task 2',
    description: 'Description 2',
    priority: 'High',
    checked: true,
  },
  {
    id: 3,
    title: 'Task 3',
    description: 'Description 3',
    priority: 'Low',
    checked: false,
  },
  {
    id: 4,
    title: 'Task 4',
    description: 'Description 4',
    priority: 'High',
    checked: false,
  },
  {
    id: 5,
    title: 'Task 5',
    description: 'Description 5',
    priority: 'High',
    checked: false,
  },
  {
    id: 6,
    title: 'Task 6',
    description: 'Description 6',
    priority: 'High',
    checked: false,
  },
  {
    id: 7,
    title: 'Task 7',
    description: 'Description 7',
    priority: 'High',
    checked: false,
  },
];

export default function TaskList() {
  return (
    <View style={{flex: 9, paddingVertical: 20, backgroundColor: '#FFF'}}>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <TaskItem data={item} />}
      />
    </View>
  );
}
