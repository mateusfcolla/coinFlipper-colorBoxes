import React from 'react';
import logo from './logo.svg';
import './App.css';
import ColorBoxes from './ColorBoxes'

function App() {
  return (
    <div className="App">
      <h1>Color Boxes</h1>
      <ColorBoxes maxBoxes={8}/>
    </div>
  );
}

export default App;
