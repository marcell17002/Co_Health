import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Image, ScrollView } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

function Separator() {
  return <View style={{
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }} />;
}
export default function Scan_qr() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1, paddingTop: 32}}>
      <View style={{ flex: 1, width: '100%' }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

        {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      </View>
      <View style={{ height: 220, backgroundColor: 'white' }}>
        <View style={{ marginHorizontal: 20 }}>
          <View style={{ alignItems: 'center', marginTop: 8, marginBottom: 18 }}>
            <View style={{ width: 50, height: 4, backgroundColor: '#e0e0e0', marginVertical: 1 }} />
            <View style={{ width: 50, height: 4, backgroundColor: '#e0e0e0', marginVertical: 1 }} />
            <View style={{ width: 50, height: 4, backgroundColor: '#e0e0e0', marginVertical: 1 }} />
          </View>
          <Text style={{ fontSize: 23, color: 'black', marginBottom: 10 }}>Scan QR-Code </Text>
          <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
            <View style={{ width: 150, paddingVertical: 35, paddingLeft: 12 }}>
              <Text style={{ fontSize: 18, color: '#6B8BFF', fontWeight: 'bold' }}>Waiting...</Text>
            </View>
            <View style={{ height: 120, width: 1, backgroundColor: 'grey' }} />
            <View style={{ flex: 1, paddingLeft: 12, paddingVertical: 15 }}>
              <Text style={{ fontSize: 14 }}>Please Scan Doctor's QR Code to get notify and you will control your daily consumption!</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}



