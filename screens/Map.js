import { StyleSheet, SafeAreaView, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView from 'react-native-maps'
import Constants from 'expo-constants'


export default function Map() {
  const [location, setLocation] = useState({
    latitude: 65.0800,
    longitude: 25.4800,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  })

 /*  useEffect(() => {
    (async() => {
      getUserPosition()
    })()
  }, []) */
  

  return (
    <SafeAreaView style={styles.container}>
      <MapView 
        style={styles.map}
        region={location}
        mapType='satellite'
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
    /* marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0, */
  },
  map: {
    height: '100%',
    width: '100%'
  },
});
