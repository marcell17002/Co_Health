import React from 'react';
import { View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Menu = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={props.OnPress}>
        <View style={{ width: 26, height: 26, alignItems: 'center' }}>
          <Image source={props.img} style={{ alignItems: 'center', justifyContent: 'center', width: 40, height: 26 }} />
        </View>
        <Text style={{ fontSize: 10, color: '#545454', marginTop: 4, textAlign: 'center' }}>{props.tittle}</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Menu;