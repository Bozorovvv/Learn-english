import React, { useState, useEffect } from "react";
import { getWords } from "../services/wordsService";
import { getLearnedUserWords } from "../services/wordsService";
import DictionaryWords from "../components/DictionaryWords";

function Dictionary() {
  const [words, setWords] = useState([]);
  const [difficultWords, setDifficultWords] = useState([]);
  const [easyWords, setEasyWords] = useState([]);
  const [deletedtWords, setDeletedWords] = useState([]);
  const [newDeletedtWords, setNewDeletedWords] = useState([]);
  const [newEasytWords, setNewEasyWords] = useState([]);
  const [newDifficultWord, setNewDifficultWord] = useState([]);

  useEffect(async () => {
    const data = await getWords();
    setWords(data.data);
    const res = await getLearnedUserWords();
    setDifficultWords(
      res.data.filter((words) => "difficult" === words.difficulty)
    );

    setEasyWords(res.data.filter((words) => "easy" === words.difficulty));
    setDeletedWords(res.data.filter((words) => "delete" === words.difficulty));
  }, []);

  useEffect(() => {
    const resultDifficult = words.filter((o) =>
      difficultWords.find((o2) => o.id === o2.wordId)
    );

    setNewDifficultWord(resultDifficult);

    const resultDeleted = words.filter((o) =>
      deletedtWords.find((o2) => o.id === o2.wordId)
    );
    setNewDeletedWords(resultDeleted);

    const resultEasy = words.filter((o) =>
      easyWords.find((o2) => o.id === o2.wordId)
    );
    setNewEasyWords(resultEasy);
  }, [words, deletedtWords, easyWords, difficultWords]);

  return (
    <div className="container">
      <h1>Dictionary</h1>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            style={{ color: "black" }}
            className="nav-link active"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Learned words
          </button>
          <button
            style={{ color: "black" }}
            className="nav-link"
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Difficult words
          </button>
          <button
            style={{ color: "black" }}
            className="nav-link"
            id="nav-contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-contact"
            type="button"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Deleted
          </button>
        </div>
      </nav>

      {!newEasytWords.length ? (
        <div>
          <h6 className="m-4">loading...</h6>
        </div>
      ) : (
        <div>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              {newEasytWords.map((word) => (
                <DictionaryWords
                  key={word.id}
                  word={word}
                  firstButton="difficult"
                  secondButton="delete"
                />
              ))}
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              {newDifficultWord.map((word) => (
                <DictionaryWords
                  key={word.id}
                  word={word}
                  firstButton="easy"
                  secondButton="delete"
                />
              ))}
            </div>
            <div
              className="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              {newDeletedtWords.map((word) => (
                <DictionaryWords
                  key={word.id}
                  word={word}
                  firstButton="easy"
                  secondButton="difficult"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dictionary;
