import logo from './logo.svg';
import './App.css';
import React from 'react';
import {frontEnd} from './frontend.js'

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'John Doe' };
  }

  render() {
    return (
      <div>
        <p>Hello, {this.state.name}</p>
      </div>
    );
  }
}


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

      <MyComponent />
    </div>


  );
}

export default App;
