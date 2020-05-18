import React from "react";
import { StyleSheet, View, Text, Alert, Button } from "react-native";

export default function MapScreen() {
  const onPressHandle = () => {
    Alert.alert("Final Stack");
  };
  return (
    <View style={styles.container}>
      <Text>This is Map Screen</Text>
      <Button color="black" title="Press Me!!! " onPress={onPressHandle} />
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
