import { decode } from "html-entities";
import Answer from "./Answer";

export default function QuizElement(props) {
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
