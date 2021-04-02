import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
 
const GMap = () => {
  const googleMapRef = useRef();
  let googleMap;
  const [crime, setCrime] = useState([]);
  const [crimeSearch, setCrimeSearch] = useState("");
  const [submitted, setSubmitted] = useState(false);
 
  // list of icons
  const iconList = {
    icon1: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Flag--Right-Chartreuse.png',
    icon2: 'https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/256/MapMarker_Marker_Outside_Chartreuse.png',
    icon3: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Ball-Right-Azure.png',
    icon4: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Marker-Outside-Pink.png'
  }
 
  // list of the marker object along with icon
  const [markerList, setMarkerList] = useState([{ lat: 40.3459221, lng: -75.92488847, icon: iconList.icon1 }]);
 
  useEffect(() => {
    googleMap = initGoogleMap();
    var bounds = new window.google.maps.LatLngBounds();
    console.log("in UseEffect");
    markerList.map(x => {
      const marker = createMarker(x);
      bounds.extend(marker.position);
    });
    googleMap.fitBounds(bounds); // the map to contain all markers
  }, [submitted]);
 
 
  // initialize the google map
  const initGoogleMap = () => {
    return new window.google.maps.Map(googleMapRef.current, {
      center: { lat: 40.3459221, lng: -75.92488847 },
      zoom: 8
    });
  }
 
  // create marker on google map
  const createMarker = (markerObj) => new window.google.maps.Marker({
    position: { lat: markerObj.lat, lng: markerObj.lng },
    map: googleMap,
    icon: {
      url: markerObj.icon,
      // set marker width and height
      scaledSize: new window.google.maps.Size(50, 50)
    }
  });

  const SpecificCrime = (e) => {
    e.preventDefault();
    //make a post request to create a new person
    console.log('in specific crime function')
    axios.get(`https://data.readingpa.gov/resource/yugu-edth.json?cm_legend=${crimeSearch}&$limit=10`)
    .then(res => {
        console.log('in the specific crime function',res.data);
        setCrime(res.data); 
        processCrime(res.data);
        console.log('in the specific crime function');
      
    })
    // console.log(res)
    .catch(err=>console.log(err))
  }

  const processCrime = (crime) => {
    const copy = [...markerList];
    console.log('in the process crime function');
    for (let incident of crime){
      var lat = incident.location.latitude;
      var lng = incident.location.longitude;
      copy.push({lat: parseFloat(lat), lng: parseFloat(lng), icon: iconList.icon1})
    }console.log(copy);
    setMarkerList(copy);
    setSubmitted(!submitted);
    
  }
 
  return <>
        <form onSubmit = {SpecificCrime}>
          <input type="text" onChange={e=>setCrimeSearch(e.target.value.toUpperCase())}/>
          <input type="submit"/>
      </form>
            <div
                ref={googleMapRef}
                style={{ width: 600, height: 500 }}
            />
        </>
}
 
export default GMap;