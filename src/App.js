import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Dictionary from "./pages/Dictionary";
import Learning from "./pages/Learning";
import Login from "./pages/Login";
import MiniGames from "./pages/MiniGames";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import Statistics from "./pages/Statistics";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Logout from "./components/Logout";
import getUser from "./services/userService";
import { WordContext } from "./state/WordContext";
import { UserLearnedContext } from "./state/UserLearnedContext";
import { getWords } from "./services/wordsService";
import { getLearnedUserWords } from "./services/wordsService";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  const [words, setWords] = useState([]);
  const [allLearnedWords, setAllLearnedWords] = useState([]);

  useEffect(async () => {
    try {
      const response = await getUser();
      const name = response.data.name;
      setUserName(name);
      const res = await getWords();
      setWords(res.data);
      const data = await getLearnedUserWords();
      setAllLearnedWords(data.data);
    } catch (ex) {}
  }, []);

  return (
    <WordContext.Provider value={words}>
      <UserLearnedContext.Provider value={allLearnedWords}>
        <React.Fragment>
          <Navbar userName={userName} />
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/learning" component={Learning} />
            <Route path="/dictionary" component={Dictionary} />
            <Route path="/mini-games" component={MiniGames} />
            <Route path="/statistics" component={Statistics} />
            <Route path="/settings" component={Settings} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/login" />
            <Redirect to="/not-found" />
          </Switch>
        </React.Fragment>
      </UserLearnedContext.Provider>
    </WordContext.Provider>
  );
}

export default App;
