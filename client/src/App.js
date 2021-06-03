import './App.css';
import React, {useState, useEffect} from 'react';
import Reading from './views/Reading';
import { Router } from '@reach/router';
import SFOMap from './views/SFOMap';
import SEA from './views/SEA';
import LA from './views/LA';
import { makeStyles } from '@material-ui/core/styles';
import Typical from 'react-typical';
function App() {
console.log(process.env.REACT_APP_GOOGLEMAPS_API_KEY)
console.log(process.env)
const useStyles = makeStyles({
  app:{
    minHeight:"100vh",
    minWidth:"970px",
    backgroundColor : "rgb(243,241,242)"
  }
})
const classes = useStyles();
  return (

    
    <div className={classes.app} >
      {/* backgroundImage : "linear-gradient(to right top, #a2adbe, #8c9eb3, #7490a8, #5a829c, #3d7490)" */}
      <header style = {{
backgroundColor: "#000000",
backgroundImage: "linear-gradient(147deg, #000000 0%, #04619f 74%)",
      minHeight : "90px", 
      minWidth : '270px', 
      borderRadius : "5px",
      marginBottom : "20px",}}>
        {/* <h1 style ={{color : "white", 
        paddingTop : "25px", 
        marginLeft : "20px"}}>Crime Mapper</h1> */}
        <h1 style={{color: "white", 
        fontFamily : "Lucida Console", 
        paddingTop : "25px", 
        marginLeft : "20px",
        //textShadow: "2px 2px grey"
        }}>
          <Typical 
            loop={Infinity}
            wrapper="b"
            steps={[
              'Crime Mapper',
              2
            ]}
          />

          </h1>
      </header>
      <div className={classes.app}>
        {/* <SearchBar /> */}
        <Router>
          <SFOMap path="/"  placeName={'San Francisco'}/>
          <Reading path ="/reading" placeName={'Reading'} />
          <SEA path="/seattle"  placeName={'Seattle'}/>
          <LA path="/la"  placeName={'Los Angeles'}/>
       </Router>
      </div>
  </div>
  );
}

export default App;
