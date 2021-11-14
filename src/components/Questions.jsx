import React from 'react'

function Questions({ words, CheckAnswer, isAnswered }) {
  console.log(words)
  return (
    <div className="card mt-4" style={{ width: '100%' }}>
      <img src="" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {isAnswered ? words[0].word + '-' : null}
          {words[0].wordTranslate}
        </h5>
        {isAnswered ? (
          <>
            <h6 className="card-text">
              - {words[0].textExample.replace(/(<([^>]+)>)/gi, '')}
            </h6>
            <h6 className="card-text">{words[0].textExampleTranslate}</h6>
            <p className="card-text">
              - {words[0].textMeaning.replace(/(<([^>]+)>)/gi, '')}
            </p>
            <p className="card-text">{words[0].textMeaningTranslate}</p>
          </>
        ) : (
          <>
            <h6 className="card-text">
              {words[0].textExample.replace(
                /(<([^>]+)>)alcohol(<([^>]+)>)./gi,
                ' [  ...  ] '
              )}
            </h6>
            <p className="card-text">
              {words[0].textMeaning.replace(
                /(<([^>]+)>)alcohol(<([^>]+)>)./gi,
                ' [  ...  ] '
              )}
            </p>
            <input
              autoFocus
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
          </>
        )}
      </div>
    </div>
  )
}

export default Questions
