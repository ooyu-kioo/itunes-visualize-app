import React from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios'
import Button from '@material-ui/core/Button'


function App() {

  const handleClick = () => {
    axios.get("http://localhost:3000/api/home", {
      headers: {
        "Accept": "Application/json"
      }
    })
      .then((res) => {
        console.log(res);
      })
      .catch(console.error);


  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>

        <Button variant="contained" color="primary" onClick={handleClick}>Default</Button>

      </header>
    </div>
  );
}

export default App;
