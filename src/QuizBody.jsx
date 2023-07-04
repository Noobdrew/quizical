import { useEffect, useState } from "react";
import QuizElement from "./QuizElement";
import { decode } from "html-entities";
import { nanoid } from "nanoid";

export default function QuizBody(props) {
  const [allQuestions, setAllQuestions] = useState([props.apiData]);
  const [quiestion, setQuestion] = useState(props.apiData[0]);

  useEffect(() => {
    allQuestions.map;
  }, []);

  useEffect(() => {
    console.log("change question");
    setQuestion((prev) => {
      return {
        ...prev,
        id: nanoid(),
        allAnswers: prev.incorrect_answers.toSpliced(
          (3 * Math.random()) | 0,
          0,
          prev.correct_answer
        ),
      };
    });
    console.log(quiestion);
  }, []);

  console.log(allQuestions);
  return (
    <div className="quiz-body">
      <div className="quiz-container">
        <QuizElement questionText={quiestion.question} />
      </div>
    </div>
  );
}
