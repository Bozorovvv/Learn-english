import React, { useEffect, useState } from "react";
import Questions from "../components/Questions";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import { getWords } from "../services/wordsService";
import { getLearnedUserWords } from "../services/wordsService";

function Learning() {
  const [words, setWords] = useState([]);
  const [isLearning, setIsLearning] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [allLearnedWords, setAllLearnedWords] = useState(0);
  const [difficultWords, setDifficultWords] = useState(0);

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
      setAllLearnedWords(res.data.length);
      setDifficultWords(
        res.data.filter((words) => "difficult" === words.difficulty)
      );
    })();
  }, []);

  // const arr = Object.keys(difficultWords).map(
  //   (id) => difficultWords[id].wordId
  // );

  console.log(difficultWords);

  const s = words.filter((item, index) => {
    const allWordsId = words.map((item) => item.id);
  });

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
          <h1 className="text-center my-5">Let's start learning!</h1>
          <div className="card shadow p-3 mb-5 bg-white rounded">
            <div className="card-body">
              <h4 className="text-center my-3">
                Today you've learned{" "}
                <span className="text-info">{allLearnedWords} </span>words
              </h4>
              <div className="progress">
                <div
                  className="progress-bar bg-info text-dark"
                  role="progressbar"
                  style={{
                    width: `${(allLearnedWords / words.length) * 100}%`,
                  }}
                  aria-valuenow={allLearnedWords}
                  aria-valuemin="0"
                  aria-valuemax="20"
                >
                  {allLearnedWords + "/" + words.length}
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
                      <h6 className="mt-2">
                        Today you {allLearnedWords} learned words
                      </h6>
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
                      <h6 className="mt-2">{allLearnedWords} learned words</h6>
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
                      <h6 className="mt-2">
                        {difficultWords.length} difficult words
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
      ) : (
        <React.Fragment>
          <Modal allLearnedWords={allLearnedWords} />
        </React.Fragment>
      )}
    </div>
  );
}

export default Learning;
