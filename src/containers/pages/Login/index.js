import React, {Component} from 'react';
import {Text,TextInput, View, Image } from 'react-native';

class Login extends Component{
    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style={{flex:1}}>
            <View style={{flex:1,backgroundColor:'white'}}>
                <View>
                    <Image style={{width:300,height:220,marginTop:80, marginLeft: 50}} source={require('../../../assets/login.png')} />
                    <Text style={{fontSize:20, textAlign:"center",marginTop:20,marginBottom:20}}>Have an account?</Text>
                </View>
                <View style={{ marginLeft:50,marginRight:50,textAlign: 'center', marginVertical: 5}}>
                <TextInput placeholder="Username" style={{ marginTop:10, height: 40, width: 300,paddingLeft:15, borderColor: 'gray', borderWidth: 1, borderRadius:25}} onChangeText={text => onChangeText(text)}/>
                <TextInput placeholder="Password" style={{ marginTop:10, height: 40, width: 300,paddingLeft:15, borderColor: 'gray', borderWidth: 1, borderRadius:25}} onChangeText={text => onChangeText(text)}/>
                <View style={{backgroundColor:'#6B8BFF', borderRadius:15,marginTop:20,paddingBottom:7,paddingTop:7}}>
                    <Text style={{fontSize:22,fontWeight: 'bold', color:'white',textAlign:'center'}} onPress={() => navigate('HomeStackScreen', { screen: 'Landing' })}>Login</Text>
                </View>
                </View>
                {/* <View style={{backgroundColor:'#ffff',marginTop:20,marginLeft:50,marginRight:50}}>
                <Image style={{height:67,width:310}} source={require('./src/assets/login_google.png')} />
                </View> */}
            </View>
            <View style={{height:40,backgroundColor:'#506bd0'}}>
                <View style={{alignSelf:'center',marginTop:'3%'}}>
                    <Text style={{fontSize:17, color:'white'}}  onPress={() => navigate('Register')} >Register Here !</Text>
                </View>
            </View>
            </View>
        )
    }
}
export default Login;



