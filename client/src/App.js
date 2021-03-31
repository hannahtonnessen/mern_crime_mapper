import './App.css';
import React, {useState, useEffect} from 'react';
import GoogleMap from './views/GoogleMap';
//import SearchBar from './views/SearchBar';
function App() {
  const[crime, setCrime] = useState('');
  return (
    <div className="App" >
      {/* <SearchBar /> */}
      <GoogleMap placeName={'Reading'} crime={crime} setCrime={setCrime}/>
      
    </div>
  );
}

export default App;
