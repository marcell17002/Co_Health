import React, { Component } from 'react';
import { ToastAndroid, Text, StyleSheet, View, Image, ScrollView } from 'react-native';
import Navbar from '../../../components/molecules/Navbar';
import Properties from '../../../components/molecules/Properties';
function Separator() {
  return <View style={{
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }} />;
}
function Separator1() {
  return <View style={{
    marginHorizontal: 8,
    borderBottomColor: '#737373',
    borderRightWidth: StyleSheet.hairlineWidth,
  }} />;
}
class Profile extends Component {
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
        <ScrollView style={{ marginHorizontal: 15 }}>
          <View style={{ marginHorizontal: 15 }}>
            <View style={{ flexDirection: 'row', marginTop: '5%' }}>
              <View style={{ borderRadius: 25 }}>
                <Image style={{ width: 100, height: 100, resizeMode: 'contain', flex: 1, borderRadius: 180 }} source={require('../../../assets/profile.jpg')} />
              </View>
              <View style={{ marginLeft: '7%', marginVertical: 15 }}>
                <Text style={{ fontSize: 20, marginTop: '2%', textAlign: 'left', fontWeight: 'bold', color: '#092652' }}>Marcell Antonius</Text>
                <View style={{ backgroundColor: '#6B8BFF', height: 25, width: 85, borderRadius: 25, marginTop: '5%' }}>
                  <Text style={{ fontSize: 14, top: '10%', textAlign: 'center', color: 'white' }} onPress={() => navigate('EditProfile')}> Edit Profile</Text>
                </View>
              </View>
            </View>
            <View style={{ marginTop: '3%' }}>
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <Image style={{ width: 40, height: 40, resizeMode: 'contain' }} source={require('../../../assets/telp.png')} />
                </View>
                <Text style={{ fontSize: 14, color: '#a6a6a6', top: '2%', paddingLeft: '3%' }}> +62 895401011469</Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop: '1%', marginBottom: '3%' }}>
                <View >
                  <Image style={{ width: 40, height: 40, resizeMode: 'contain' }} source={require('../../../assets/gmail.png')} />
                </View>
                <Text style={{ fontSize: 14, color: '#a6a6a6', top: '2%', paddingLeft: '3%' }}> marcellantonius@gmail.com</Text>
              </View>
            </View>
            <Separator />

            <View style={{ flexDirection: 'row', position: 'relative', alignItems: 'center', marginTop: '12%', marginBottom: '15%', marginHorizontal: '20%', alignContent: 'center' }}>
              <View style={{ position: 'absolute' }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#092652', textAlign: 'center' }}>180</Text>
                <Text style={{ fontSize: 19, top: '10%', fontWeight: '500', color: '#092652', textAlign: 'center' }}>Checks</Text>
              </View>
              <Separator1 />
              <View style={{ marginLeft: '70%', position: 'absolute' }}>
                <View style={{ alignItems: 'center' }}>
                  <Image style={{ width: 40, height: 40 }} source={require('../../../assets/qr_code.png')} />
                </View>
                <Text style={{ fontSize: 19, top: '2%', fontWeight: '500', color: '#092652', textAlign: 'center' }}>QR Code</Text>
              </View>
            </View>
            <Separator />

            <View style={{ marginTop: '4%' }}>
              <View>
                <Properties OnPress={this._toastWithDurationGravityOffsetHandler} title="History " img={require('../../../assets/historiii.png')} />
                <Separator />
                <Properties OnPress={this._toastWithDurationGravityOffsetHandler} title="Syarat dan Ketentuan" img={require('../../../assets/histori.png')} />
                <Separator />
                <Properties OnPress={this._toastWithDurationGravityOffsetHandler} title="Pusat Bantuan" img={require('../../../assets/bantuan.png')} />
              </View>
            </View>
            <Separator />
            <View style={{ marginHorizontal: '15%', marginTop: '10%', backgroundColor: '#6B8BFF', height: 40, width: 240, borderRadius: 25 }}>
              <Text style={{ fontSize: 17, top: 7, textAlign: 'center', color: 'white' }} onPress={() => navigate('')}> Log Out</Text>
            </View>
          </View>
        </ScrollView>
        <View style={{ height: 54, backgroundColor: '#ffff', flexDirection: 'row' }}>
          <Navbar OnPress={() => navigate('HomeStackScreen', { screen: 'Landing' })} tittle='Home' img={require('../../../assets/home-pasif.png')} />
          <Navbar OnPress={() => navigate('CalendarStackScreen', { screen: 'Pengingat' })} tittle='Pengingat' img={require('../../../assets/icon-order.png')} />
          <Navbar OnPress={() => navigate('ProfileStackScreen', { screen: 'Profile' })} tittle='Profile' img={require('../../../assets/profil.png')} />
        </View>
      </View>
    )
  }
}
export default Profile;


