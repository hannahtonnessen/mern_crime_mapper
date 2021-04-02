import './App.css';
import React, {useState, useEffect} from 'react';
import GoogleMap from './views/GoogleMap';
import { Router } from '@reach/router';
import SFOMap from './views/SFOMap';
import SEA from './views/SEA';
import LA from './views/LA';
//import SearchBar from './views/SearchBar';
//import Test from './views/Test';
function App() {
console.log(process.env.REACT_APP_GOOGLEMAPS_API_KEY)
console.log(process.env)
  return (
    <div style = {{width : "970px", 
    margin : "0px auto", 
    //outline : "red dotted", 
    backgroundColor: "#f5f5f5"}}>
      <header style = {{backgroundImage : "linear-gradient(to right top, #a2adbe, #8c9eb3, #7490a8, #5a829c, #3d7490)", 
      height : "70px", 
      width : '970px', 
      borderRadius : "5px"}}>
        <h1 style ={{color : "white", 
        paddingTop : "10px", 
        marginLeft : "20px"}}>Crime Mapper</h1>
      </header>
      <div className="App" style = {{display : "flex", justifyContent: "space-evenly"}} >
        {/* <SearchBar /> */}
        <Router>
          <SFOMap path="/"  placeName={'San Francisco'}/>
          <GoogleMap path ="/Reading" placeName={'Reading'} />
          <SEA path="/Seattle"  placeName={'Seattle'}/>
          <LA path="/LA"  placeName={'Los Angeles'}/>
       </Router>
        {/* <Test/> */}
        <div style = {{marginTop : '20px', 
        marginLeft : "15px", 
        height: "700px", 
        width : "200px", 
        backgroundImage : "linear-gradient(to right top, #a2adbe, #8c9eb3, #7490a8, #5a829c, #3d7490)", 
        color : "white", 
        borderRadius : "10px", 
        paddingRight : "20px",
        overflowY : "scroll"
        }}>
          <h3>Search Terms</h3>
            <ul>
              <li>Arson</li>
              <li>Robbery</li>
              <li>Burglary</li>
              <li>Drunkenness</li>
              <li>Alarms</li>
              <li>Vandalism</li>
              <li>Drugs/Alcohol Violations</li>
              <li>Assault-Harassment Physical</li>
              <li>Robbery-Strong Arm Highway</li>
              <li>Fraud</li>
              <li>Homicide</li>
              <li>Criminal Mischief Vehicle</li>
              <li>Disturbing the Peace</li>
              <li>Assault</li>
              <li>Theft of Services</li>
              <li>Theft/Larceny</li>
              <li>Vehicle Theft</li>
              <li>Motor Vehicle Theft</li>
              <li>Weapons</li>
              <li>DUI</li>
              <li>Assault-Knife Non Officer</li>
              <li>Burglary-Force</li>
              <li>Assault-Harrassment Phys Contact</li>
              <li>Assault-Non.Agg Simple Aslt</li>
              <li>Assault-Harassment Phys Contact</li>
              <li>Criminal Mischief Residence</li>

            </ul>
          </div>
      </div>
  </div>
  );
}

export default App;
