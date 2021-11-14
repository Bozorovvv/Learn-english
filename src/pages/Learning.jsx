import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Questions from '../components/Questions'
import { getWords } from '../services/getWords'

function Learning() {
  const [words, setWords] = useState([])
  const [isLearning, setIsLearning] = useState(false)
  const [isAnswered, setIsAnswered] = useState(false)

  useEffect(() => {
    ;(async function fetchWords() {
      const res = await getWords()
      setWords(res.data)
    })()
  }, [])

  function StartLearn() {
    setIsLearning(!isLearning)
  }
  function CheckAnswer() {
    setIsAnswered(!isAnswered)
  }

  return (
    <div className="container-fluid">
      {isLearning ? (
        <>
          <div className="row">
            <div className="col text-center mt-2">
              <h1>Learning just now</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-5 justify-content-center">
              <Questions
                words={words}
                CheckAnswer={CheckAnswer}
                isAnswered={isAnswered}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="row">
            <div className="col">
              <h4 className="text-center my-5">
                Today you learned {words.length} words
              </h4>
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
