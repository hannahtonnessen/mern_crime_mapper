import './App.css';
import React, {useState, useEffect} from 'react';
import GoogleMap from './views/GoogleMap';
//import SearchBar from './views/SearchBar';
//import Test from './views/Test';
function App() {

  return (
    <div className="App" >
      {/* <SearchBar /> */}
      <GoogleMap placeName={'Reading'} />
      {/* <Test/> */}
      
    </div>
  );
}

export default App;
