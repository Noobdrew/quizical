import { decode } from "html-entities";
import { useState } from "react";

export default function QuizElement(props) {
  return (
    <>
      <div className="quiz-element">
        <h3 className="question">{decode(props.questionText)}</h3>
        <ul className="answers">
          <li>
            <input
              type="radio"
              name={props.question.question}
              id={props.answer[0]}
              value={props.answer[0]}
              className="answer-button "
            />
            <label htmlFor={props.answer[0]}> {decode(props.answer[0])}</label>
          </li>
          <li>
            <input
              type="radio"
              name={props.question.question}
              value={props.answer[1]}
              id={props.answer[1]}
              className="answer-button "
            />
            <label htmlFor={props.answer[1]}> {decode(props.answer[1])}</label>
          </li>
          <li>
            <input
              type="radio"
              name={props.question.question}
              id={props.answer[2]}
              className="answer-button "
            />
            <label htmlFor={props.answer[2]}> {decode(props.answer[2])}</label>
          </li>
          <li>
            <input
              type="radio"
              name={props.question.question}
              id={props.answer[3]}
              className="answer-button active"
            />
            <label htmlFor={props.answer[3]}> {decode(props.answer[3])}</label>
          </li>
        </ul>
      </div>
      <hr />
    </>
  );
}
