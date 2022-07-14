import Quizzes from "./components/Quizzes";
import IntroPage from "./components/IntroPage";
import { useState, useEffect } from "react";

function App() {
  const [quizzes, setQuizzes] = useState([]);
  const [answerQuizz, setAnswerQuizz] = useState(false);
  useEffect(() => {
    let url =
      "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";
    fetch(url)
      .then(res => res.json())
      .then(data => setQuizzes(data.results));
  }, []);
  console.log(quizzes);
  return (
    <>
      {answerQuizz ? (
        <Quizzes />
      ) : (
        <IntroPage handleClick={() => setAnswerQuizz(true)} />
      )}
    </>
  );
}

export default App;
