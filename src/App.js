import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import User from './components/users/User'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import axios from 'axios'

import GithubState from './context/github/githubState'

import './App.css';

const App = () => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({ message, type })
    setTimeout(() => setAlert(null), 3000)
  } 
    
  return (
    <GithubState>
      <Router>
      <div className="App">
        <Navbar title="GithubBook"/>
        <div className="container">
          <Alert alert={alert}/>
          <Switch>
            <Route exact path='/' render={props => (
              <>
                <Search 
                  showClear={users.length > 0 ? true : false }
                  setAlert={showAlert}
                />
                <Users loading={loading} users={users} />
              </>
            )} />
            <Route exact path='/about' component={About} />
            <Route exact path='/user/:login' render={props => (
              <User 
                { ...props } 
                user={user} 
                repos={repos}
                loading={loading} 
              />
            )} />
          </Switch>
        </div>
      </div>
      </Router>
    </GithubState>
  );
}

export default App;
