import React, {useState} from 'react';
import {Button, View, Text, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function DeadlinePicker() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => setOpen(true)}
        style={{
          padding: 10,
          borderWidth: 1,
          borderRadius: 4,
          borderColor: '#73777B',
          width: 200,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Text>{date.toDateString()}</Text>
          <Icon
            name="plus"
            size={16}
            color="green"
            style={{marginLeft: 4, marginRight: 12}}
          />
        </View>
      </TouchableOpacity>

      <DatePicker
        modal
        open={open}
        date={date}
        title="Select Deadline"
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
}
