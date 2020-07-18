import React from 'react';
import Homepage from './components/Homepage/Homepage';
import Nav from './components/Navigation/nav';
import './App.css';

function App() {
  return (
    <div className='app-container'>
      <div className='nav-content'>
        <Nav />
      </div>
      <div className='home-content'>
        <Homepage />
      </div>
    </div>

  );
}

export default App;
