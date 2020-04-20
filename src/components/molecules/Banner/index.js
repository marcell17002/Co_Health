import React from 'react';
import {View, Image, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Menu = (props) =>{
    return(
        <View style={{flex:1,alignItems:'center',marginHorizontal:10}}>
            <TouchableOpacity onPress={props.OnPress}>
                <View style={{marginHorizontal:16,marginTop:'5%',marginBottom:'5%',backgroundColor:'#E9EDFB',borderRadius:10}}>
                    <View style={{borderRadius:14,marginTop:10}}>
                        <Image style={{width:360,height:200,resizeMode:'contain',flex:1,borderRadius:4}} source={props.img} />      
                    </View>
                    <View style={{flexDirection:'row',justifyContent:"space-between",marginVertical:15,marginHorizontal:10}}>
                        <View>
                            <Text style={{fontSize:17,paddingTop:5,fontWeight:'bold'}}>{props.tittle}</Text>
                            <Text style={{fontSize:15,fontWeight:'400',color:'#9c9c9c'}}>{props.desc}</Text>
                        </View>
                        <TouchableOpacity onPress={props.OnPress_button}>
                        <View style={{backgroundColor:'#5178F7',paddingHorizontal:12,paddingVertical:11,borderRadius:6,alignSelf:'flex-end'}}>
                            <Text  style={{fontSize:13,fontWeight:'400',color:'white'}}>See More</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default Menu;