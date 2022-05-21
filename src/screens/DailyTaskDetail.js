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
  const [tagName, setTagName] = useState('');
  const [deadline, setDeadline] = useState(new Date());

  const [isValidSubmit, setIsValidSubmit] = useState(true);
  onsubmit = () => {
    if (taskName.trim().length == 0) {
      setIsValidSubmit(false);
      return;
    } else {
      setIsValidSubmit(true);
    }
  };

  return (
    <View style={{backgroundColor: '#FFF', paddingHorizontal: 30, flex: 1}}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View>
          <View
            style={{
              paddingTop: 50,
              paddingBottom: 20,
              alignItems: 'center',
              justifyContent: 'flex-start',
              color: 'gray',
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 18, fontWeight: '300', marginRight: 8}}>
              To-do
            </Text>
            <Text style={{color: 'red'}}>*</Text>
          </View>
          <TextInput
            style={{
              height: 50,
              backgroundColor: '#FFF',
              borderRadius: 4,
              borderWidth: isValidSubmit ? 0 : 1,
              borderColor: 'red',
              paddingHorizontal: 12,
            }}
            placeholder="Enter your to-do"
            onChangeText={text => {
              setTaskName(text);
            }}
          />
          <>
            {isValidSubmit ? (
              <></>
            ) : (
              <Text style={{color: 'red', marginTop: 8}}>
                Task name is invalid
              </Text>
            )}
          </>
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
          <TagInput
            onChangeTags={tag => {
              setTagName(tag);
              console.log(tag);
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
            Deadline
          </Text>
          <DeadlinePicker
            onDeadlineChange={deadline => {
              setDeadline(deadline);
              console.log(deadline);
            }}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          console.log('---------------');
          console.log(tagName);
          console.log(taskName);
          console.log(selectedProject);
          console.log(deadline);
          this.onsubmit();
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
