import { decode } from "html-entities";

export default function QuizElement(props) {
  const allAnswers = props.question.incorrect_answers.toSpliced(
    (3 * Math.random()) | 0,
    0,
    props.question.correct_answer
  );
  console.log(props.question);
  return (
    <div className="quiz-element">
      <h3 className="question">{decode(props.questionText)}</h3>
      <ul className="answers">
        <li>
          <button className="answer-button">{decode(allAnswers[0])}</button>
        </li>
        <li>
          <button className="answer-button">{decode(allAnswers[1])}</button>
        </li>
        <li>
          <button className="answer-button">{decode(allAnswers[2])}</button>
        </li>
        <li>
          <button className="answer-button">{decode(allAnswers[3])}</button>
        </li>
      </ul>
    </div>
  );
}
