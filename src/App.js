import React from 'react';
import Navbar from './navbar/';
import Header from './header/';
import SecA from './secA/';
import SecB from './secB/';
import SecC from './secC/';
import SecD from './secD/';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <SecA/>
      <SecB/>
      <SecC/>
      <SecD/>
    </div>
  );
}

export default App;
