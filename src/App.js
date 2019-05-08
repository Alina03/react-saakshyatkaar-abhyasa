import React, {Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Sform from './components/Sform';
import Audiorecord from './components/Audiorecord';
import Default from './components/Default';
import SignUpForm from './components/pages/SignUpForm';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/sform" component={Sform} />
        <Route path="/audiorecord" component={Audiorecord} />    
        <Route component={Default} />
      </Switch>
    </React.Fragment>
    
  );
}

export default App;


