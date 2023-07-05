import { useEffect, useState } from "react";
import QuizElement from "./QuizElement";
import { decode } from "html-entities";
import { nanoid } from "nanoid";

export default function QuizBody(props) {
  const [checkAnswers, setCheckAnswers] = useState(false);
  const [allQuestions, setAllQuestions] = useState(props.apiData);

  console.log(allQuestions);
  const quizElements = allQuestions.map((question) => {
    return (
      <QuizElement
        key={question.id}
        questionText={question.question}
        question={question}
        correct={question.correct_answer}
        answer={question.allAnswers}
        id={question.id}
        setAnswer={setAnswer}
        checkAnswers={checkAnswers}
        selected={question.selected}
        selectedIndex={question.selectedIndex}
        isCorrect={question.isCorrect}
      />
    );
  });

  function setAnswer(selected, id) {
    setAllQuestions((prev) => {
      return prev.map((question) => {
        if (question.id == id) {
          let correct = question.correct_answer;
          console.log(correct);
          if (correct == selected) {
            console.log("you are right");
          }
          return {
            ...question,
            selected: selected,
            selectedIndex: question.allAnswers.indexOf(selected),
            isCorrect: selected == question.correct_answer ? true : false,
            correctIndex: question.allAnswers.indexOf(correct),
          };
        } else {
          return { ...question };
        }
      });
    });
  }

  return (
    <div className="quiz-body">
      <div className="quiz-container">{quizElements}</div>
      <button className="check-answers" onClick={() => setCheckAnswers(true)}>
        Check answers
      </button>
    </div>
  );
}
