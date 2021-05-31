
import React, {useRef, useEffect, useState} from 'react';
import axios from 'axios';
import Radium from 'radium';
import { Link  } from '@reach/router';
import GoogleMapReact from 'google-map-react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button
} from "@material-ui/core";
const google = window.google;
let googleMap;


const GoogleMap = ({ placeName }) => {
  //console.log('test')
  const googleMapRef = useRef();
  useEffect(() => {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLEMAPS_API_KEY}&libraries=places`;
    googleMapScript.async = true;
    googleMapScript.defer = true;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", () => {
      googleMap = getLatLng();
    });
    AllCrimeData();
  }, []);

  const [crimeSearch, setCrimeSearch] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const [allCrimeNames, setAllCrimeNames] = useState([]);
  const [ menuCrimes, setMenuCrimes] = useState([]);
  const [iconV, setIconV] = useState(1);
  const createGoogleMap = (coordinates) => {

      googleMap = new window.google.maps.Map(googleMapRef.current, {
        zoom: 13,
        center: {
          lat: coordinates.lat(),
          lng: coordinates.lng(),
        },
      //disableDefaultUI: true,
    });
  };

  const createMarker = (markerObj) => new window.google.maps.Marker({
    position: { lat : parseFloat(markerObj.lat), lng : parseFloat(markerObj.lng) },
    map: googleMap,
    zoom: 13,
    label: {
      text: markerObj.title,
      fontSize: "10px",
      style: {
        color: "grey"
      }
      
  },
    icon: {
      url: markerObj.icon,
      // set marker width and height
      scaledSize: new window.google.maps.Size(50, 50)
    }
  });

  //grab the entire object with all the crimes
//use for loop to go through crimes and put in new array
//use new array to setSpecific crime in dropdown menu
//search that specific crime

const CreateCrimeNamesArray = (response) => { 
  console.log("in all crime data");
      for(var i = 0; i < 1000; i++){
        if(allCrimeNames.includes(response.data[i].incident_category) ){
        }
        else if(response.data[i].incident_category == "Lost Property" || response.data[i].incident_category == "Fraud" || response.data[i].incident_category == "Other Offenses"){

        }
        else{
          setAllCrimeNames(allCrimeNames.push(response.data[i].incident_category));
        }
      setMenuCrimes(Object.values(allCrimeNames))
      }
}

  const AllCrimeData = () => { //creates array containing all crime names
    axios.get("https://data.sfgov.org/resource/wg3w-h783.json?")
  .then(response => { 
    CreateCrimeNamesArray(response);
    console.log(allCrimeNames);
  })
  .catch(err=>console.log(err))
} 



  const SpecificCrime = (e) => {
    e.preventDefault();
    console.log('in specific crime function')
    axios.get(` https://data.sfgov.org/resource/wg3w-h783.json?incident_category=${crimeSearch}&$limit=10`)
    .then(res => {
  
      if(res.data.length === 0){
        console.log("unable to locate")
        setErrorMessage("Unable to locate.")
      }
      else{
        setErrorMessage("");
        processCrime(res.data);
      }
      
    })
    // console.log(res)
    .catch(err=>console.log(err))
  }


  const iconList = {
    icon1: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Flag--Right-Chartreuse.png',
    icon2: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Ball-Right-Azure.png',
    icon3: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Marker-Outside-Pink.png',
    icon4: 'https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/256/MapMarker_Marker_Outside_Chartreuse.png',
    icon5: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Marker-Outside-Orange.png'
  }

  const [markerList, setMarkerList] = useState ([{ lat: 37.74636, lng: -122.391056, icon: iconList.icon1 }]);
  

  const processCrime = (crime) => {
    console.log("in process Crime function")
    console.log("this is markerList " + markerList)
    const copy = [...markerList]
    console.log("this is crime" + crime)
    console.log("8888888888")
    for (var i = 0; i<10; i++){
      let incident =crime[i];
      console.log("incident: " + incident.point)
      var lat = incident.latitude;
      var lng = incident.longitude;
      // if (lat>37 | lat<39.5){
      //   lat = 37.74636
      // }
      // if (lng<-122 | lng > -121){
      //   lng = -122.391056
      // }
      // // console.log(lat)
      // console.log(lng);
      console.log('this is copy' + copy);
      var titleV = incident.incident_description;
      var descriptionV = incident.analysis_neighborhood;
      var currentIcon = `icon${iconV}`
      copy.push({lat: parseFloat(lat), lng: parseFloat(lng), title: titleV, description: descriptionV, icon: iconList[currentIcon]})
      iconV<4? setIconV(iconV+1) : setIconV(1);
    }

    setMarkerList(copy);
    
    var bounds = new window.google.maps.LatLngBounds();
    copy.map(x => { //SetMarkerList does not get created right away
      console.log(x, "X");

      const marker = createMarker(x);
      console.log(marker);
      bounds.extend(marker.position);
    });
    googleMap.fitBounds(bounds);
    
    
  }

  const getLatLng = () => {
    let lat, lng, placeId;
    return new window.google.maps.Geocoder().geocode(
      { address: `${placeName}` },
      function (results, status) {
        if (status === window.google.maps.GeocoderStatus.OK) {
          placeId = results[0].place_id;
          createGoogleMap(results[0].geometry.location);
          lat = results[0].geometry.location.lat();
          lng = results[0].geometry.location.lng();
          console.log(lat, lng);
          new window.google.maps.Marker({
            position: { lat, lng },
            map: googleMap,
            animation: window.google.maps.Animation.DROP,
            title: `${placeName}`
          });
        } else {
          alert(
            "Geocode was not successful for the following reason: " + status
          );
        }
      }
    );
  };
  return (
    <div>
      <p style ={{color : "red", marginLeft : "500px"}}>{errorMessage}</p> 
      {/* example of how to include error message  */}
      <div style ={{display : "flex", marginTop : "10px"}}>
      <Link to="/LA">
          <button style ={{width : "90px", 
            height: "45px", borderRadius: "2px", 
            color : "white", backgroundImage : "linear-gradient(to right top, #a2adbe, #8c9eb3, #7490a8, #5a829c, #3d7490)", 
            margin : "5px"}}> 
                    <p>Los Angeles</p>
          </button>
        </Link>
        <Link to="/Reading">
          <button style ={{width : "90px", 
          height: "45px", 
          borderRadius: "2px", 
          color : "white", 
          backgroundImage : "linear-gradient(to right top, #a2adbe, #8c9eb3, #7490a8, #5a829c, #3d7490)", 
          margin : "5px"}}>
            Reading
          </button >
        </Link>
        <Link to="/">
          <button style ={{width : "90px", 
          height: "45px", borderRadius: "2px", 
          color : "white", 
          backgroundImage : 'linear-gradient(315deg, #29323c 0%, #485563 74%)',  
          margin : "5px"}}>
            San Francisco
          </button>
        </Link>
        <Link to="/Seattle">
          <button style ={{width : "90px", 
          height: "45px", borderRadius: "2px", 
          color : "white", backgroundImage : "linear-gradient(to right top, #a2adbe, #8c9eb3, #7490a8, #5a829c, #3d7490)", 
          margin : "5px"}}>
            Seattle
          </button>
        </Link>

        <form onSubmit={SpecificCrime} >
          <FormControl variant='filled'> 
            <InputLabel id="label">Crime Type</InputLabel>
            <Select labelId="label" id="select" 
            value={crimeSearch}
            onChange={(e) => setCrimeSearch(e.target.value)}>

              <MenuItem value=""></MenuItem>

              {menuCrimes.map((crimeName, i) => (
                <MenuItem key={i} value={crimeName}>
                  {crimeName}
                </MenuItem>
              ))}
              </Select>
              <Button
              variant='outline-dark'
              color='primary'
              type='submit'>
              Submit
            </Button>
          </FormControl>
        </form>
      </div>
        
      <div
        id="google-map"
        ref={googleMapRef}
        style={{ width: "750px", height: "600px" }}
      />
    </div>
  );
};

export default GoogleMap;
