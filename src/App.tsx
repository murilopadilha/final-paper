/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
} from 'react-native';

const name = ''
const breedName = ''
function App() {

  return (
    <SafeAreaView>
      <View style={styles.divTitle}>
        <Text style={styles.titleText}>Cadastro da Receptora</Text>
      </View>

      <View style={styles.menu}>
        <View style={styles.name}>
        <Text style={styles.text}>Nome:</Text>
        <TextInput 
          placeholder="Nome da Receptora"
          value={name}
          style={styles.input}
        />
        </View>
        
      <View style={styles.breed}>
      <Text style={styles.text}>Raça:</Text>
        <TextInput 
          placeholder="Nome da Raça"
          value={breedName}
          style={styles.input}
        />
      </View>
        
      <View style={styles.breed}>
        <Text style={styles.text}>Data de Nascimento:</Text>

      </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent:'center', 
      alignItems:'center'
  },
  divTitle:{
    backgroundColor: "#2E4BA8",
    padding: 25,
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowRadius: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText:{
    fontSize: 20,
    color: '#fff',
    fontFamily: ''
  },
  input: {
    width: 200,
    height: 40,
    borderColor: '#2E4BA8',
    borderWidth: 3,
    borderRadius: 8
  },
  menu: {
    margin: 30,
  },
  name: {
    margin: 10
  },
  breed: {
    margin: 10
  },
  text: {
    color: '#000',
    marginBottom: 10
  }
});

export default App;
