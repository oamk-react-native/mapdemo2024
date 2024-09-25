import { StyleSheet, SafeAreaView, Platform } from 'react-native'
import React, { useState } from 'react'
import MapView from 'react-native-maps'


export default function Map({location}) {
  
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
