import React from 'react';
import Directors from './components/directors';
import Movies from './components/movies';
import './App.css';

function App() {
  return (
    <div className="app">
      <Movies/>
      <Directors/>
    </div>
  );
}

export default App;
