/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import { enableScreens } from 'react-native-screens';
import Root from "./src/navigation/Root"
import Colors from './src/styles/Colors';


enableScreens();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.RedDamask,
  },
});

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default" />
      <Root/>
  </SafeAreaView>
  );
};



export default App;
