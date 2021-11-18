import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Questions from "../components/Questions";
import Modal from "../components/Modal";
import { getWords } from "../services/wordsService";
import { getUserWords } from "../services/wordsService";
import { getLearnedUserWords } from "../services/wordsService";
import { createUserWord } from "../services/wordsService";
import { getUserId } from "../services/userService";

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

  useEffect(() => {
    (async function fetchUserWords() {
      const res = await getLearnedUserWords();
      console.log(res.data);
    })();
  }, []);

  function StartLearn() {
    setIsLearning(!isLearning);
  }

  function CheckAnswer(user_answer) {
    const real_answer = words[keys[currentIndex]].word;
    if (user_answer === real_answer) {
      console.log("posted answer to API!!!");
      // Post answer to API which sumbit true
      setCurrentIndex(currentIndex + 1);
    } else {
      setWrongAnswer(true);
    }
  }

  function showAnswer() {
    setIsAnswered(true);
  }

  function showGameEnd() {
    // function for post wordId to user
    setGameEnd(!gameEnd);
  }

  function handleNextQuestion() {
    const real_answer = words[keys[currentIndex]].word;
    console.log("This is word posted to API which status True");
    // Post answer to API which sumbit true

    if (!(words.length === currentIndex + 1)) {
      setCurrentIndex(currentIndex + 1);
      setIsAnswered(false);
    } else {
      showGameEnd();
    }
  }

  return (
    <div className="container" style={{ height: "90vh" }}>
      <div className="row justify-content-center">
        <div className="col">
          <h1 className="text-center my-5">Let's start learning!</h1>
          <div className="card shadow p-3 mb-5 bg-white rounded">
            <div className="card-body">
              <h4 className="text-center my-3">
                Today you've learned{" "}
                <span className="text-info">{learnedWords} </span>words
              </h4>
              <div className="progress">
                <div
                  className="progress-bar bg-info text-dark"
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
        </div>
      </div>

      {!gameEnd ? (
        <div className="gameEnd ">
          {isLearning ? (
            <React.Fragment>
              <div className="row justify-content-center ">
                <div className="col-sm-10 col-md-8 col-lg-4 justify-content-center shadow p-3 mb-5 bg-white rounded">
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
                  <div className="card text-center shadow p-3 mb-5 bg-white rounded">
                    <h5 className="card-header ">New words</h5>
                    <div className="card-body">
                      <p className="card-text">
                        Click to learn new words for today.
                      </p>
                      <button
                        onClick={StartLearn}
                        className="btn btn-outline-info "
                      >
                        Let`s start
                      </button>
                      <h6 className="mt-2">Today you ... learned words</h6>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card text-center shadow p-3 mb-5 bg-white rounded">
                    <h5 className="card-header">Repeat words</h5>
                    <div className="card-body">
                      <p className="card-text">
                        Click to review the learned words.
                      </p>
                      <Link to="/learning" className="btn btn-outline-info">
                        Let`s start
                      </Link>
                      <h6 className="mt-2">... learned words</h6>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card text-center shadow p-3 mb-5 bg-white rounded">
                    <h5 className="card-header">Difficult words</h5>
                    <div className="card-body">
                      <p className="card-text">
                        Click to repeat difficult words.
                      </p>
                      <Link to="/learning" className="btn btn-outline-info">
                        Let`s start
                      </Link>
                      <h6 className="mt-2">... difficult words</h6>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
      ) : (
        <React.Fragment>
          <Modal learnedWords={learnedWords} />
        </React.Fragment>
      )}
    </div>
  );
}

export default Learning;
