import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Dictionary from './pages/Dictionary'
import Learning from './pages/Learning'
import Login from './pages/Login'
import MiniGames from './pages/MiniGames'
import Register from './pages/Register'
import Settings from './pages/Settings'
import Statistics from './pages/Statistics'
import Welcome from './pages/Welcome'
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/welcome" component={Welcome} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
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
  )
}

export default App
