import { useEffect, useState } from "react";
import QuizElement from "./QuizElement";

export default function QuizBody(props) {
  const [checkAnswers, setCheckAnswers] = useState(false);
  const [allQuestions, setAllQuestions] = useState(props.apiData);

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

          if (correct == selected) {
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
  function handleClick() {
    for (let i = 0; i < allQuestions.length; i++) {
      const element = allQuestions[i];
      if (element.selected == "") {
        alert("Select all your answers");
        return;
      }
    }
    setCheckAnswers(true);
    if (checkAnswers) {
      props.getNewQuestions();
      props.setQuiz(false);
      setCheckAnswers(false);
    }
  }
  return (
    <div className="quiz-body">
      <div className="quiz-container">{quizElements}</div>
      <button className="check-answers" onClick={handleClick}>
        {checkAnswers ? "Play Again" : "Check Answers"}
      </button>
    </div>
  );
}
