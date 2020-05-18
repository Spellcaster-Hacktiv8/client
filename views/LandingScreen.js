import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function LandingScreen({ navigation }) {
  const onPressHandle = () => {
    navigation.navigate("Check");
  };
  return (
    <View style={styles.container}>
      <Text>This is Landing Screen</Text>
      <Button
        color="black"
        title="Go To Check Screen "
        onPress={onPressHandle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
