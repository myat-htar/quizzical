import React from "react";

function Quiz(props) {
  const parser = new DOMParser();
  let styles;
  let correct =
    props.submittedAnswers[`q-${props.questionid}-answer`] ===
    props.correctAnswer;
  let selectedAnswer =
    props.submittedAnswers[`q-${props.questionid}-answer`] === props.answer;
  let checked =
    props.submittedAnswers[`q-${props.questionid}-answer`] === props.answer;

  // changing styles to selected answer and right answer
  if (props.submitted) {
    if (selectedAnswer) {
      styles = {
        backgroundColor: correct ? "#94D7A2" : "#F8BCBC",
        borderColor: correct ? "#94D7A2" : "#F8BCBC",
      };
    }
    if (props.correctAnswer === props.answer) {
      styles = {
        backgroundColor: "#94D7A2",
        borderColor: "#94D7A2",
      };
    }
  } else {
    styles = {};
  }

  return (
    <div>
      <input
        type="radio"
        name={`q-${props.questionid}-answer`}
        id={`q-${props.questionid}-answer-${props.answerid}`}
        value={props.answer}
        checked={checked}
        onChange={props.handleChange}
        disabled={props.submitted ? true : false}
      />
      <label
        htmlFor={`q-${props.questionid}-answer-${props.answerid}`}
        style={styles}
      >
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
