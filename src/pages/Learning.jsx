import React, { useEffect, useState } from "react";
import Questions from "../components/Questions";
import { getWords } from "../services/getWords";
import { Link } from "react-router-dom";

function Learning() {
  const [words, setWords] = useState([]);
  const [isLearning, setIsLearning] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [learnedWords, setLearnedWords] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);
  const keys = Object.keys(words);
  useEffect(() => {
    (async function fetchWords() {
      const res = await getWords();
      setWords(res.data);
    })();
  }, []);

  function StartLearn() {
    setIsLearning(!isLearning);
  }

  function CheckAnswer(answer) {
    if (answer === words[keys[currentIndex]].word) {
      setIsAnswered(!isAnswered);
    } else {
      setWrongAnswer(true);
    }
  }

  function showAnswer() {
    setIsAnswered(!isAnswered);
  }

  function showGameEnd() {
    setLearnedWords(learnedWords + 1);
    setGameEnd(!gameEnd);
  }

  function handleNextQuestion() {
    if (words.length - 1 === currentIndex) {
      showGameEnd();
    } else {
      setCurrentIndex(currentIndex + 1);
      setLearnedWords(learnedWords + 1);
      setIsAnswered(!isAnswered);
      setWrongAnswer(false);
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <h4 className="text-center my-2">
            Today you've learned {learnedWords} words
          </h4>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${(learnedWords / words.length) * 100}%` }}
              aria-valuenow={learnedWords}
              aria-valuemin="0"
              aria-valuemax="20"
            >
              {learnedWords + "/" + words.length}
            </div>
          </div>
        </div>
      </div>

      {!gameEnd ? (
        <div className="gameEnd">
          {isLearning ? (
            <React.Fragment>
              <div className="row justify-content-center">
                <div className="col-sm-10 col-md-8 col-lg-5 justify-content-center">
                  <Questions
                    gameEnd={gameEnd}
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
              <div className="row mt-2">
                <div className="col">
                  <div className="card text-center">
                    <h5 className="card-header">New words</h5>
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <button onClick={StartLearn} className="btn btn-primary">
                        Let`s start
                      </button>
                      <h6 className="mt-2">You haven`t learned words</h6>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card text-center">
                    <h5 className="card-header">Repeat words</h5>
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <Link to="/learning" className="btn btn-primary">
                        Let`s start
                      </Link>
                      <h6 className="mt-2">You haven`t learned words</h6>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card text-center">
                    <h5 className="card-header">Difficult words</h5>
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <Link to="/learning" className="btn btn-primary">
                        Let`s start
                      </Link>
                      <h6 className="mt-2">You haven`t learned words</h6>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
      ) : (
        <React.Fragment>
          <h1 className="text-center">
            Today you've learned {learnedWords} words
          </h1>
          <button
            className="btn btn-primary"
            onClick={() => (window.location = "/learning")}
          >
            Back to Learning
          </button>
        </React.Fragment>
      )}
    </div>
  );
}

export default Learning;
