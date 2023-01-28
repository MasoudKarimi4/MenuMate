import logo from './logo.svg';
import './App.css';
import React from 'react';
import {frontEnd} from './frontend.js'

function App() {


  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          MenuMate <br></br> McHacks 2023
        </p>
      </header>


      <frontEnd />
    </div>


  );
}

export default App;
