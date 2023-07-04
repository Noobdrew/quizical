import { decode } from "html-entities";

export default function QuizElement(props) {
  console.log("quizz element");
  return (
    <div className="quiz-element">
      <h3 className="question">{decode(props.questionText)}</h3>
      <ul className="answers">
        <li>
          <button className="answer-button">Click</button>
        </li>
        <li>
          <button className="answer-button"></button>
        </li>
        <li>
          <button className="answer-button"></button>
        </li>
        <li>
          <button className="answer-button"></button>
        </li>
      </ul>
    </div>
  );
}
