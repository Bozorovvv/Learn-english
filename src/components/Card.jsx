import React from "react";

function Card({ label, text, StartLearn, words, name }) {
  return (
    <div className="card text-center shadow-sm p-3 mb-5 bg-white rounded">
      <h5 className="card-header">{label}</h5>
      <div className="card-body">
        <p className="card-text">{text}</p>
        <button onClick={StartLearn} className="btn btn-outline-info ">
          Let`s start
        </button>
        <h6 className="mt-2">
          {words.length} {name} words
        </h6>
      </div>
    </div>
  );
}

export default Card;
