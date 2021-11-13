import React from 'react'

function Question({ CheckAnswer, isCorrectAnswer }) {
  return (
    <div className="card" style={{ width: '30rem' }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">cat - кошка</h5>
        {isCorrectAnswer ? (
          <>
            <h6 className="card-text">
              Some quick example text to build on the card title and make up.
            </h6>
            <h6 className="card-text">
              Some quick example text to build on the card title and make up.
            </h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up.
            </p>
            <p className="card-text">
              Some quick example text to build on the card title and make up.
            </p>
          </>
        ) : (
          <>
            <h6>Question ... about the word</h6>
          </>
        )}
      </div>
      <input
        type="text"
        class="form-control border-0"
        id="inputEmail3"
        placeholder="Answer here.."
      />

      <div className="card-body">
        <button onClick={() => CheckAnswer()} className="btn btn-primary">
          Next
        </button>
      </div>
    </div>
  )
}

export default Question
