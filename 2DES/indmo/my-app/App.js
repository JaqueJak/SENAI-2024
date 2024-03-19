import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Image, Switch, ImageBackground } from 'react-native';

const icon = require('./assets/icon.png');
// const solImage = require('./assets/');
// const luaImage = require('./assets/sol.png');

export default function App() {
  const [habilitado, setHabilitado] = useState(false);

  const habilitar = () => {
    setHabilitado(!habilitado);
  };

  // const fundoImage = habilitado ? luaImage : solImage;

  return (
    <View style={styles.container}>
      {/* <Image source={icon} style={styles.icon} /> */}
      <ImageBackground source={bg.png} style={styles.fundo}/>
      <Switch value={habilitado} onValueChange={habilitar} />
      <Image source={{ uri: habilitado ? "./assets/lua.png" : "./assets/sol.png" }} style={styles.sl} />
      <StatusBar style="auto" />
      <Image source={{ uri: habilitado ? "./assets/boanoite.png" : "./assets/bomdia.png" }} style={styles.sl} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 66,
    backgroundColor: '#FFC0CD'
  },
  icon: {
    width: 370,
    height: 260,
  },
  sl: {
    width: 200,
    height: 200,
  },
  fundo: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover'
  },
});
