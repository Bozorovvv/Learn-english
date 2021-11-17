import React, { useState } from "react";
import { apiUrl } from "../config.json";

function Question({
  word,
  isAnswered,
  CheckAnswer,
  handleNextQuestion,
  showAnswer,
  gameEnd,
  wrongAnswer,
}) {
  const [answer, setAnswer] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    CheckAnswer(answer);
    setAnswer("");
  }

  return (
    <div className="card mt-4" style={{ width: "100%" }}>
      <img src={apiUrl + "/" + word.image} className="card-img-top" alt="..." />
      <div className="card-body">
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
              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <button className="btn btn-outline-secondary">easy</button>
                <button className="btn btn-outline-secondary">difficult</button>
                <button className="btn btn-outline-secondary">delete</button>
              </div>

              <button
                onClick={handleNextQuestion}
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
                autoFocus
                onChange={(e) => setAnswer(e.target.value.toLocaleLowerCase())}
                value={answer}
                type="text"
                className="form-control"
                id="inputEmail3"
                placeholder="Answer here.."
              />
              <div className="card-body px-0 d-flex justify-content-center">
                <button
                  style={{ width: "100%" }}
                  disabled={!answer}
                  type="submit"
                  className="btn btn-info"
                >
                  Answer
                </button>
              </div>
            </form>
            <div className="card-body p-0 d-flex justify-content-center">
              <button
                style={{ width: "100%" }}
                onClick={showAnswer}
                className="btn btn-outline-secondary"
              >
                Show answer
              </button>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default Question;
