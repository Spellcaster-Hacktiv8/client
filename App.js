import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingScreen from "./views/LandingScreen";
import CheckScreen from "./views/CheckScreen";
import MapScreen from "./views/MapScreen";
import ResultScreen from "./views/ResultScreen";
import QuestionsScreen from "./views/QuestionsScreen";
// import { Notifications } from "expo";
// import * as Permissions from "expo-permissions";
// import * as Notifications from "expo-notifications";
// import * as firebase from "firebase";

const Stack = createStackNavigator();

// const firebaseConfig = {
//   apiKey: "AIzaSyCiIH3-iCBIfAaGva_PXucvBG2W1pItW7c",
//   authDomain: "amicovid-9c55a.firebaseapp.com",
//   databaseURL: "https://amicovid-9c55a.firebaseio.com",
//   projectId: "amicovid-9c55a",
//   storageBucket: "amicovid-9c55a.appspot.com",
// };

export default function App() {
  // useEffect(() => {
  //   getPushNotificationPermissions();
  // });
  // const getPushNotificationPermissions = async () => {
  //   const { status: existingStatus } = await Permissions.getAsync(
  //     Permissions.NOTIFICATIONS
  //   );
  //   let finalStatus = existingStatus;

  //   // only ask if permissions have not already been determined, because
  //   // iOS won't necessarily prompt the user a second time.
  //   if (existingStatus !== "granted") {
  //     // Android remote notification permissions are granted during the app
  //     // install, so this will only ask on iOS
  //     const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  //     finalStatus = status;
  //   }

  //   // Stop here if the user did not grant permissions
  //   if (finalStatus !== "granted") {
  //     return;
  //   }
  //   console.log(finalStatus);
  //   console.log(Notifications.getExpoPushTokenAsync());
  //   token = await Notifications.getExpoPushTokenAsync();
  //   console.log(token);

  //   // Get the token that uniquely identifies this device
  //   console.log(
  //     "Notification Token: ",
  //     await Notifications.getExpoPushTokenAsync()
  //   );
  // };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Check" component={CheckScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Questions" component={QuestionsScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
