import React, {Component} from 'react';
import {Text,StyleSheet, View, Image, ScrollView } from 'react-native';
import Navbar from '../../../components/molecules/Navbar';
import Properties from '../../../components/molecules/Properties';
function Separator() {
    return <View style={{
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,}} />;
  }
  function Separator1() {
    return <View style={{
        marginHorizontal: 8,
        borderBottomColor: '#737373',
        borderRightWidth:StyleSheet.hairlineWidth,}} />;
  }
class Profile extends Component{
    render(){
        const { navigate } = this.props.navigation;
        
        return (
            <View style={{flex:1}}>
                <ScrollView style={{marginHorizontal:15}}>
                    <View style={{marginHorizontal:15}}>
                        <View style={{flexDirection:'row',marginTop:'5%'}}>
                            <View style={{borderRadius:25}}>
                                <Image style={{width: 100, height: 100, resizeMode:'contain',flex:1,borderRadius:180}} source={require('../../../assets/profile.jpg')} />
                            </View>
                            <View style={{marginLeft:'7%',marginVertical:15}}>
                            <Text style={{fontSize:20,marginTop:'2%',textAlign:'left',fontWeight:'bold',color:'#092652'}}>Marcell Antonius</Text>
                            <View style={{backgroundColor:'#6B8BFF',height:25,width:85,borderRadius:25,marginTop:'5%'}}>
                                <Text style={{fontSize:14,top:'10%',textAlign:'center',color:'white'}}  onPress={() => navigate('EditProfile')}> Edit Profile</Text>
                            </View>
                            </View>
                        </View>
                        <View style={{marginTop:'7%'}}>
                        <View style={{flexDirection:'row'}}>
                            <View>
                                <Image style={{width: 25, height: 25, resizeMode:'contain'}} source={require('../../../assets/phone-profile.png')} />
                            </View>
                            <Text style={{fontSize:14,color:'#a6a6a6',top:'1%',paddingLeft:'3%'}}> +62 895401011469</Text>
                        </View>
                        <View style={{flexDirection:'row',marginTop:'4%',marginBottom:'5%'}}>
                            <View >
                                <Image style={{width: 25, height: 25, resizeMode:'contain'}} source={require('../../../assets/email.png')} />
                            </View>
                            <Text style={{fontSize:14,color:'#a6a6a6',paddingLeft:'3%'}}> marcellantonius@gmail.com</Text>
                        </View>
                        </View>
                        <Separator/>

                        <View style={{flexDirection:'row',position:'relative',alignItems:'center',marginTop:'12%',marginBottom:'15%',marginHorizontal:'20%',alignContent:'center'}}>
                            <View style={{position: 'absolute'}}>
                                <Text style={{fontSize:30,fontWeight:'bold',color:'#092652',textAlign:'center'}}>180</Text>
                                <Text style={{fontSize:19,top:'10%',fontWeight:'500',color:'#092652',textAlign:'center'}}>Checks</Text>
                            </View>
                            <Separator1/>
                            <View style={{marginLeft:'70%',position:'absolute'}}>
                                <View style={{alignItems:'center'}}>
                                    <Image style={{width:40,height:40}}source={require('../../../assets/qr_code.png')} />
                                </View>
                                <Text  style={{fontSize:19,top:'2%',fontWeight:'500',color:'#092652',textAlign:'center'}}>QR Code</Text>
                            </View>
                        </View>
                        <Separator/>

                        <View style={{marginTop:'4%'}}>
                            <View>
                                <Properties title="History " img={require('../../../assets/icon-order.png')} />
                                <Separator/>
                                <Properties title="Syarat dan Ketentuan" img={require('../../../assets/icon-order.png')} />
                                <Separator/>
                                <Properties title="Pusat Bantuan" img={require('../../../assets/icon-order.png')} />
                            </View>
                        </View>
                        <Separator />
                        <View style={{marginHorizontal:'15%',marginTop:'10%',backgroundColor:'#6B8BFF',height:40,width:240,borderRadius:25}}>
                            <Text style={{fontSize:17,top:7,textAlign:'center',color:'white'}}  onPress={() => navigate('')}> Log Out</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={{height:54,backgroundColor:'#ffff',flexDirection:'row'}}>
                    <Navbar OnPress={() => navigate('HomeStackScreen', { screen: 'Landing' })} tittle='Home' img={require('../../../assets/icon-home-active.png')}/>
                    <Navbar OnPress={() => navigate('CalendarStackScreen',{screen:'Calendar'})} tittle='Orders' img={require('../../../assets/icon-order.png')}/>
                    <Navbar OnPress={() => navigate('ProfileStackScreen', { screen: 'Profile'})} tittle='Profile' img={require('../../../assets/icon-account.png')}/>
                </View>
            </View>
        )
    }
}
export default Profile;


