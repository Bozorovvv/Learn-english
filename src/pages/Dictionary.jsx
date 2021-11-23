import React, { useContext, useState, useEffect } from "react";
import DictionaryWords from "../components/DictionaryWords";
import { WordContext } from "./../state/WordContext";
import { UserLearnedContext } from "./../state/UserLearnedContext";
import TabButton from "../components/TabButton";

function Dictionary() {
  const words = useContext(WordContext);
  const allLearnedWords = useContext(UserLearnedContext);
  const [difficultWords, setDifficultWords] = useState([]);
  const [easyWords, setEasyWords] = useState([]);
  const [deletedtWords, setDeletedWords] = useState([]);
  const [newDeletedtWords, setNewDeletedWords] = useState([]);
  const [newEasytWords, setNewEasyWords] = useState([]);
  const [newDifficultWord, setNewDifficultWord] = useState([]);

  useEffect(() => {
    setDifficultWords(
      allLearnedWords.filter((words) => "difficult" === words.difficulty)
    );

    setEasyWords(
      allLearnedWords.filter((words) => "easy" === words.difficulty)
    );
    setDeletedWords(
      allLearnedWords.filter((words) => "delete" === words.difficulty)
    );
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
      <h1 className="text-center">Dictionary</h1>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <TabButton
            label="Learned words"
            active=" active"
            name="home"
            selected="true"
          />
          <TabButton
            label="Difficult words"
            active=""
            name="profile"
            selected="false"
          />
          <TabButton
            label="Deleted"
            active=""
            name="contact"
            selected="false"
          />
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
