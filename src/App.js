import React from 'react';
import './App.css';
// import Dashboard from './components/Dashboard/Dashboard';
// import Wizard from './components/Wizard/Wizard';
import Header from './components/Header/Header';
import routes from '../src/routes';
import {HashRouter} from 'react-router-dom'
import axios from 'axios'

function App() {
  return (
    <HashRouter>
    <div className="App">
      <Header/>
      { routes }
    </div>
    </HashRouter>
  );
}

export default App;
