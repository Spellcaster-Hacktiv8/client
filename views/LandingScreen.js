import React from "react";
import { View, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { Card, Text } from '@ui-kitten/components';
import { AntDesign } from '@expo/vector-icons';

export default function LandingScreen({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerone}>
          <ImageBackground source={require("../assets/splash.png")} style={styles.imgBackgroundHome}></ImageBackground>
       </View>
        <View style={styles.containertwo}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Check')} style={styles.button}>
              <Text style={{color: 'white'}}>
                Check
              </Text>
              <AntDesign name="caretright" size={24} color="white" />
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Check')} style={styles.button}>
              <Text style={{color: 'white'}}>
                See Result
              </Text>
              <AntDesign name="caretright" size={24} color="white" />
            </TouchableOpacity> */}
            <TouchableOpacity onPress={() => navigation.navigate('Map')} style={styles.button}>
              <Text style={{color: 'white'}}>
                Find Nearest Hospital
              </Text>
              <AntDesign name="caretright" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View> 
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 15, 
    width: '70%', 
    backgroundColor: 'red', 
    padding: 20, 
    marginVertical: 10, 
    shadowOffset: {width:100, height:100}, 
    shadowColor: 'rgba(138,149,158,0.2)',
    shadowOpacity: 1,  
    elevation: 30, 
    justifyContent: "space-between", 
    flexDirection: 'row', 
    alignItems: 'center'
  },
  imgBackgroundHome: {
    flex: 1,
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginVertical: 100,
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  containerone: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containertwo: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60
  }
})
