import Quiz from "./Quiz";
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
            <Quiz
              answer={answer}
              key={index}
              questionid={props.id}
              answerid={index}
              handleChange={props.handleChange}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Quizzes;
