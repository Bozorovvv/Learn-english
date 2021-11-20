import React, { useState, useEffect } from "react";
import { getWords } from "../services/wordsService";
import { getLearnedUserWords } from "../services/wordsService";

function Dictionary() {
  const [words, setWords] = useState([]);
  const [difficultWords, setDifficultWords] = useState([]);
  const [easyWords, setEasyWords] = useState([]);
  const [deletedtWords, setDeletedWords] = useState([]);
  const [newDeletedtWords, setNewDeletedWords] = useState([]);
  const [newEasytWords, setNewEasyWords] = useState([]);
  const [newDifficultWord, setDifficultWord] = useState([]);

  useEffect(() => {
    (async function fetchWords() {
      const res = await getWords();
      setWords(res.data);
    })();
    (async function fetchUserWords() {
      const res = await getLearnedUserWords();
      setDifficultWords(
        res.data.filter((words) => "difficult" === words.difficulty)
      );
      setEasyWords(res.data.filter((words) => "easy" === words.difficulty));
      setDeletedWords(
        res.data.filter((words) => "delete" === words.difficulty)
      );
    })();

    const resultDifficult = words.filter((o) =>
      difficultWords.find((o2) => o.id === o2.wordId)
    );
    setDifficultWord(resultDifficult);

    const resultDeleted = words.filter((o) =>
      deletedtWords.find((o2) => o.id === o2.wordId)
    );
    setNewDeletedWords(resultDeleted);

    const resultEasy = words.filter((o) =>
      easyWords.find((o2) => o.id === o2.wordId)
    );
    setNewEasyWords(resultEasy);
  }, []);

  return (
    <div className="container">
      <h1>Dictionary</h1>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
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
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <h4>Learned words</h4>
        </div>
        <div
          className="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          <h4>Difficult words</h4>
        </div>
        <div
          className="tab-pane fade"
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
        >
          <h4>Deleted words</h4>
        </div>
      </div>
    </div>
  );
}

export default Dictionary;
