import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet } from 'react-native';
import { Button } from '@ui-kitten/components';
import { Entypo } from '@expo/vector-icons';
import { Snackbar } from 'react-native-paper';
import { Layout, Radio, RadioGroup, List, Divider, Text, Card, ListItem, Modal  } from '@ui-kitten/components';

export default function CheckScreen({ navigation }) {
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const [errVisible, setErrVisible] = useState(false)
  const [visible, setVisible] = useState(false)
  const formSubmit = () => {
    if (selectedIndex === null) {
      setErrVisible(true)
    } else {
      if (selectedIndex === 0) {
        setVisible(true)
      } else {
        navigation.navigate('Verify')
      }
    }

    // navigation.navigate('Result')
  }
  const datum = {
    question: "Is this an emergency ?",
    description: [
      "Severe, constant chest pain or pressure",
      "Extreme difficulty breathing",
      "Severe, constant lightheadedness",
      "Serious disorientation or unresponsiveness"
    ],
    answer: [
      "Im expreciencing at least one of these",
      "I do not any of these"
    ]
  }

  const goToHospital = () => {
    setVisible(false)
    navigation.navigate('Map')
  }

  const renderItem = ({ item, index }) => (
    <ListItem
    style={{backgroundColor: 'white'}}
      title={item}
    />
  );
  return (
    <>
        <Layout style={{ flex: 1, alignItems: 'center', paddingTop: 50, backgroundColor: 'white'}}>
          <Text style={{color: 'black'}}>Please Answer</Text>
            <Layout style={{marginTop: 100, backgroundColor: 'white'}}>
              <Text style={{color: 'black', textAlign: 'center', fontWeight: 'bold'}} category='h3'>{datum.question}</Text>
              <List style={styles.container} data={datum.description} ItemSeparatorComponent={Divider} renderItem={renderItem}/>
              <Divider/>
              <RadioGroup style={{marginTop: 30}} selectedIndex={selectedIndex} onChange={index => setSelectedIndex(index)}>
                { datum.answer.map(el => (
                  <Radio  key={el}>{el}</Radio>
                ))}
              </RadioGroup>
            </Layout>
          <Button onPress={() => formSubmit()} type="secondary" style={{ marginVertical: 20 }}>Submit</Button>
          <Modal visible={visible} backdropStyle={styles.backdrop} style={{alignItems: 'center'}}>
            <Card disabled={true} style={{backgroundColor: '#dcdece', width: '95%'}}>
              <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginVertical: 15}}>You should go to the hospital immediately!</Text>
              <Button status='primary' onPress={() => goToHospital()}> Find nearest hospital</Button>
            </Card>
          </Modal>
          <Snackbar visible={errVisible} onDismiss={() => setErrVisible(false)} action={{onPress: () => { setErrVisible(false) }}} style={{backgroundColor: "black"}}
          ><Text style={{textAlign: 'center', color: 'white'}}>You must answer the question</Text></Snackbar>
        </Layout>
      <Button size="tiny" style={{ borderRadius: 50, top: 40, right: 10, position: 'absolute', backgroundColor: 'black', borderWidth: 0}} onPress={() => navigation.navigate('Landing')}><Entypo name="home" size={24} color="red" /></Button>
    </>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  input: {
      width: '90%',
      backgroundColor: 'black',
      borderRadius: 10,
      borderWidth: 1,
      marginVertical: 10
  },
  container: {
    marginTop: 30,
    width: 300,
    maxHeight: 170,
    backgroundColor: '#dcdece'
  }
})
