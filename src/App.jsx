import { useState, useEffect } from "react";
import Quiz from "./Quiz";
import "./App.css";
import QuizBody from "./QuizBody";

function App() {
  const [quiz, setQuiz] = useState(false);
  const [apiData, setAipData] = useState([]);

  function startQuiz() {
    setQuiz(true);
  }

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((resp) => resp.json())
      .then((data) => setAipData(data.results));
  }, []);

  return (
    <div>
      {quiz ? <QuizBody apiData={apiData} /> : <Quiz startQuiz={startQuiz} />}
    </div>
  );
}

export default App;
