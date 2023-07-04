import { useEffect, useState } from "react";
import QuizElement from "./QuizElement";
import { decode } from "html-entities";
import { nanoid } from "nanoid";

export default function QuizBody() {
  const [quiestions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://opentdb.com/api.php?amount=5&type=multiple"
      );
      const json = await data.json();
      return json;
    };
  }, []);
  console.log(quiestions);
  return (
    <div className="quiz-body">
      <div className="quiz-container">
        <QuizElement />
        <QuizElement />
      </div>
    </div>
  );
}
