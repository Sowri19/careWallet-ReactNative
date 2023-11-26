import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import InputField from '../components/InputField';
import { AntDesign } from '@expo/vector-icons';

const Verification = () => {

  return (
    <SafeAreaView behavior="padding" style={styles.screenWrapper}>
      <View style={styles.verificationFields}>
        <Image
          source={require('../utilities/CareWalletLogo.png')}
          style={styles.image}
        />
        <AntDesign name="checkcircleo" style={styles.tickIcon}/>
        <View style={styles.buttonArea}>
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText}>View ID</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText}>View Plan</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add Card to Apple Wallet</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 40,
    borderColor: 'grey'
  },
  verificationFields: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  image: {
    resizeMode: 'stretch',
    width: 250,
    height: 100
  },
  tickIcon: {
    fontSize: 100,
    color: 'green',
    paddingLeft: 80,
    marginTop: 20,
    marginBottom: 40
  },
  buttonArea: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 0
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#00008B',
    height: 60,
    marginTop: 12,
    marginBottom: 12,
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    padding: 10,
  },
});

export default Verification;
