import React from 'react';
import {TouchableOpacity,View, Image, Text} from 'react-native';
const Properties = (props) =>{
    return(
        
        <TouchableOpacity onPress={props.OnPress}>
        <View style={{flexDirection:'row',position:'relative',marginTop:'5%'}}>
            <View>
                <Image style={{width:25,height:25}}source={props.img}/>
            </View>
            <Text style={{paddingLeft:'5%',fontSize:16,color:'#092652',fontWeight:'800'}}>{props.title}</Text>
            <View style={{position:'absolute',marginLeft:'90%'}}>
                <Text style={{fontSize:18,color:'black',fontWeight:'bold'}}>></Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}
export default Properties;
