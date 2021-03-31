import './App.css';
import React, {useState, useEffect} from 'react';
import GoogleMap from './views/GoogleMap';
import SearchBar from './views/SearchBar';
function App() {
  const[crime, setCrime] = useState('');
  return (
    <div className="App" >
      <SearchBar crime={crime} setCrime={setCrime}/>
      <GoogleMap placeName={'Reading'}/>
      
    </div>
  );
}

export default App;
