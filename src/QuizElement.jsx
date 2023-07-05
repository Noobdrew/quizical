import { decode } from "html-entities";
import Answer from "./Answer";
import { useState } from "react";

export default function QuizElement(props) {
  const [selected, setSelected] = useState();

  function handleChange(value, index) {
    props.setAnswer(value, props.id);
    setSelected(index);
  }

  console.log(props.answer.indexOf(props.slected));
  return (
    <>
      <div className="quiz-element">
        <h3 className="question">{decode(props.questionText)}</h3>
        <ul className="answers">
          <li>
            <Answer
              checkAnswers={props.checkAnswers}
              answerIndex={0}
              answer={props.answer[0]}
              question={props.question}
              setAnswer={props.setAnswer}
              id={props.id}
            />
          </li>
          <li>
            <Answer
              checkAnswers={props.checkAnswers}
              answerIndex={1}
              answer={props.answer[1]}
              question={props.question}
              setAnswer={props.setAnswer}
              id={props.id}
            />
          </li>
          <li>
            <Answer
              checkAnswers={props.checkAnswers}
              answerIndex={2}
              answer={props.answer[2]}
              question={props.question}
              setAnswer={props.setAnswer}
              id={props.id}
            />
          </li>
          <li>
            <Answer
              checkAnswers={props.checkAnswers}
              answerIndex={3}
              answer={props.answer[3]}
              question={props.question}
              setAnswer={props.setAnswer}
              id={props.id}
            />
          </li>
        </ul>
      </div>
      <hr />
    </>
  );
}
