import { decode } from "html-entities";

export default function Answer(props) {
  return (
    <>
      <input
        type="radio"
        name={props.question.question}
        id={props.answer}
        value={props.answer}
        onChange={() => props.setAnswer(props.answer, props.id)}
        className={
          props.checkAnswers
            ? props.answerIndex == props.question.correctIndex
              ? "correct"
              : props.answerIndex == props.question.selectedIndex
              ? "wrong"
              : ""
            : ""
        }
      />
      <label htmlFor={props.answer}> {decode(props.answer)}</label>
    </>
  );
}
