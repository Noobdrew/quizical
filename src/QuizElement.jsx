import { decode } from "html-entities";
import { useState } from "react";

export default function QuizElement(props) {
  const [value, setValue] = useState("");

  function setCurrentValue(input) {
    setValue(input.target._wrapperState.initialValue);
  }
  console.log(value);
  return (
    <>
      <div className="quiz-element">
        <h3 className="question">{decode(props.questionText)}</h3>

        <ul className="answers"></ul>
      </div>
      <hr />
    </>
  );
}
