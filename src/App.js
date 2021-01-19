import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Quotes from './components/Quotes';
import Metrics from './components/Metrics';
import About from './components/About';

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
        <Route exact path='/quotes' component={Quotes}/>
        <Route exact path='/metrics' component={Metrics}/>
        <Route exact path='/about' component={About}/>
    </Router>
  );
}

export default App;
