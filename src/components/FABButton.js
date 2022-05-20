import {View, Text} from 'react-native';
import React from 'react';
import {FAB} from 'react-native-elements';

export default function FabButton() {
  return (
    <View style={{backgroundColor: '#FFF', bottom: 10}}>
      <FAB title="Create" containerStyle={{backgroundColor: '#FFF'}} />
    </View>
  );
}
