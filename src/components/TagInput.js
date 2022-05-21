import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import Tags from 'react-native-tags';
import Icon from 'react-native-vector-icons/FontAwesome';

const TagInput = () => (
  <Tags
    textInputProps={{
      placeholder: 'Any type of your daily tasks',
    }}
    initialTags={['Workout', 'Lunch', 'Dinner']}
    onChangeTags={tags => {}}
    onTagPress={(index, tagLabel, event, deleted) => {}}
    containerStyle={{justifyContent: 'center'}}
    inputStyle={{backgroundColor: '#DBDFFD', borderRadius: 4, color: '#FFF'}}
    renderTag={({tag, index, onPress, deleteTagOnPress, readonly}) => (
      <TouchableOpacity key={`${tag}-${index}`} onPress={onPress}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>{tag}</Text>
          <Icon
            name="close"
            size={16}
            color="#900"
            style={{marginLeft: 4, marginRight: 12}}
          />
        </View>
      </TouchableOpacity>
    )}
  />
);

export default TagInput;
