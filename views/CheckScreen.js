import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import axios from "axios";

export default function CheckScreen({ navigation }) {
  const [questions, setQuestions] = useState([]);
  const baseUrl = "http://192.168.43.190:3000/questions";

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((result) => {
        setQuestions(result.data);
        console.log("ini dalam then", questions);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  }, []);

  //   if (questions.length === 0) {
  //     console.log("zero");
  //     return <></>;
  //   } else {
  console.log("not zero", questions);

  const onShowQuestions = () => {
    navigation.navigate("Questions", { questions });
  };

  return (
    <>
      <View style={styles.container}>
        <Button color="blue" title="Show Questions" onPress={onShowQuestions} />
      </View>
    </>
  );
  //   }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
