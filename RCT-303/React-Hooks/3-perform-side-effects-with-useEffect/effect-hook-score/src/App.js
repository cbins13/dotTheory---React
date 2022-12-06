import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [ message ] = useState('Welcome!');
  const [data, setData] = useState('');

  useEffect(()=>{
    console.log('useEffect called!');
    document.title = `${message}. Your score is ${score}`;
  },[score,message])

  useEffect(()=>{
    fetch('https://dog.ceo/api/breeds/image/random').then(res=> res.json()).then(data => setData(data.message)).catch(err=> console.log("Oh noes!", err));
  },[])

  return(
    <div className="App">
      <header className="App-header">
        <h1>{ message}</h1>
        <h2>{ score }</h2>
        <button onClick={() => setScore(prevScore => prevScore + 1)}>
          Increase score
        </button>
        <button onClick={() => setScore(prevScore => prevScore - 1)}>
          Decrease score
        </button>
        <button onClick={() => setScore(0)}>
          Reset score
        </button>
      </header>
      <main>
        <img src={data} alt="dog"></img>
      </main>
    </div>
  );
}

export default App;
