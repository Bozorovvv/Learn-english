import React, { useState, useEffect } from "react";
import { apiUrl } from "../config.json";
import { getUserId } from "../services/userService";
import { createUserWord } from "../services/wordsService";

function Question({
  word,
  isAnswered,
  CheckAnswer,
  handleNextQuestion,
  showAnswer,
  wrongAnswer,
}) {
  const [userId, setUserId] = useState("");
  const [answer, setAnswer] = useState("");
  useEffect(async () => {
    const data = await getUserId();
    setUserId(data);
  }, []);

  console.log(word.id);

  function onNextQuestion(difficulty) {
    createUserWord(userId, word.id, difficulty);
    handleNextQuestion();
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (answer === word.word) {
      createUserWord(userId, word.id, "easy");
      CheckAnswer(answer);
    } else {
      CheckAnswer(answer);
    }
    setAnswer("");
  }
  return (
    <div className="card-body" style={{ width: "100%" }}>
      <img src={apiUrl + "/" + word.image} className="card-img-top shadow-sm" alt="..." />
      <div>
        {isAnswered ? (
          <React.Fragment>
            <div className="alert-white" role="alert">
              <h3 className="card-title my-2 text-capitalize">
                {isAnswered ? word.word + " - " : null}
                {word.wordTranslate + " " + word.transcription}
              </h3>

              <div className="card-body p-0 mt-3">
                <h5 className="card-text m-0 text-secondary">
                  - {word.textExample.replace(/(<([^>]+)>)/gi, "")}
                </h5>
                <p className="card-text m-0 text-secondary">
                  {word.textExampleTranslate}
                </p>
                <div className="card-body p-0 mt-3">
                  <h5 className="card-text m-0 text-secondary">
                    - {word.textMeaning.replace(/(<([^>]+)>)/gi, "")}
                  </h5>
                  <p className="card-text m-0 text-secondary">
                    {word.textMeaningTranslate}
                  </p>
                </div>
              </div>
            </div>
            <div className="card-body px-0 d-flex justify-content-between">
              <button
                style={{ width: "100%" }}
                onClick={() => onNextQuestion("difficult")}
                type="button"
                className="btn btn-outline-info"
              >
                Next
              </button>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h5 className="card-text my-2">
              {word.textExample.replace(
                /<([\w]+)[^>]*>(.*?)<\/\1>/,
                "  [  ...  ]  "
              )}
            </h5>
            <p className="card-text mt-2">
              {word.textMeaning.replace(
                /<([\w]+)[^>]*>(.*?)<\/\1>/,
                "  [  ...  ]  "
              )}
            </p>
            {wrongAnswer ? (
              <div className="alert alert-danger" role="alert">
                Wrong answer try again please!
              </div>
            ) : null}
            <form onSubmit={handleSubmit}>
              <input
                onChange={(e) => setAnswer(e.target.value.toLocaleLowerCase())}
                value={answer}
                type="text"
                className="form-control"
                id="inputEmail3"
                placeholder="Answer here.."
              />
              <div className="card px-0 d-flex justify-content-center">
                <button
                  style={{ width: "100%" }}
                  disabled={!answer}
                  type="submit"
                  className="btn btn-info shadow-sm"
                >
                  Answer
                </button>
              </div>
            </form>
          </React.Fragment>
        )}
      </div>
      {!isAnswered ? (
        <React.Fragment>
          <div className="card p-0 d-flex justify-content-center">
            <button
              className="border border-grey shadow-sm p-3 mb-5 bg-white rounded btn"
              type="button"
              style={{ width: "100%" }}
              onClick={showAnswer}
              className="btn"
            >
              Show answer
            </button>
          </div>
          <div
            className="btn-group btn-group-toggle"
            data-toggle="buttons"
            style={{ width: "100%" }}
          >
            <button
              onClick={() => onNextQuestion("difficult")}
              type="button"
              className="border border-grey shadow-sm btn"
            >
              difficult
            </button>
            <button
              onClick={() => onNextQuestion("delete")}
              type="button"
              className="border border-grey shadow-sm btn"
            >
              delete
            </button>
          </div>
        </React.Fragment>
      ) : null}
    </div>
  );
}

export default Question;
