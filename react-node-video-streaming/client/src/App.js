import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
// importing the 'Home' and 'Player' view components
import Home from './Home';
import Player from './Player';
import './App.css';

// Single video element where src is the route on our server that serves the sample video file
/* The terminal command yarn start (or npm start) starts a web server and opens the React
   application in your browser */
function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/player/:id" component={Player}></Route>
      </Switch>
    </Router>
  );
}

export default App;