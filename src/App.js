import Quizzes from "./components/Quizzes";
import IntroPage from "./components/IntroPage";
import { useState, useEffect } from "react";

function App() {
  const [quizzes, setQuizzes] = useState([]);
  const [answerQuizz, setAnswerQuizz] = useState(false);
  console.log(quizzes);
  useEffect(() => {
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
  }, []);

  return (
    <>
      {answerQuizz ? (
        <form action="">
          {quizzes.map((quiz, index) => {
            return <Quizzes {...quiz} key={index} id={index} />;
          })}
          <button className="btn">Check Answers</button>
        </form>
      ) : (
        <IntroPage handleClick={() => setAnswerQuizz(true)} />
      )}
    </>
  );
}

export default App;
