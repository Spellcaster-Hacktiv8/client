import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function CheckScreen({ navigation }) {
  const onPressHandle = () => {
    navigation.navigate("Map");
  };
  return (
    <View style={styles.container}>
      <Text>This is Check Screen</Text>
      <Button color="black" title="Go To Map Screen " onPress={onPressHandle} />
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
