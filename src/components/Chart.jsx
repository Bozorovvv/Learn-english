import React, { useContext, useState, useEffect } from "react";
import { UserLearnedContext } from "./../state/UserLearnedContext";
import { WordContext } from "./../state/WordContext";
import { Line } from "react-chartjs-2";

export function LineChart() {
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

  const data = {
    labels: ["easy", "Difficult", "Deleted"],
    datasets: [
      {
        label: allLearnedWords.length + " words",
        data: [
          newEasytWords.length,
          newDifficultWord.length,
          newDeletedtWords.length,
        ],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <h1 className="title"> Statistics</h1>
            <Line data={data} options={options} />
          </div>
        </div>
      </div>
    </>
  );
}

export default LineChart;
