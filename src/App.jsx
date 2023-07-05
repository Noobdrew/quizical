import { useState, useEffect } from "react";
import Quiz from "./Quiz";
import "./App.css";
import QuizBody from "./QuizBody";
import { nanoid } from "nanoid";

function App() {
  const [quiz, setQuiz] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const [apiData, setAipData] = useState([]);

  async function startQuiz() {
    setQuiz(true);
    modifyData();
  }
  function modifyData() {
    setAipData((prev) => {
      return prev.map((question) => {
        return {
          ...question,
          id: nanoid(),
          allAnswers: question.incorrect_answers.toSpliced(
            (3 * Math.random()) | 0,
            0,
            question.correct_answer
          ),
          selected: "",
        };
      });
    });
  }

  async function getNewQuestions() {
    await responseFunc();
    modifyData();
  }

  useEffect(() => {
    responseFunc();
  }, []);

  async function responseFunc() {
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=5&type=multiple"
      );
      setDisableButton(!response.ok);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      setAipData(data.results);
    } catch {}
  }

  return (
    <div className="app-container">
      {quiz ? (
        <QuizBody
          apiData={apiData}
          getNewQuestions={getNewQuestions}
          quiz={quiz}
          setQuiz={setQuiz}
        />
      ) : (
        <div className="start-screen">
          <h1 className="title">Quizzical</h1>
          <p className="sub-title">Test your knowledge!</p>
          <button
            className="start-quiz"
            disabled={disableButton}
            onClick={startQuiz}
          >
            Start quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
