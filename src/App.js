import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Dashboard/>
      <Wizard/>
      <Header/>
    </div>
  );
}

export default App;
