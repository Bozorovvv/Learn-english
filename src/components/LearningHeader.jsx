import React, { useContext } from "react";
import ProgressBar from "../components/ProgressBar";
import { UserLearnedContext } from "./../state/UserLearnedContext";

function LearningHeader() {
  const allLearnedWords = useContext(UserLearnedContext);

  return (
    <React.Fragment>
      <h1 className="text-center my-5">Let's start learning!</h1>
      <div className="card shadow-sm p-3 mb-5 bg-white rounded">
        <div className="card-body">
          <h4 className="text-center my-3">
            Today you've learned
            <span className="text-info mx-2">{allLearnedWords.length} </span>
            words
          </h4>
          <ProgressBar />
        </div>
      </div>
    </React.Fragment>
  );
}

export default LearningHeader;
