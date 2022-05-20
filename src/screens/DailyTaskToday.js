import {View, Text} from 'react-native';
import React from 'react';
import TaskTitle from '../components/TaskTitle';
import TaskList from '../components/TaskList';
import {FAB} from 'react-native-elements';

export default function DailyTaskToday({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={{flex: 1}}>
        <TaskTitle />
        <TaskList />
      </View>

      <View
        style={{
          bottom: 30,
          right: 20,
          height: 60,
          width: 60,
          borderRadius: 60,
          position: 'absolute',
        }}>
        <FAB
          title="+"
          raised={true}
          titleStyle={{
            fontSize: 22,
          }}
          buttonStyle={{
            backgroundColor: 'cornflowerblue',
            height: 60,
            width: 60,
            borderRadius: 60,
          }}
          onPress={() => navigation.navigate('TaskDetail')}
        />
      </View>
    </View>
  );
}
