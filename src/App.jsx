import { useState } from "react";
import Quiz from "./Quiz";
import "./App.css";
import { decode } from "html-entities";
// fetch("https://opentdb.com/api.php?amount=5")
//   .then((resp) => resp.json())
//   .then((data) => console.log(data));
function App() {
  const [quiz, setQuiz] = useState(false);
  return (
    <div>
      <Quiz />
    </div>
  );
}

export default App;
