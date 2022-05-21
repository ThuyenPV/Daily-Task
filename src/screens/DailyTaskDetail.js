import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import TagInput from '../components/TagInput';
import DeadlinePicker from '../components/DateTimePicker';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function DailyTaskDetail() {
  const [selectedProject, setSelectedProject] = useState('LumiSight');
  const [taskName, setTaskName] = useState('');
  const [deadline, setDeadline] = useState(new Date());
  return (
    <View style={{backgroundColor: '#FFF', paddingHorizontal: 30, flex: 1}}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View>
          <Text
            style={{
              paddingTop: 50,
              paddingBottom: 20,
              fontSize: 18,
              fontWeight: '300',
              alignItems: 'center',
              justifyContent: 'flex-start',
              color: 'gray',
            }}>
            To-do
          </Text>
          <TextInput
            style={{
              height: 50,
              backgroundColor: '#FFF',
            }}
            placeholder="Enter your to-do"
            onChangeText={text => {
              console.log(text);
              setTaskName(text);
            }}
          />
          <Text
            style={{
              paddingVertical: 30,
              fontSize: 16,
              fontWeight: '300',
              alignItems: 'center',
              justifyContent: 'flex-start',
              color: 'gray',
            }}>
            Project
          </Text>
          <Picker
            selectedValue={selectedProject}
            onValueChange={itemVal => {
              setSelectedProject(itemVal);
            }}>
            <Picker.Item label="LumiSight" value="LumiSight" />
            <Picker.Item label="Taxes" value="Taxes" />
            <Picker.Item label="Health Care" value="Health Care" />
          </Picker>
          <Text
            style={{
              paddingVertical: 30,
              fontSize: 16,
              fontWeight: '300',
              alignItems: 'center',
              justifyContent: 'flex-start',
              color: 'gray',
            }}>
            Tags
          </Text>
          <TagInput />
          <Text
            style={{
              paddingVertical: 30,
              fontSize: 16,
              fontWeight: '300',
              alignItems: 'center',
              justifyContent: 'flex-start',
              color: 'gray',
            }}>
            Deadline
          </Text>
          <DeadlinePicker />
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          console.log(taskName);
        }}>
        <View
          style={{
            height: 60,
            backgroundColor: 'cornflowerblue',
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 40,
          }}>
          <Text style={{color: '#FFF', fontSize: 16}}>Done</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
