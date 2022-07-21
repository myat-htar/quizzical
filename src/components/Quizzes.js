import QuizAnswers from "./QuizAnswers";
function Quizzes(props) {
  const parser = new DOMParser();
  return (
    <div className="quiz">
      <p className="question">
        {
          parser.parseFromString(
            `<!doctype html><body>${props.question}`,
            "text/html"
          ).body.textContent
        }
      </p>
      <div className="answers">
        {props.answers.map((answer, index) => {
          return (
            <QuizAnswers
              correctAnswer={props.correct_answer}
              answer={answer}
              key={index}
              questionid={props.id}
              answerid={index}
              handleChange={props.handleChange}
              submitted={props.submitted}
              submittedAnswers={props.submittedAnswers}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Quizzes;
