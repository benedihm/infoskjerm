import React from 'react';
import './App.css';
import Reddit from "./reddit";
import Bikes from "./bikes";
import Clock from "./clock";

const App = () => {
  return (
    <div className="App">
      <h1>Infoskjerm</h1>
      <Reddit />
      <Bikes />
      <Clock />
    </div>
  );
}

export default App;
