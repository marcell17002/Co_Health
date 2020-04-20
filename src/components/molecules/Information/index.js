import React from 'react';
import {View, Image, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Menu = (props) =>{
    return(
        <View style={{flex:1,alignItems:'center',marginHorizontal:10}}>
            <TouchableOpacity onPress={props.OnPress}>
                <View style={{width:140,height:120,borderRadius:14,backgroundColor:'#EEF2FE'}}>
                    <View style={{marginTop:10,marginHorizontal:17}} >
                        <Image style={{width:60,height:60}} source={props.img}/>
                    </View>
                    <Text style={{fontSize:17,color:'#545454',paddingTop:18,textAlign:'center',fontWeight:'bold'}}>{props.tittle}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default Menu;