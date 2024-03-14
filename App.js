

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import HomePage from './HomePage';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {

    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/login">
            <LoginForm onLogin={handleLogin} />
          </Route>
          <Route path="/home">
            {isLoggedIn ? (
              <HomePage onLogout={handleLogout} />
            ) : (
              <div>
                <p>Please login to access the homepage.</p>
                <Link to="/login">Login</Link>
              </div>
            )}
          </Route>
          <Route path="/">
            <p>Welcome to the app!</p>
            <Link to="/login">Login</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
