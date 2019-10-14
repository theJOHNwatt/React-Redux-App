import React from 'react';
import PhotoGrid from './components/PhotoGrid';
import './App.scss';
import Logo from './logo.png'

function App() {
  return (
    <div className="App">
      <img src={Logo} />
      <h1>Random Question Generator!</h1>
      <PhotoGrid />
    </div>
  );
}

export default App;
