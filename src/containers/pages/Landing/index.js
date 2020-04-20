import React, {Component} from 'react';
import {Text,StyleSheet, View, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements'
import { SliderBox } from "react-native-image-slider-box";
import Navbar from '../../../components/molecules/Navbar';
import Information from '../../../components/molecules/Information';
import Banner from '../../../components/molecules/Banner';
import { TouchableOpacity, Directions } from 'react-native-gesture-handler';
function Separator() {
    return <View style={{
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,}} />;
  }
class Landing extends Component{
   
    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style={{flex:1}}>
                <ScrollView>
                    <View style={{marginHorizontal:20}}>
                    <View>
                        
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#6B8BFF',borderRadius:15}}>
                            <View style={{width:35,marginVertical:20,marginLeft:'5%',alignItems:'center'}}>
                                <Image style={{width:35,height:35}}source={require('../../../assets/scan_qr.png')} />
                            </View>
                            <View>
                                <Text style={{fontSize:18,top:'20%',textAlign:'center',paddingHorizontal:15,paddingVertical:10, color:'white' }}> Scan QR</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#6B8BFF',borderRadius:15}}>
                            <View style={{width:35,marginVertical:20,marginLeft:'5%',alignItems:'center'}}>
                                <Image style={{width:45,height:35}}source={require('../../../assets/qr_code.png')} />
                            </View>
                            <View>
                                <Text style={{fontSize:18,top:'20%',textAlign:'center',paddingHorizontal:15,paddingVertical:10, color:'white' }}> QR Code</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:20}}>
                            <View style={{marginVertical:20,marginLeft:'5%',alignItems:'center'}}>
                                <Image style={{width:100,height:100}}source={require('../../../assets/face.png')} />
                            </View>
                            <View>
                                <Text style={{fontSize:18,top:'25%',paddingVertical:10, color:'#0B206A' }}>Ready for You!</Text>
                                <Text style={{fontSize:15,top:'15%',paddingVertical:10, color:'#6e6f72'}}>Control your daily drug health</Text>
                            </View>
                        </View>
                    <View style={{marginVertical:15}}>
                        <ScrollView horizontal style={{flexDirection:'row'}}>
                            <Information OnPress={() => navigate('')} tittle='Call Emergency' img={require('../../../assets/phone.png')}/>
                            <Information OnPress={() => navigate('')} tittle='Medicine' img={require('../../../assets/drug.png')}/>
                            <Information OnPress={() => navigate('')} tittle='Injection' img={require('../../../assets/injection.png')}/>
                            <Information OnPress={() => navigate('')} tittle='Corona' img={require('../../../assets/corona.png')}/>
                        </ScrollView>
                    </View>
                    <View>
                        <Separator />
                        <Text style={{color:'#0B206A',fontSize:18}} >Healty Guide</Text>
                    </View>
                    <View>
                        <Banner OnPress={() => navigate('')} OnPress_button={() => navigate('')} tittle="Attention"desc="Quarantime During Covid-19!" img={require('../../../assets/banner1.jpg')}/>
                   
                        <Banner OnPress={() => navigate('')} OnPress_button={() => navigate('')} tittle="Mark the Calendar"desc="Dont worry, just scan and mark" img={require('../../../assets/cal_banner.jpg')}/>
                     
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
export default Landing;