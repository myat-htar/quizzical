import React from "react";

function Quiz(props) {
  const parser = new DOMParser();
  return (
    <div>
      <input
        type="radio"
        name={`q-${props.questionid}-answer`}
        id={`q-${props.questionid}-answer-${props.answerid}`}
        value={props.answer}
      />
      <label htmlFor={`q-${props.questionid}-answer-${props.answerid}`}>
        {
          parser.parseFromString(
            `<!doctype html><body>${props.answer}`,
            "text/html"
          ).body.textContent
        }
      </label>
    </div>
  );
}

export default Quiz;
