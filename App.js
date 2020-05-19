import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingScreen from "./views/LandingScreen";
import CheckScreen from "./views/CheckScreen";
import MapScreen from "./views/MapScreen";
import Result from "./views/Result";
import Procedures from './views/Procedures'

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Icon } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import VerifyScreen from "./views/VerifyScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={eva.light}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Check" component={CheckScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Map" component={MapScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Result" component={Result} options={{headerShown: false}}/>
        <Stack.Screen name="Verify" component={VerifyScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Procedures" component={Procedures} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </ApplicationProvider>
    </>
  );
}
