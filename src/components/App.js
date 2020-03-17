import React from 'react';
import '../styles/App.css';
import appStyles from '../styles/appStyles.module.sass'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>2048</h1>
        <p>Game inspired by the widely known game</p>
      </header>
      <main className={appStyles.gameBoard}>

      </main>
    </div>
  );
}

export default App;
