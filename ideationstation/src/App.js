import logo from './logo.svg';
import './App.css';
import Stars from './Stars';

function App() {


  // upon loading the app we will load all "thoughts" into this page



  // 1. upon submitting the the thought, make a request to the API to summarize the thought 
  // 2. use the result of the summarize to tag the thought 
  // 3. show the tags 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
