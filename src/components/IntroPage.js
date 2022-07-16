import React from "react";

function IntroPage(props) {
  return (
    <div className="intro-page">
      <h1>Quizzical</h1>
      <p>Answer quizzs and test your knowledge skills!</p>
      <button className="btn" onClick={props.handleClick}>
        Start Quiz
      </button>
    </div>
  );
}

export default IntroPage;
