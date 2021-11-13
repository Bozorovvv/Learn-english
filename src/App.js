import React from "react";
import { Switch, Route } from "react-router-dom";
import Dictionary from "./pages/Dictionary";
import Learning from "./pages/Learning";
import Login from "./pages/Login";
import MiniGames from "./pages/MiniGames";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import Statistics from "./pages/Statistics";
import Welcome from "./pages/Welcome";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/welcome" component={Welcome} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/learning" component={Learning} />
        <Route path="/dictionary" component={Dictionary} />
        <Route path="/mini-games" component={MiniGames} />
        <Route path="/statistics" component={Statistics} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
