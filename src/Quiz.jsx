export default function Quiz(props) {
  return (
    <div className="start-screen">
      <h1 className="title">Quizzical</h1>
      <p className="sub-title">Test your knowledge!</p>
      <button className="start-quiz" onClick={props.startQuiz}>
        Start quiz
      </button>
    </div>
  );
}
