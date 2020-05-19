import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Card, List, Text, Layout, Button } from '@ui-kitten/components'
const { width: screenWidth, height } = Dimensions.get('window');

const data = [
  {
    title: 'Step 1',
    description: 'Stay away from other people in your home as much as possible, staying in a separate room and using a separate bathroom if available.'
  },
  {
    title: 'Step 2',
    description: 'Limit contact with your pets, as there is a small chance humans can pass the disease to dogs or other pets, though only one such case of such a transmission has been reported (in a Pomeranian dog in Hong Kong living with a woman diagnosed with COVID-19).'
  },
  {
    title: 'Step 3',
    description: 'No visitors unless the person needs to be in your home. '
  },
  {
    title: 'Step 4',
    description: `If you need medical attention, call ahead to ensure you're going to the right place and taking the necessary precautions.`
  },
  {
    title: 'Step 5',
    description: `Wear a face mask if you must be around other people, such as during a drive to the doctor's office.`
  },
  {
    title: 'Step 6',
    description: 'Avoid sharing household items, including drinking cups, eating utensils, towels or even bedding. Wash these items thoroughly after using.'
  },
  {
    title: 'Step 7',
    description: 'Clean high-touch surfaces daily using a household cleaner or wipe. These include: "counters, tabletops, doorknobs, bathroom fixtures, toilets, phones, keyboards, tablets and bedside tables," the CDC says. '
  },
  {
    title: 'Step 8',
    description: 'Clean any surfaces that may be contaminated with blood, stool or any bodily fluids. '
  },
  {
    title: 'Step 9',
    description: 'Shared spaces in the home should have good airflow — use an air conditioner or open windows.'
  }
];

const Procedures = ({ navigation }) => {

  const renderItemHeader = (headerProps, info) => (
    <View {...headerProps}>
      <Text category='h6'>
        {info.item.title}
      </Text>
    </View>
  );

  const renderItem = (info) => (
    <Card
      style={styles.item}
      status='basic'
      header={headerProps => renderItemHeader(headerProps, info)}
    >
      <Text>
        {info.item.description}
      </Text>
    </Card>
  );

  return (
    <>
    <Layout style={styles.main}>
      <Text style={{textAlign: 'center', fontWeight: 'bold', marginBottom: 20}} category='h6'>Self Healing Procedures</Text>
      <List
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        data={data}
        renderItem={renderItem}
      />
    </Layout>      
    <Button size="tiny" style={{ borderRadius: 50, top: 45, right: 10, position: 'absolute', backgroundColor: 'black', borderWidth: 0}} onPress={() => navigation.navigate('Landing')}><Entypo name="home" size={24} color="red" /></Button>

    </>

  );
};

const styles = StyleSheet.create({
  main: {
    paddingTop: 50
  },
  container: {
    maxHeight: height - 70
  },
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  item: {
    marginVertical: 5,
    marginHorizontal: 5,
    shadowOffset: {width:10, height:10}, 
    shadowColor: 'rgba(138,149,158,0.2)',
    shadowOpacity: 1,  
    elevation: 10, 
    
  },
});

export default Procedures