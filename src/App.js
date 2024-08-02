import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import style from './components/style';

import CadastrarReceptoras from './Pages/CadastrarReceptoras';

export default function App() {
  return (
    <SafeAreaView style={style.app}>

        <CadastrarReceptoras />
        
    </SafeAreaView>
  );
}

