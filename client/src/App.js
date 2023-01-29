import logo from './logo.svg';
import './App.css';
import React from 'react';
import {frontEnd} from './frontend.js'
<<<<<<< HEAD
<<<<<<< HEAD
import cors from 'cors';
import { restaurants } from './list';
import axios from 'axios';

const Test = () => {
  const [value, setValue] = useState(undefined);
  
  /*const getValue = async () => {
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
  }*/
  const getValue = async (variable) => {
    console.log("it worked")
    try {
      const response = await fetch(`http://localhost:5000/my-inpoint/${variable}`);
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
      <button onClick={getValue()}>Get Value</button>

      {value && <p>Value: {value}</p>}
    </div>
  );
}
=======
>>>>>>> parent of be27ede (IT WORKED)

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [options, setOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);


    
  const [value, setValue] = useState(undefined);



  const getValue = async () => {
    console.log("it worked")
    try {
      const response = await fetch(`http://localhost:5000/my-inpoint}`);
      const data = await response.json();
      setValue(data);
      console.log("Trying to fetch data")
      console.log(data)
    } catch (err) {
      console.log(err);
    }
=======

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'John Doe' };
>>>>>>> parent of be27ede (IT WORKED)
  }

  const handleSearch = (e) => {
      setSearchTerm(e.target.value);
  }

  const handleClick = () => {
      setShowOptions(true);
      setOptions(restaurants);
  }

  const route = (value) => {
    axios.post('/my-inpoint', {var: value})
    .then(response => {
      console.log(response.data)
    })
  }

  const handleOptionClick = (option) => {
      // Trigger function specific to selected option
      console.log(`Option clicked: ${option}`);
      route(option);
  }

  return (
    <div>
    <input type="search" placeholder="Search..." onChange={handleSearch} value={searchTerm} />
    <button onClick={handleClick}>Search</button>
    {searchTerm.length > 0 && showOptions && <ul>
        {options.map((option,index) => (
            option.toLowerCase().includes(searchTerm.toLowerCase()) &&
            <li key={index} onClick={() => handleOptionClick(option)}>{option}</li>
        ))}
    </ul>}
</div>
  );
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
<<<<<<< HEAD
<<<<<<< HEAD
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


      <SearchBar/>
    < Test />
  </body>
=======
        <p>
          MenuMate <br></br> McHacks 2023
        </p>
>>>>>>> parent of be27ede (IT WORKED)
=======
        <p>
          MenuMate <br></br> McHacks 2023
        </p>
>>>>>>> parent of be27ede (IT WORKED)
      </header>

      <MyComponent />
    </div>


  );
}

export default App;
