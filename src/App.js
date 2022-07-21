import Quizzes from "./components/Quizzes";
import IntroPage from "./components/IntroPage";
import { useState, useEffect } from "react";

function App() {
  const [quizzes, setQuizzes] = useState([]);
  const [pageView, setPageView] = useState({
    page: "intro-page",
  });
  const [answers, setAnswers] = useState({});
  const [rightAnswersCount, setRightAnswersCount] = useState(0);
  const [submitAnswer, setSubmitAnswer] = useState(false);
  const [playAgain, setPlayAgain] = useState(false);
  const [questionType, setQuestionType] = useState({
    category: "",
    difficulty: "",
  });
  useEffect(() => {
    console.log("run");
    fetch(
      `https://opentdb.com/api.php?amount=10&category=${questionType.category}&difficulty=${questionType.difficulty}&type=multiple`
    )
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
  }, [playAgain, questionType]);
  console.log(quizzes);
  function handleChange(e) {
    const { value, name, type } = e.target;
    if (type === "radio") {
      setAnswers(prevAnswers => {
        return { ...prevAnswers, [name]: value };
      });
    } else {
      setQuestionType(prevQuestionType => {
        return { ...prevQuestionType, [name]: value };
      });
    }
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
    setPageView({ page: "intro-page" });
    setPlayAgain(prevState => !prevState);
    setRightAnswersCount(0);
    setSubmitAnswer(false);
    setAnswers({});
  }
  return (
    <>
      {pageView.page === "quiz-page" ? (
        quizzes.length > 0 ? (
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
                  You scored {rightAnswersCount}/{quizzes.length} correct
                  answers
                </p>
                <button className="btn play-again-btn" onClick={reset}>
                  Play Again
                </button>
              </>
            )}
          </form>
        ) : (
          <div className="try-different">
            <p>
              There is no quiz for this question type. Please try different one
            </p>
            <button
              className="btn"
              onClick={() => setPageView({ page: "intro-page" })}
            >
              Try Different One
            </button>
          </div>
        )
      ) : (
        <IntroPage
          handleClick={() => setPageView({ page: "quiz-page" })}
          handleQuestionType={handleChange}
          questionType={questionType}
        />
      )}
    </>
  );
}

export default App;
