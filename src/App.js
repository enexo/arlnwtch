import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Quotes from './components/Quotes';
import Metrics from './components/Metrics';
import About from './components/About';
import News from './components/News';
import Alaska from './components/Alaska';
import American from './components/American';
import Delta from './components/Delta';
import JetBlue from './components/JetBlue';
import Southwest from './components/Southwest';
import United from './components/United';

//Import CSS, Including Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './App.css';

function App() {
  return (
    <Router>
      <Header/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/news' component={News}/>
        <Route exact path='/quotes' component={Quotes}/>
        <Route exact path='/metrics' component={Metrics}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/alaska' component={Alaska}/>
        <Route exact path='/american' component={American}/>
        <Route exact path='/delta' component={Delta}/>
        <Route exact path='/jetblue' component={JetBlue}/>
        <Route exact path='/southwest' component={Southwest}/>
        <Route exact path='/united' component={United}/>
    </Router>
  );
}

export default App;
