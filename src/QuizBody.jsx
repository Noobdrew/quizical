import { useEffect, useState } from "react";
import QuizElement from "./QuizElement";
import { decode } from "html-entities";
import { nanoid } from "nanoid";

export default function QuizBody(props) {
  const [allQuestions, SetAllQuestions] = useState(props.apiData);

  const quizElements = allQuestions.map((question) => {
    return (
      <QuizElement
        correct={question.correct_answer}
        key={question.id}
        id={question.id}
        questionText={question.question}
        question={question}
        answer={question.allAnswers}
      />
    );
  });
  console.log(allQuestions);
  function checkAnswers() {}
  return (
    <div className="quiz-body">
      <div className="quiz-container">{quizElements}</div>
      <button className="check-answers" onClick={checkAnswers}>
        Check answers
      </button>
    </div>
  );
}
