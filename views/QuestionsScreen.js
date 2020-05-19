import React, { useState } from "react";
import { StyleSheet, ScrollView, View, Button } from "react-native";
import QuestionsComponent from "../components/QuestionsComponent";

export default function QuestionsScreen({ route, navigation }) {
  const { questions } = route.params;
  const [answers, setAnswers] = useState([]);

  const onPressHandle = () => {
    // axios
    //   .post(baseUrl, [0, 1, 2, 3, 4, 5, 6, 7, 8])
    //   .then((result) => console.log(result))
    //   .catch((err) => console.log(err));
    console.log(
      "================================================================================"
    );
    console.log("ini dari answers", answers);

    for (let i = 0; i < questions.length; i++) {
      let flag = false;
      for (let j = 0; j < answers.length; j++) {
        if (questions[i].question === answers[j].question) {
          flag = true;
        }
      }
      if (!flag) {
        const set = {
          question: questions[i].question,
          answer: questions[i].answer[1],
        };
        answers.push(set);
      }
    }
    console.log("ini panjang answers ", answers.length);
    navigation.navigate("Result", { answers, questions });
  };

  return (
    <>
      <ScrollView>
        {questions.map((q, i) => (
          <View style={styles.container}>
            <QuestionsComponent
              q={q}
              key={i}
              answers={answers}
              setAnswers={setAnswers}
            />
          </View>
        ))}
        <Button color="black" title="Check Result" onPress={onPressHandle} />
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
