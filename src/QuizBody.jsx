import { useEffect, useState } from "react";
import QuizElement from "./QuizElement";
import { decode } from "html-entities";
import { nanoid } from "nanoid";

export default function QuizBody(props) {
  const [selectedAnswers, setSelectedAnswers] = useState([1, 2, 3, 4, 5]);
  const [allQuestions, setAllQuestions] = useState(props.apiData);

  console.log(allQuestions);
  const quizElements = allQuestions.map((question) => {
    return (
      <QuizElement
        key={question.id}
        questionText={question.question}
        question={question}
        answer={question.allAnswers}
      />
    );
  });

  function setAnswer(selected, id) {}

  function checkAnswers() {}
  return (
    <div className="quiz-body">
      <div className="quiz-container">{quizElements}</div>
      <button className="check-answers">Check answers</button>
    </div>
  );
}
