import React from "react";

function Modal({ currentIndex }) {
  return (
    <div className="row justify-content-center mt-5 text-center">
      <div className="jumbotron col-4">
        <h1 className="display-4">You've learned {currentIndex+1} words</h1>
        <p className="lead">Game is over</p>
        <hr className="my-4" />
        <p className="text-center">back to Learning page</p>
        <button
          onClick={() => (window.location = "/learning")}
          type="button"
          className="btn btn-info text-dark"
        >
          Learn more
        </button>
      </div>
    </div>
  );
}

export default Modal;
