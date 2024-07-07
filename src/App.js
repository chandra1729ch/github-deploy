import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Heart from 'react-animated-heart';

function App() {
  const [isClick, setClick] = useState(false);
  return (
    <div className="App">
      <h1 color='green'> Welcome to the CHANDU <Heart className="heart-align" isClick={isClick} onClick={() => setClick(!isClick)} /> MOUNI to GitHubPages</h1>
    </div>
  );
}

export default App;
