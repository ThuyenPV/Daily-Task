import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';

export default function DailyTaskDetail() {
  const [selectedProject, setSelectedProject] = useState('LumiSight');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <View style={{backgroundColor: '#FFF', paddingHorizontal: 30, flex: 1}}>
      <View style={{flex: 1}}>
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
        <View
          style={{
            height: 50,
            flexDirection: 'row',
          }}>
          <Text style={{paddingRight: 10, color: 'blue'}}>+</Text>
          <Text style={{color: 'blue'}}>Add Tags</Text>
        </View>
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
        <DatePicker
          modal
          style={{width: 320, backgroundColor: 'white'}}
          open={open}
          date={date}
          value={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>
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
    </View>
  );
}
