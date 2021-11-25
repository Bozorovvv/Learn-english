import React, { useState } from "react";
import Input from "../components/Input";
import * as userService from "../services/userService";

function Register({ history }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [passwordErrors, setPasswordErrors] = useState();
  const [userErrors, setUserErrors] = useState();
  const [nameErrors, setNameErrors] = useState();
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
    try {
      const errors = validate();
      setErrors(errors || {});
      if (errors) return;
      await userService.register(name, username, password);
      history.push("/login");

      setUsername("");
      setPassword("");
      setName("");
    } catch (err) {
      if (err.response.status === 417) {
        setUserErrors("User with this email exists");
      }
      if (err.response.status === 422) {
        setPasswordErrors("Password length must be at least 8 characters long");
      }
    }
  }

  function HandleChagePassword(e) {
    if (e.target.value !== "") setPasswordErrors(false);
    setPassword(e.target.value);
  }

  function HandleChageUsername(e) {
    if (e.target.value !== "") setUserErrors(false);
    setUsername(e.target.value);
  }
  function HandleChageName(e) {
    if (e.target.value !== "") setNameErrors(false);
    setName(e.target.value);
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6 mt-5">
          <div
            class="bg-image"
            style={{
              backgroundImage:
                "url('https://tv-english.club/wp-content/uploads/2016/04/studyingenglish.jpg')",
              height: "400px",
              width: "100%",
            }}
          ></div>
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <Input
              autoFocus={true}
              name="name"
              label="Name"
              error={nameErrors}
              value={name}
              onChange={HandleChageName}
            />
            <Input
              name="username"
              label="Username"
              error={userErrors}
              value={username}
              onChange={HandleChageUsername}
            />
            <Input
              name="password"
              label="Password"
              error={passwordErrors}
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
