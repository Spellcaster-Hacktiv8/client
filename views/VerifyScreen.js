import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions } from 'react-native';
import { Button } from '@ui-kitten/components';
import { Entypo } from '@expo/vector-icons';
import { Radio, RadioGroup, List, Divider, Text, Card, ListItem, Modal, ButtonGroup, Spinner, Layout  } from '@ui-kitten/components';
import { ScrollView } from "react-native-gesture-handler";
import { Snackbar } from 'react-native-paper';
import axios from 'axios'
const { width: screenWidth, height } = Dimensions.get('window');

export default function VerifyScreen({ navigation }) {
  const [data, setData] = useState([])
  const [percentage, setPercentage] = useState(0)
  const [message, setMessage] = useState('')
  const [visible, setVisible] = useState(false)
  const [errVisible, setErrVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formLoading, setFormLoading] = useState(false)
  const [selectedIndex1, setSelectedIndex1] = useState({
    q0: null,
    q1: null,
    q2: null,
    q3: null,
    q4: null,
    q5: null,
    q6: null
  })
  const formSubmit = () => {
    if (selectedIndex1.q0 === null || selectedIndex1.q1 === null || selectedIndex1.q2 === null || selectedIndex1.q3 === null || selectedIndex1.q4 === null || selectedIndex1.q5 === null || selectedIndex1.q6 === null ) {
      setErrVisible(true)
    } else {
      setFormLoading(true)
      axios.post('http://192.168.43.164:3000/result', selectedIndex1)
      .then(({ data }) => {
        setFormLoading(false)
        setVisible(true)
        console.log('ini result', data)
        setPercentage(data.percentage)
        setMessage(data.message)
        setSelectedIndex1({
          q0: null,
          q1: null,
          q2: null,
          q3: null,
          q4: null,
          q5: null,
          q6: null
        })
        // navigation.navigate('Result', { result: data.percentage })
      })
      .catch(e => {
        console.log(e)
      })
    }
    
  }

  useEffect(() => {
    setLoading(true)
    console.log('cobaaaa')
    axios.get('http://192.168.43.164:3000/questions')
    .then(({ data }) => {
      setData(data)
      setLoading(false)
      console.log('aaaaa')
    })
    .catch(e => {
      console.log(e)
    })
  }, [])

  const handleChange = (index, i) => {
    let temp = "q" + i
    setSelectedIndex1({
      ...selectedIndex1,
      [temp]: index
    })
  }

  const renderItem = ({ item, index }) => (
    <ListItem
      title={item}
    />
  );

  const goToHospital = () => {
    setVisible(false)
    navigation.navigate('Map')
  }

  const selfHealing = () => {
    setVisible(false)
    navigation.navigate('Procedures')
  }
  return (
    <>
        <View style={{ flex: 1, alignItems: 'center', paddingTop: 50, backgroundColor: 'white'}}>
          <Text style={{color: 'black'}}>Please Answer All Questions</Text>
          { loading ? <Layout style={styles.containerSpinner}><Spinner size='giant'/></Layout> :
          <ScrollView style={{marginTop: 20, width: '100%'}}>
          { data.map((datum, i) => (
          <Card style={styles.CardQuestion} key={i}>
            <View style={{alignItems: 'center'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}} category='h5'>{datum.question}</Text>
              { datum.description.length > 1 ? 
              <List style={{width: '100%', marginTop: 10}} data={datum.description} ItemSeparatorComponent={Divider} renderItem={renderItem}/> 
              : null }
              <Card style={{width: '100%', marginTop: 10}}>
                <RadioGroup selectedIndex={selectedIndex1[`q${i}`]} onChange={index => handleChange(index, i)}>
                  { datum.answer.map(el => (
                    <Radio  key={el}>{el}</Radio>
                  ))}
                </RadioGroup>
              </Card>
            </View>
            </Card>
          )) }
          <Modal visible={visible} backdropStyle={styles.backdrop} onBackdropPress={() => setVisible(false)}>
            <Card disabled={true} style={{backgroundColor: '#dcdece'}}>
              <Text style={{textAlign: 'center', fontSize: 22, fontWeight: 'bold'}}>Your Test Result</Text>
              <Text style={{textAlign: 'center', fontSize: 40, fontWeight: 'bold'}}>{percentage}%</Text>
              <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold', marginVertical: 10}}>{message}</Text>
              {percentage < 50 ? <Button status='primary' onPress={() => goToHospital()}> Go to nearest hospital</Button> : 
              // <ButtonGroup>
              //   <Button onPress={() => selfHealing()}>See Procedures</Button>
              //   <Button status='danger' onPress={() => goToHospital()}>Nearest Hospital</Button>          
              // </ButtonGroup>
              <Button onPress={() => selfHealing()}>See Procedures</Button> }
            </Card>
          </Modal>
          </ScrollView>}
          { formLoading ? <Button type="secondary" style={{ marginVertical: 20 }}>Please wait ... </Button> : <Button onPress={() => formSubmit()} type="secondary" style={{ marginVertical: 20 }}>Submit</Button> }
          <Snackbar visible={errVisible} onDismiss={() => setErrVisible(false)} action={{onPress: () => { setErrVisible(false) }}} style={{backgroundColor: "black"}}
          ><Text style={{textAlign: 'center', color: 'white'}}>You must answer all question</Text></Snackbar>
        </View>
      <Button size="tiny" style={{ borderRadius: 50, top: 40, right: 10, position: 'absolute', backgroundColor: 'black', borderWidth: 0}} onPress={() => navigation.navigate('Landing')}><Entypo name="home" size={24} color="red" /></Button>
    </>
  );
}

const styles = StyleSheet.create({
  containerSpinner: {
    marginTop: 10, 
    height: height-20, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: 'white'
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  CardQuestion: {     
    shadowOffset: {width:10, height:10}, 
    shadowColor: 'rgba(138,149,158,0.2)',
    shadowOpacity: 1,  
    elevation: 15, 
    marginVertical: 8,
    marginHorizontal: 9
  },
  input: {
      width: '90%',
      backgroundColor: 'black',
      borderRadius: 10,
      borderWidth: 1,
      marginVertical: 10
  }
})
