import { useEffect, useState } from "react";
import QuizElement from "./QuizElement";
import { decode } from "html-entities";
import { nanoid } from "nanoid";

export default function QuizBody(props) {
  const [allQuestions, setAllQuestions] = useState(props.apiData);

  useEffect(() => {
    console.log("use effect");
    setAllQuestions((prev) => {
      return prev.map((question) => {
        return {
          ...question,
          id: nanoid(),
        };
      });
    });
  }, []);

  const quizElements = allQuestions.map((question) => {
    return (
      <QuizElement
        key={question.id}
        questionText={question.question}
        question={question}
      />
    );
  });

  return (
    <div className="quiz-body">
      <div className="quiz-container">{quizElements}</div>
      <button className="check-answers">Check answers</button>
    </div>
  );
}
