import React, { useContext, useEffect, useState } from "react";
import Questions from "../components/Questions";
import Modal from "../components/Modal";
import { WordContext } from "./../state/WordContext";
import { UserLearnedContext } from "./../state/UserLearnedContext";
import Card from "../components/Card";
import LearningHeader from "../components/LearningHeader";

function Learning() {
  const words = useContext(WordContext);
  const allLearnedWords = useContext(UserLearnedContext);
  const keys = Object.keys(words);
  const [isLearning, setIsLearning] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [difficultWords, setDifficultWords] = useState([]);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);

  useEffect(() => {
    setDifficultWords(
      allLearnedWords.filter((words) => "difficult" === words.difficulty)
    );
  }, []);

  function StartLearn() {
    setIsLearning(!isLearning);
  }

  function CheckAnswer(answer) {
    const realAnswer = words[keys[currentIndex]].word;
    if (answer === realAnswer) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setWrongAnswer(true);
    }
  }

  function showAnswer() {
    setIsAnswered(true);
  }

  function showGameEnd() {
    setGameEnd(!gameEnd);
  }

  function handleNextQuestion() {
    if (!(words.length === currentIndex + 1)) {
      setCurrentIndex(currentIndex + 1);
      setIsAnswered(false);
      setWrongAnswer(false);
    } else {
      showGameEnd();
    }
  }

  return (
    <div className="container" style={{ height: "90vh" }}>
      <div className="row justify-content-center">
        <div className="col">
          <LearningHeader />
        </div>
      </div>

      {!gameEnd ? (
        <div className="gameEnd ">
          {isLearning ? (
            <React.Fragment>
              <div className="row justify-content-center ">
                <div className="col-sm-10 col-md-8 col-lg-4 justify-content-center shadow-sm p-3 mb-5 bg-white rounded">
                  <Questions
                    showGameEnd={showGameEnd}
                    word={words[keys[currentIndex]]}
                    isAnswered={isAnswered}
                    wrongAnswer={wrongAnswer}
                    showAnswer={showAnswer}
                    CheckAnswer={CheckAnswer}
                    handleNextQuestion={handleNextQuestion}
                  />
                </div>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className="row mt-3">
                <div className="col">
                  <Card
                    label="New words"
                    text="Click to learn new words for today."
                    StartLearn={StartLearn}
                    words={allLearnedWords}
                    name="learned"
                  />
                </div>
                <div className="col">
                  <Card
                    label="Repeat words"
                    text="Click to review the learned words."
                    StartLearn={StartLearn}
                    words={allLearnedWords}
                    name="learned"
                  />
                </div>
                <div className="col">
                  <Card
                    StartLearn={StartLearn}
                    label="Difficult words"
                    text="Click to repeat difficult words."
                    link="/learning"
                    words={difficultWords}
                    name="difficult"
                  />
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
      ) : (
        <React.Fragment>
          <Modal currentIndex={currentIndex} />
        </React.Fragment>
      )}
    </div>
  );
}

export default Learning;
