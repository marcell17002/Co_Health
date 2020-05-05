import React, { Component } from 'react';
import { ToastAndroid, Text, StyleSheet, View, Image, ScrollView } from 'react-native';
import Navbar from '../../../components/molecules/Navbar';
import Information from '../../../components/molecules/Information';
import Banner from '../../../components/molecules/Banner';
import { TouchableOpacity, Directions } from 'react-native-gesture-handler';
function Separator() {
  return <View style={{
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }} />;
}
class Landing extends Component {
  _toastWithDurationGravityOffsetHandler = () => {
    //function to make Toast With Duration, Gravity And Offset
    ToastAndroid.showWithGravityAndOffset(
      'Cooming Soon!',
      ToastAndroid.LONG, //can be SHORT, LONG
      ToastAndroid.BOTTOM, //can be TOP, BOTTON, CENTER
      25, //xOffset
      50 //yOffset
    );
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, backgroundColor: '#ededed' }}>
        <ScrollView>
          <View style={{ position: 'relative', justifyContent: 'space-between' }}>
            <View style={{ marginHorizontal: '-8%' }}>
              <Image style={{ width: 570, height: 310 }} source={require('../../../assets/dokter.png')} />
            </View>
            <View style={{ position: 'absolute', marginLeft: '40%', marginVertical: 70, position: 'absolute' }}>
              <Text style={{ fontSize: 20, top: '20%', textAlign: 'center', textAlign: 'left', paddingVertical: 10, color: 'white' }}> Hello!</Text>
              <Text style={{ fontSize: 25, top: '15%', textAlign: 'center', textAlign: 'left', paddingVertical: 10, color: 'white', fontWeight: 'bold' }}> Marcell Antonius</Text>
              <Text style={{ fontSize: 13, top: '5%', textAlign: 'center', textAlign: 'left', paddingLeft: 2, paddingVertical: 12, color: '#fafafa' }}> Control your drug consumtion today!</Text>
            </View>
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 20 }}>
              <TouchableOpacity onPress={() => navigate('Scan_qr')}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#6B8BFF', borderRadius: 15 }}>
                  <View style={{ width: 35, marginVertical: 20, marginLeft: '5%', alignItems: 'center' }}>
                    <Image style={{ width: 35, height: 35, marginLeft: 20 }} source={require('../../../assets/scanner.png')} />
                  </View>
                  <View>
                    <Text style={{ fontSize: 18, top: '20%', textAlign: 'center', paddingHorizontal: 15, paddingVertical: 10, color: 'white' }}> Scan QR</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this._toastWithDurationGravityOffsetHandler} >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#6B8BFF', borderRadius: 15 }}>
                  <View style={{ width: 35, marginVertical: 20, marginLeft: '5%', alignItems: 'center' }}>
                    <Image style={{ width: 45, height: 35, marginLeft: 20 }} source={require('../../../assets/qr.png')} />
                  </View>
                  <View>
                    <Text style={{ fontSize: 18, top: '20%', textAlign: 'center', paddingHorizontal: 15, paddingVertical: 10, color: 'white' }}> QR Code</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fafafa', marginVertical: 10, borderRadius: 15 }}>
              <View style={{ marginVertical: 20, marginLeft: '5%', alignItems: 'center' }}>
                <Image style={{ width: 100, height: 100 }} source={require('../../../assets/kalender2.png')} />
              </View>
              <View style={{ position: 'absolute', marginLeft: '42%', paddingTop: '5%' }}>
                <Text style={{ fontSize: 23, top: '10%', paddingVertical: 10, color: '#0B206A' }}>Ready for You!</Text>
                <Text style={{ fontSize: 18, paddingVertical: 10, color: '#6e6f72' }}>Control your daily drug health</Text>
              </View>
            </View>
            <View style={{ marginVertical: 15 }}>
              <ScrollView horizontal style={{ flexDirection: 'row' }}>
                <Information OnPress={this._toastWithDurationGravityOffsetHandler} tittle='Call Emergency' img={require('../../../assets/phone.png')} />
                <Information OnPress={this._toastWithDurationGravityOffsetHandler} tittle='Medicine' img={require('../../../assets/drug.png')} />
                <Information OnPress={this._toastWithDurationGravityOffsetHandler} tittle='Injection' img={require('../../../assets/injection.png')} />
                <Information OnPress={this._toastWithDurationGravityOffsetHandler} tittle='Corona' img={require('../../../assets/corona.png')} />
              </ScrollView>
            </View>
            <View style={{ marginVertical: 15 }}>
              <Separator />
              <Text style={{ color: '#0B206A', fontSize: 18, paddingTop: '5%', fontWeight: 'bold' }} >Healty Guide</Text>
            </View>
            <View>
              <Banner OnPress={this._toastWithDurationGravityOffsetHandler} tittle="Attention" desc="Stop the spread! #StayatHome" img={require('../../../assets/corona_banner.jpg')} />
              <Banner OnPress={this._toastWithDurationGravityOffsetHandler} tittle="Mark the Calendar" desc="Dont worry, just scan and mark" img={require('../../../assets/cal_banner.jpg')} />
              <Banner OnPress={this._toastWithDurationGravityOffsetHandler} tittle="Attention" desc="Quarantime During Covid-19!" img={require('../../../assets/banner1.jpg')} />

            </View>
          </View>
        </ScrollView>
        <View style={{ height: 54, backgroundColor: '#ffff', flexDirection: 'row' }}>
          <Navbar OnPress={() => navigate('HomeStackScreen', { screen: 'Landing' })} tittle='Home' img={require('../../../assets/home.png')} />
          <Navbar OnPress={() => navigate('CalendarStackScreen', { screen: 'Peningat' })} tittle='Pengingat' img={require('../../../assets/icon-order.png')} />
          <Navbar OnPress={() => navigate('ProfileStackScreen', { screen: 'Profile' })} tittle='Profile' img={require('../../../assets/profil-pasif.png')} />
        </View>
      </View>
    )
  }
}
export default Landing;