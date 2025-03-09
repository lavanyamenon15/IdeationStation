import './App.css';
import FilterTag from './FilterTag.js';
import SearchBar from './SearchBar.js';
import Stars from './Stars.js';

function App() {


  // upon loading the app we will load all "thoughts" into this page



  // 1. upon submitting the the thought, make a request to the API to summarize the thought 
  // 2. use the result of the summarize to tag the thought 
  // 3. show the tags 

  return (
    <div className="App">
      <SearchBar></SearchBar>
      <FilterTag></FilterTag>
      <Stars></Stars> 
    </div>
  );
}

export default App;
