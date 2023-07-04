import { useState } from "react";
import Quiz from "./Quiz";
import "./App.css";
import QuizBody from "./QuizBody";

function App() {
  const [quiz, setQuiz] = useState(false);
  function startQuiz() {
    setQuiz(true);
  }
  return <div>{quiz ? <QuizBody /> : <Quiz startQuiz={startQuiz} />}</div>;
}

export default App;
