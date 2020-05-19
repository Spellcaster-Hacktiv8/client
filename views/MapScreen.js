import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Alert, Button } from "react-native";
import MapView, { AnimatedRegion, Animated, PROVIDER_GOOGLE } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import axios from 'axios'
import Geocoder from 'react-native-geocoding'
import { ActivityIndicator } from "react-native-paper";

Geocoder.init("AIzaSyARYJ1PEjq9z8K3TVlPxY2Ib52-PTLTZ7A")

const initialState = {
  latitude: -6.206726966135964,
  longitude: 107.00868818131161,
  latitudeDelta: 0.2,
  longitudeDelta: 0.2
}


export default function MapScreen() {
  const [currentLocation, setCurrentLocation] = useState(initialState)
  const [hospitals, setHospitals] = useState([])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { longitude, latitude } = position.coordsz
      setCurrentLocation({
        ...currentLocation,
        latitude,
        longitude
      })
      return fetchNearHospital(currentLocation.latitude + ',' + currentLocation.longitude)
      .then(({ data }) => {
        const { results } = data
        setHospitals(results)
      })
    }, err => console.log(err.message))
  }, [])
  return currentLocation.latitude ? (
    <View style={styles.container}>
      <MapView 
        provider={ PROVIDER_GOOGLE }  
        style={styles.map}
        initialRegion={currentLocation}
        zoomControlEnabled={true}


      >

        {
          hospitals.map(hospital => (hospital.name.toLowerCase().includes("sakit") || hospital.name.toLowerCase().includes("rs") || hospital.name.toLowerCase().includes("hospital")) ?
            (
              <MapView.Marker coordinate={{ latitude: hospital.geometry.location.lat, longitude: hospital.geometry.location.lng }} title={hospital.name} description={hospital.vicinity} key={hospital.id} />
            ) : <></>)
        }
        {/* <MapView.Marker coordinate={{ latitude: +currentLocation.split(",")[0], longitude: +currentLocation.split(",")[1] }} title={'rumahsaya'} pinColor={"white"} /> */}


        {/* {
          hospitals.map(hospital => (hospital.name.toLowerCase().includes("sakit") || hospital.name.toLowerCase().includes("rs") || hospital.name.toLowerCase().includes("hospital")) ? <MapViewDirections
            origin={{ latitude: +currentLocation.split(",")[0], longitude: +currentLocation.split(",")[1] }}
            destination={{ latitude: hospital.geometry.location.lat, longitude: hospital.geometry.location.lng }}
            apikey={'AIzaSyBfRZ4teg55GyBfA7mtR-NlIDugDXYELSc'}
            strokeWidth={3}
            strokeColor={"blue"}
          /> : <></>)
        } */}



      </MapView>
    </View >
  ) : <Text>HAHAHAHAHAHA</Text>;
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});

function fetchNearHospital(currentLocation) {
  return axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${currentLocation}&radius=5000&type=hospital&key=AIzaSyAsbtF5SxylGRFRTSRwI6tcWRTSvJchYiM`)
}

const fetchDetailHospital = async (place_id) => {
  let { data } = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=AIzaSyAsbtF5SxylGRFRTSRwI6tcWRTSvJchYiM`)
  const { result } = data
  const { international_phone_number } = result
  console.log({ international_phone_number })
}

// console.log(fetchDetailHospital("ChIJPWppQ7qOaS4Rn9vOEFhFqH4"))

function getPosition() {
  return axios.get("http://192.168.43.164:3000/location")
}