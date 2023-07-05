import { useEffect, useState } from "react";
import QuizElement from "./QuizElement";
import { decode } from "html-entities";
import { nanoid } from "nanoid";

export default function QuizBody(props) {
  console.log(props.apiData);
  const quizElements = props.apiData.map((question) => {
    return (
      <QuizElement
        key={question.id}
        questionText={question.question}
        question={question}
        answer={question.allAnswers}
      />
    );
  });

  function checkAnswers() {}
  return (
    <div className="quiz-body">
      <div className="quiz-container">{quizElements}</div>
      <button className="check-answers">Check answers</button>
    </div>
  );
}
