import React, { useContext } from "react";
import { UserLearnedContext } from "./../state/UserLearnedContext";
import { WordContext } from "./../state/WordContext";

function ProgressBar() {
  const words = useContext(WordContext);
  const allLearnedWords = useContext(UserLearnedContext);
  return (
    <div className="progress">
      <div
        className="progress-bar bg-info text-dark"
        role="progressbar"
        style={{
          width: `${(allLearnedWords.length / words.length) * 100}%`,
        }}
        aria-valuenow={allLearnedWords.length}
        aria-valuemin="0"
        aria-valuemax="20"
      >
        {allLearnedWords.length + "/" + words.length}
      </div>
    </div>
  );
}

export default ProgressBar;
