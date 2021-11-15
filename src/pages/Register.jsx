import React, { useState } from "react";
import Input from "../components/Input";
import * as userService from "../services/userService";

function Register(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});

  function validate() {
    const errors = {};
    if (username.trim() === "") {
      errors.username = "Username is required";
    }
    if (password.trim() === "") {
      errors.password = "Password is required";
    }
    if (name.trim() === "") {
      errors.name = "Name is required";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const errors = validate();
    setErrors(errors || {});
    if (errors) return;
    await userService.register(name, username, password);
    window.location = "/";
    setUsername("");
    setPassword("");
    setName("");
  }

  function HandleChagePassword(e) {
    setPassword(e.target.value);
  }

  function HandleChageUsername(e) {
    setUsername(e.target.value);
  }
  function HandleChageName(e) {
    setName(e.target.value);
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-5 mt-5">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <Input
              name="name"
              label="Name"
              error={errors.name}
              value={name}
              onChange={HandleChageName}
            />
            <Input
              name="username"
              label="Username"
              error={errors.username}
              value={username}
              onChange={HandleChageUsername}
            />
            <Input
              name="password"
              label="Password"
              error={errors.password}
              value={password}
              onChange={HandleChagePassword}
            />
            <button
              disabled={validate()}
              type="submit"
              className="btn btn-primary mt-2"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
