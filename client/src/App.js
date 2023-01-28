import logo from './logo.svg';
import './App.css';
import React from 'react';

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
          Menu Mate <br></br>Submission for McHacks 2023

        </p>

      </header>
    </div>
  );
}

export default App;
