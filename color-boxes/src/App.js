import React from 'react';
import logo from './logo.svg';
import './App.css';
import ColorBoxes from './ColorBoxes'

function App() {
  return (
    <div className="App">
      <h1>Color Boxes</h1>
      <div className="boxes-container">
        <ColorBoxes maxBoxes={8} key={737}/>
      </div>
    </div>
  );
}

export default App;
