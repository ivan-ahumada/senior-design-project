import react from 'react';
import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from'./components/pages/Home';
import Features from './components/pages/Features';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Faqs from './components/pages/faq';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/home' exact component= {Home} />
        <Route path='/features' component= {Features} />
        <Route path='/sign-in' component= {SignIn} />
        <Route path='/sign-up' component= {SignUp} />
        <Route path='/faq' component= {Faqs} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
