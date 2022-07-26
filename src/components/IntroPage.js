import React from "react";

function IntroPage(props) {
  return (
    <div className="intro-page">
      <h1>Quizzical</h1>
      <h3>Answer quizzs and test your knowledge skills!</h3>
      <p>Set your question Format</p>
      <form className="question-type">
        <label htmlFor="category" className="question-type-label">
          Category
        </label>
        <select
          name="category"
          id="category"
          value={props.questionType.category}
          onChange={props.handleQuestionType}
        >
          <option value="">--Any Category--</option>
          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Entertainment: Musical and Theatre</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="17">Science and Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Entertainment: Comics</option>
          <option value="30">Science: Gadgets</option>
          <option value="31">Entertainment: Japanese Anime and Manga</option>
          <option value="32">Entertainment: Cartoon and Animations</option>
        </select>
        <label htmlFor="difficulty" className="question-type-label">
          Difficulty
        </label>
        <select
          name="difficulty"
          id="difficulty"
          value={props.questionType.difficulty}
          onChange={props.handleQuestionType}
        >
          <option value="">--Any Difficulty--</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </form>
      <button className="btn" onClick={props.handleClick}>
        Start Quiz
      </button>
    </div>
  );
}

export default IntroPage;
