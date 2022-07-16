import Quizzes from "./components/Quizzes";
import IntroPage from "./components/IntroPage";
import { useState, useEffect } from "react";

function App() {
  const [quizzes, setQuizzes] = useState([]);
  const [answerQuizz, setAnswerQuizz] = useState(false);
  const [answers, setAnswers] = useState({});
  const [rightAnswersCount, setRightAnswersCount] = useState(0);
  const [submitAnswer, setSubmitAnswer] = useState(false);
  const [playAgain, setPlayAgain] = useState(false);
  useEffect(() => {
    console.log("run");
    let url =
      "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";
    fetch(url)
      .then(res => res.json())
      .then(data => data.results)
      .then(quizzes => {
        quizzes.map(quiz => {
          let random = Math.floor(Math.random() * 4);
          quiz.answers = [...quiz.incorrect_answers];
          quiz.answers.splice(random, 0, quiz.correct_answer);
          return quiz;
        });
        setQuizzes(quizzes);
      });
  }, [playAgain]);
  function handleChange(e) {
    const { value, name } = e.target;
    setAnswers(prevAnswers => {
      return { ...prevAnswers, [name]: value };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    quizzes.forEach((quiz, index) => {
      if (quiz.correct_answer === answers[`q-${index}-answer`]) {
        setRightAnswersCount(prevCount => prevCount + 1);
      }
    });
    setSubmitAnswer(true);
  }
  function reset(e) {
    e.preventDefault();
    setAnswerQuizz(false);
    setPlayAgain(prevState => !prevState);
    setRightAnswersCount(0);
    setSubmitAnswer(false);
    setAnswers({});
  }
  return (
    <>
      {answerQuizz ? (
        <form onSubmit={handleSubmit}>
          {quizzes.map((quiz, index) => {
            return (
              <Quizzes
                {...quiz}
                key={index}
                id={index}
                handleChange={handleChange}
                submitted={submitAnswer}
                submittedAnswers={answers}
              />
            );
          })}
          {!submitAnswer ? (
            <button className="btn">Check Answers</button>
          ) : (
            <>
              <p className="answer-info">
                You scored {rightAnswersCount}/{quizzes.length} correct answers
              </p>
              <button className="btn play-again-btn" onClick={reset}>
                Play Again
              </button>
            </>
          )}
        </form>
      ) : (
        <IntroPage handleClick={() => setAnswerQuizz(true)} />
      )}
    </>
  );
}

export default App;
