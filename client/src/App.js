@@ -1,9 +1,41 @@
import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react';
import {frontEnd} from './frontend.js'
import cors from 'cors';

const Test = () => {
  const [value, setValue] = useState(undefined);

  
  
  const getValue = async () => {
    console.log("it worked")
    try {
      const response = await fetch('http://localhost:5000/my-endpoint');
      const data = await response.json();
      setValue(data);
      console.log("Trying to fetch data")
      console.log(data)
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div>
      <button onClick={getValue}>Get Value</button>
      <p>yo</p>

      {value && <p>Value: {value}</p>}
    </div>
  );
}

class MyComponent extends React.Component {


  constructor(props) {
    super(props);
    this.state = { name: 'John Doe' };
@ -22,23 +54,33 @@ class MyComponent extends React.Component {
function App() {



  return (
    <div className="App">
      <header className="App-header">
        
      <body>
      <div className='Title'>
        MenuMate.
      </div>
      <div className='Subtitle'>
        Finding a good meal <br></br> Just got better.
      </div>
      <div className='MainText'>
        Welcome to MenuMate, your number one provider focused on evaluating the best restaurants for you. With the click of a button, MenuMate scoures and assembles data from various sources to provide you with the most up-to-date and accurate information on the restaurants in your area. Browse through our database and find your perfect meal today!
      </div>
      <div className='SearchText'>
        <br></br> Use the search bar below to find your next meal today!
      </div>
      <div className='SearchBar'>
        <form class="search" action="">
          <input type="search" placeholder="Search here..." required/>
            <button type="submit">Search</button>
        </form>

      </div>
    < Test />
  </body>
      </header>


    </div>


@ -46,3 +88,5 @@ function App() {
}

export default App;
