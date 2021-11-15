import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Dictionary from "./pages/Dictionary";
import Learning from "./pages/Learning";
import Login from "./pages/Login";
import MiniGames from "./pages/MiniGames";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import Statistics from "./pages/Statistics";
import Welcome from "./pages/Welcome";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Logout from "./components/Logout";
import getUser from "./services/userService";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  useEffect(async () => {
    try {
      const response = await getUser();
      const name = response.data.name;
      setUserName(name);
    } catch (ex) {}
  }, []);

  return (
    <React.Fragment>
      <Navbar userName={userName} />
      <Switch>
        <Route path="/welcome" component={Welcome} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/learning" component={Learning} />
        <Route path="/dictionary" component={Dictionary} />
        <Route path="/mini-games" component={MiniGames} />
        <Route path="/statistics" component={Statistics} />
        <Route path="/settings" component={Settings} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="welcome" />
        <Redirect to="/not-found" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
