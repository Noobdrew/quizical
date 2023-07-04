import { useState, useEffect } from "react";
import Quiz from "./Quiz";
import "./App.css";
import QuizBody from "./QuizBody";

function App() {
  const [quiz, setQuiz] = useState(false);

  const [apiData, setAipData] = useState([]);

  async function startQuiz() {
    setQuiz(true);
  }

  useEffect(() => {
    const responseFunc = async () => {
      try {
        const response = await fetch(
          "https://opentdb.com/api.php?amount=5&type=multiple"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAipData(data.results);
      } catch {}
    };
    responseFunc();
  }, []);

  return (
    <div className="app-container">
      {quiz ? <QuizBody apiData={apiData} /> : <Quiz startQuiz={startQuiz} />}
    </div>
  );
}

export default App;
