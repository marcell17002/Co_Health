import React, {Component} from 'react';
import {Text,StyleSheet, View, Image, ScrollView } from 'react-native';
import { RNCamera } from 'react-native-camera';

function Separator() {
    return <View style={{
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,}} />;
  }
class Scan_qr extends Component{
    state={
        barcode: ''
    }
    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style={{flex:1}}>
                <View style={{flex:1}}>
                    <RNCamera 
                        ref={ref => {
                            this.camera = ref;
                        }}
                        style={{width:'100%',height:'100%',top:0,left:0,flex:1,justifyContent:'flex-end',alignItems:'center'}}
                        type={RNCamera.Constants.Type.back}
                        flashMode={RNCamera.Constants.FlashMode.on}
                        androidCameraPermissionOptions={{
                            title: 'Permission to use camera',
                            message: 'We need your permission to use your camera',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                            
                        }}
                        androidRecordAudioPermissionOptions={{
                            title: 'Permission to use audio recording',
                            message: 'We need your permission to use your audio',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                        onBarCodeRead={(barcode) => {
                            console.log(barcode);
                            this.setState({
                                barcode: barcode
                            })
                        }}
                    />
                </View>
                <View style={{height:220,backgroundColor:'white'}}>
                    <View style={{marginHorizontal:20}}>
                        <View style={{alignItems:'center',marginTop:8,marginBottom:18}}>
                            <View style={{width:50,height:4,backgroundColor:'#e0e0e0',marginVertical:1}}/>
                            <View style={{width:50,height:4,backgroundColor:'#e0e0e0',marginVertical:1}}/>
                            <View style={{width:50,height:4,backgroundColor:'#e0e0e0',marginVertical:1}}/>
                        </View>
                    <Text style={{fontSize:23,color:'black',marginBottom:10}}>Scan QR-Code </Text>
                    <View style={{flexDirection:'row',alignItems:'flex-start'}}>
                        <View style={{width:150,paddingVertical:35,paddingLeft:12}}>
                        <Text style={{fontSize:18,color:'#6B8BFF',fontWeight:'bold'}}>{`Waiting... ${this.state.barcode}`}</Text>
                        </View>
                        <View style={{height:120,width:1,backgroundColor:'grey'}}/>
                        <View style={{flex:1,paddingLeft:12,paddingVertical:15}}>
                            <Text style={{fontSize:14}}>Please Scan Doctor's QR Code to get notify and you will control your daily consumption!</Text>
                        </View>
                    </View>
                    </View>
                </View>
            </View>
        )
    }
}
export default Scan_qr;


