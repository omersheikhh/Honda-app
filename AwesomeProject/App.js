import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn.dribbble.com/users/954572/screenshots/17439642/media/9335b049fc76dca81dde8cc8e34c3ac3.gif' }}
        style={styles.logo}
      />

      <Text style={{ fontSize: 30, fontWeight: '900', marginTop: -40 }}> WELCOME ! </Text>
      <Text style={{ paddingBottom: 10, fontWeight: '800', fontSize: 25, color: 'Black' }}>to Drive. <Text style={{color:'red'}}>In </Text></Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Your Car"
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Book Now</Text>
      </TouchableOpacity>

      <Text style={styles.forgotPasswordText}>Key Feature</Text>


      <Text style={{paddingTop:15,}}>Wanna visit our showroom?</Text>
      <Text style={styles.forgotPasswordText}>Need an help?</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: "100%",
    height: "36%",
    marginTop: -50,
    padding:"0",
  },
  inputContainer: {
    width: '80%',
    marginTop: 20,
  },
  input: {
    height: 50,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  loginButton: {
    width: '80%',
    height: 50,
    backgroundColor: 'black',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    paddingTop: 10,
    fontSize: 15,
    color: 'black',
    textDecorationLine: 'underline',
  },


  
});


nothing




