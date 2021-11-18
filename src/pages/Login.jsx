import React, { useState } from "react";
import Input from "../components/Input";
import { login } from "../services/authService";

function Login({ history }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  function validate() {
    const errors = {};
    if (username.trim() === "") {
      errors.username = "Username is required";
    }
    if (password.trim() === "") {
      errors.password = "Password is required";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await login(username, password);
    window.location = "/learning";
    const errors = validate();
    setErrors(errors || {});
    if (errors) return;
    setUsername("");
    setPassword("");
  }

  function HandleChagePassword(e) {
    setPassword(e.target.value);
  }

  function HandleChageUsername(e) {
    setUsername(e.target.value);
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-5 mt-5">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <Input
              autoFocus="true"
              type="text"
              name="username"
              label="Username"
              error={errors.username}
              value={username}
              onChange={HandleChageUsername}
            />
            <Input
              type="password"
              name="password"
              label="Password"
              error={errors.password}
              value={password}
              onChange={HandleChagePassword}
            />
            <button
              disabled={validate()}
              type="submit"
              className="btn btn-info mt-2"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
