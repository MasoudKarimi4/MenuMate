

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

    // each class can divide the HTML into other parts - MK
    <mainPart />
  );
}

class mainPart extends React.Component() {
  render() {
    return(
      <div className="App">
      <header className="App-header">
        <p>
          Menu Mate <br></br>Submission for McHacks 2023

        </p>

      </header>
    </div>
    )
}}

export default App;

