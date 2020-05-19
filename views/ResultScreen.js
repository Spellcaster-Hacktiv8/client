import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function CheckScreen({ route, navigation }) {
  const { questions, answers } = route.params;
  //   console.log("ini result", questions);
  //   console.log("ini answer", answers);

  const onPressHandle = () => {
    navigation.navigate("Result", { questions });
  };

  const SumResult = () => {
    let sum = questions.length;

    // if (questions.q1 === "yes") {
    //   sum++;
    // }
    // if (questions.q2 === "yes") {
    //   sum++;
    // }
    // if (questions.q3 === "yes") {
    //   sum++;
    // }

    if (sum === 0) {
      return (
        <>
          <Text>CONGRATULATIONS!!! You are Healthy!!!</Text>
        </>
      );
    } else if (sum === 1) {
      return (
        <>
          <Text>EHHMMM... You might be ODP...</Text>
          <Button
            color="blue"
            title="Help Me to Self Recover"
            onPress={onPressHandle}
          />
        </>
      );
    } else if (sum === 2) {
      return (
        <>
          <Text>OH NO!!! You are Considered ODP!!!</Text>
          <Button
            color="red"
            title="Help Me to Self Recover"
            onPress={onPressHandle}
          />
        </>
      );
    } else if (sum >= 3) {
      return (
        <>
          <Text>
            OMG!!! WE NEED AMBULANCE HERE!!! YOU ARE POSITIVE COVID-19!!!
          </Text>
        </>
      );
    } else {
      return <Text>OH NO~!</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <Text>Do You Have Fever?</Text>
      <Text>{questions.q}</Text>
      <Text>Are You Dry Coughing?</Text>
      <Text>{questions.q}</Text>
      <Text>Are You Tired?</Text>
      <Text>{questions.q}</Text>
      <SumResult />
      <Button
        color="black"
        title="Refer Me To The Nearest Hospital"
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
