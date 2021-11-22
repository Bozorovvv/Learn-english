import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { getUserId } from "../services/userService";
import { getUserStatistics } from "../services/wordsService";

export function LineChart() {
  const [learnedWordsStatistics, setLearnedWordsStatistics] = useState("");

  useEffect(async () => {
    const userId = await getUserId();
    const learnedWords = await getUserStatistics(userId);
    setLearnedWordsStatistics(learnedWords);
  }, []);

  console.log(learnedWordsStatistics);

  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [
      {
        // label: learnedWordsStatistics.data.learnedWords + " words",
        data: [12, 19, 3, 5, 2, 3, 55, 105],
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
