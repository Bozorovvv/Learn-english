import React from "react";
import { apiUrl } from "../config.json";

function DictionaryWords({ word, firstButton, secondButton }) {
  return (
    <div className="card-body shadow-sm rounded d-flex justify-content-between align-items-center m-2">
      <div className="d-flex justify-content-between align-items-center">
        <img
          style={{ width: "70px" }}
          src={apiUrl + "/" + word.image}
          className="d-inline-block mx-2"
          alt="..."
        />
        <div>
          <h6 className="mx-2"> {word.word}</h6>
          <h6 className="mx-2 text-info"> {word.wordTranslate}</h6>
        </div>
      </div>
      <div>
        <button className="btn btn-outline-info mx-2">{firstButton}</button>
        <button className="btn btn-outline-danger">{secondButton}</button>
      </div>
    </div>
  );
}

export default DictionaryWords;
