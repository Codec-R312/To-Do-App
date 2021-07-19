import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDQAuAZV-JKsVFs61yP6ckh7fLfDrZaxhM',
  authDomain: 'to-do-app-rs.firebaseapp.com',
  projectId: 'to-do-app-rs',
  storageBucket: 'to-do-app-rs.appspot.com',
  messagingSenderId: '150456359982',
  appId: '1:150456359982:web:88542022188aefe58b93bf',
  measurementId: 'G-BX3LGGCV7P'
};

const fb = firebase.initializeApp(firebaseConfig);

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <SignUp />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>

      <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form>
          <label>
            <h3>Username/Email</h3>
            <input type="text" />
          </label>
          <label>
            <h3>Password</h3>
            <input type="password" />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function SignUp() {
  return (
    <div>
      <h2>Sign Up</h2>
      <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form>
          <label>
            <h3>Username/Email</h3>
            <input type="text" />
          </label>
          <label>
            <h3>Password</h3>
            <input type="password" />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>


    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Landing Page</h2>
    </div>
  );
}
