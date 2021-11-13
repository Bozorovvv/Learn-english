import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Question from '../components/Question'

function Learning() {
  const [isLearning, setIsLearning] = useState(false)
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false)

  function StartLearn() {
    setIsLearning(!isLearning)
  }
  function CheckAnswer() {
    setIsCorrectAnswer(!isCorrectAnswer)
  }
  return (
    <div className="container-fluid">
      {isLearning ? (
        <>
          <div className="row">
            <div className="col text-center">
              <h1>Learning just now</h1>

              <Question
                CheckAnswer={CheckAnswer}
                isCorrectAnswer={isCorrectAnswer}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="row">
            <div className="col">
              <h4 className="text-center my-5">Today you learned 5 words</h4>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: '25%' }}
                  aria-valuenow="5"
                  aria-valuemin="0"
                  aria-valuemax="20"
                >
                  5/20
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <div className="card text-center">
                <h5 className="card-header">New words</h5>
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <button onClick={StartLearn} className="btn btn-primary">
                    Let`s start
                  </button>
                  <h6 className="mt-2">You haven`t learned words</h6>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card text-center">
                <h5 className="card-header">Repeat words</h5>
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <Link to="/learning" className="btn btn-primary">
                    Let`s start
                  </Link>
                  <h6 className="mt-2">You haven`t learned words</h6>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card text-center">
                <h5 className="card-header">Difficult words</h5>
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <Link to="/learning" className="btn btn-primary">
                    Let`s start
                  </Link>
                  <h6 className="mt-2">You haven`t learned words</h6>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Learning
