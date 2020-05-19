import React, { useState } from "react";
import { Text, Picker } from "react-native";

export default function QuestionsComponent({ q, answers, setAnswers }) {
  const [answer, setAnswer] = useState(q.answer[1]);
  const set = {};
  return (
    <>
      <Text style={{ color: "red" }}>{q.question}</Text>
      {q.description.map((q, i) => (
        <Text>{q}</Text>
      ))}
      <Picker
        selectedValue={answer}
        style={{
          height: 50,
          width: "100%",
          padding: 10,
        }}
        onValueChange={(itemValue, itemIndex) => {
          setAnswer(itemValue);
          set.question = q.question;
          set.answer = itemValue;
          if (answers.length === 0) {
            answers.push(set);
          } else {
            let flag = false;
            for (let i = 0; i < answers.length; i++) {
              if (set.question === answers[i].question) {
                flag = true;
                answers[i].answer = set.answer;
              }
            }
            if (!flag) {
              answers.push(set);
            }
          }
          setAnswers(answers);
        }}
      >
        <Picker.Item label={q.answer[0]} value={q.answer[0]} />
        <Picker.Item label={q.answer[1]} value={q.answer[1]} />
      </Picker>
    </>
  );
}
