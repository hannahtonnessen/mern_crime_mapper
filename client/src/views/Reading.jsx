import React, {useRef, useEffect, useState} from 'react';
import axios from 'axios';
import Radium from 'radium';
// import GoogleMapReact from 'google-map-react';
import { navigate } from '@reach/router';
import { makeStyles } from '@material-ui/core/styles';
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

const Reading = ({ placeName }) => {
  const useStyles = makeStyles({
    map : {
      width: "100vw", 
      height: "80vh", 
      flexGrow: "1"
    },
    menuBar : {
      display : "flex", 
      justifyContent:"center", 
      gap:"20px", 
      paddingTop : "25px",
      paddingBottom : "10px"
    },
    dropdownMenuBar : {
      color : "red",
      position : "relative",
      minWidth : "150px",
      display : "flex",
      justifyContent : "center"
    },
    standardButton: {
      textTransform: 'capitalize',
      fontSize:"1.0rem",
      //flexGrow : "1",
      color : "white",
      lineHeight : "1",
      backgroundImage : "linear-gradient(to right top, #a2adbe, #8c9eb3, #7490a8, #5a829c, #3d7490)",
      width : "100px", 
      height: "50px", 
      borderRadius: "2px"
    },
    selectedButtonColor: {
      textTransform: 'capitalize',
      fontSize:"1.0rem",
      //flexGrow : "1",
      color : "white",
      lineHeight : "1",
      //backgroundImage: "linear-gradient(0deg, #282828, #474747, #7490a8, #192828, #3E4A56)",
      backgroundImage : "linear-gradient(315deg, #29323c 0%, #485563 74%)",
      width : "100px", 
      height: "50px", 
      borderRadius: "2px"
    }
  })
  const classes = useStyles();
  console.log('test')
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

  const [crime, setCrime] = useState([]);
  const [crimeSearch, setCrimeSearch] = useState("");
  const [iconV, setIconV] = useState(1);
  const [allCrimeNames, setAllCrimeNames] = useState([]);
  const [SelectedButton, setSelectedButton] = useState(0);
  const [ menuCrimes, setMenuCrimes] = useState([]);
  const createGoogleMap = (coordinates) => {
    // for (const i=0; i<crime.length; i++){
    //   let lat = 0;
    //   let lng = 0;
      // lat = crime[i].location.latitude;
      // lng = crime[i].location.longitude;
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
    label: {
      text: markerObj.title,
      fontSize: "10px",
  },
    icon: {
      url: markerObj.icon,
      // set marker width and height
      scaledSize: new window.google.maps.Size(50, 50)
    }
  });
 

const CreateCrimeNamesArray = (response) => { 
  console.log("in all crime data");
      for(var i = 0; i < 1000; i++){
        if(allCrimeNames.includes(response.data[i].cm_legend) ){
        }
        else{
          setAllCrimeNames(allCrimeNames.push(response.data[i].cm_legend));
        }
      setMenuCrimes(Object.values(allCrimeNames))
      }
}

  const AllCrimeData = () => { //creates array containing all crime names
    axios.get("https://data.readingpa.gov/resource/yugu-edth.json?")
  .then(response => { 
    CreateCrimeNamesArray(response);
    console.log(allCrimeNames);
  })
  .catch(err=>console.log(err))
} 
  
  const SpecificCrime = (e) => {
    e.preventDefault();
    console.log('in specific crime function')
    axios.get(`https://data.readingpa.gov/resource/yugu-edth.json?cm_legend=${crimeSearch}&$limit=10`)
    .then(res => {
      setCrime(res.data); 
      processCrime(res.data);
      console.log('in the specific crime function',crime);
      
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

  const [markerList, setMarkerList] = useState ([{ lat: 40.3459221, lng: -75.92488847, icon: iconList.icon1 }]);
  
  const processCrime = (crime) => {
    const copy = [...markerList]
    for (let incident of crime){
      var lat = incident.location.latitude;
      var lng = incident.location.longitude;
      if (lat>41 | lat<40){
        lat = 40.3459221
      }
      if (lng<-76 | lng > -75){
        lng = -75.92488847
      }
      // console.log(lat)
      // console.log(lng);
      console.log('this is copy' + copy);
      var titleV = incident.offns_desc;
      var descriptionV = incident.block_add;
      var currentIcon = `icon${iconV}`
      copy.push({lat: parseFloat(lat), lng: parseFloat(lng), title: titleV, description: descriptionV, icon: iconList[currentIcon]})
      iconV<4? setIconV(iconV+1) : setIconV(1);
    }

    setMarkerList(copy);
    
    var bounds = new window.google.maps.LatLngBounds();
    copy.map(x => { //SetMarkerList does not get created right away
      console.log(x);

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
            //animation: window.google.maps.Animation.DROP,
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
      <div className={classes.menuBar}>
       
        <Button className={classes.standardButton} type="button" name="la" onClick={(e) => {navigate("/la"); setSelectedButton(0)}}>Los Angeles
          </Button>
          <Button className={classes.selectedButtonColor} type="button" name="reading" onClick={(e) => {navigate("/reading"); setSelectedButton(1)}}>Reading
          </Button>
          <Button className={classes.standardButton} type="button" name="san-francisco" onClick={(e) => {navigate("/"); setSelectedButton(2)}}>San Francisco 
          </Button>
          <Button className={classes.standardButton} type="button" name="seattle" onClick={(e) => {navigate("/seattle"); setSelectedButton(3)}}>Seattle
          </Button>
          <form onSubmit={SpecificCrime} >
            <FormControl variant="outlined" className={classes.dropdownMenuBar}> 
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
    <div>
    </div>
      <div
        id="google-map"
        ref={googleMapRef}
        className={classes.map}
      />
    </div>
  );
};

export default Reading;