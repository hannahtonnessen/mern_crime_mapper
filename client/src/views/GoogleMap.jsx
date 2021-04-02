import React, {useRef, useEffect, useState} from 'react';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
const google = window.google;
let googleMap;

const GoogleMap = ({ placeName }) => {
  console.log('test')
  const googleMapRef = useRef();
  useEffect(() => {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC1fE6j0XWxsRUAdhNHYhXQxYcEqr9jTzE&libraries=places`;
    googleMapScript.async = true;
    googleMapScript.defer = true;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", () => {
      googleMap = getLatLng();
    });
  }, []);

  const [crime, setCrime] = useState([]);
  const [crimeSearch, setCrimeSearch] = useState("");
  const [position, setPosition] = useState([]);
  const [iconV, setIconV] = useState(1);
  const createGoogleMap = (coordinates) => {
    // for (const i=0; i<crime.length; i++){
    //   let lat = 0;
    //   let lng = 0;
      // lat = crime[i].location.latitude;
      // lng = crime[i].location.longitude;
      googleMap = new window.google.maps.Map(googleMapRef.current, {
        zoom: 15,
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
    icon: {
      url: markerObj.icon,
      // set marker width and height
      scaledSize: new window.google.maps.Size(50, 50)
    }
  });

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
    icon2: 'https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/256/MapMarker_Marker_Outside_Chartreuse.png',
    icon3: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Ball-Right-Azure.png',
    icon4: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Marker-Outside-Pink.png'
  }
  // const icons = (iconList) => {

  //   for(let i = 0; i < iconList.length){
      
  //   }
  // }
  const [markerList, setMarkerList] = useState ([{ lat: 40.3459221, lng: -75.92488847, icon: iconList.icon1 }]);
  

  const processCrime = (crime) => {
    const copy = [...markerList]
    for (let incident of crime){
      var lat = incident.location.latitude;
      var lng = incident.location.longitude;
      // console.log(lat)
      // console.log(lng);
      console.log('this is copy' + copy);
      var currentIcon = `icon${iconV}`
      copy.push({lat: parseFloat(lat), lng: parseFloat(lng), icon: iconList[currentIcon]})
      iconV<4? setIconV(iconV+1) : setIconV(1);
    }

    // for(let icon of iconList){
    // }

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
  // const processCrime = (crime) => {
  //   for (let incident of crime){
  //     console.log(crime[0]);
  //     console.log("**************");
  //     var lat = incident.location.latitude;
  //     var lng = incident.location.longitude;
  //     console.log(lng + "lng");
  //     console.log(lat + 'lat');
  //     setPosition(new window.google.maps.LatLng(incident.location.latitude,incident.location.longitude));
  //     const myLatLng = { lat: parseFloat(incident.location.latitude), lng: parseFloat(incident.location.longitude) };
  //     console.log(myLatLng)
  //     new google.maps.Marker({
  //       position: new google.maps.LatLng(incident.location.latitude,incident.location.longitude),
  //       map: googleMap,
  //       animation: google.maps.Animation.DROP,
  //       title: `${incident.cm_legend}`
  //     });
  //   }
  // }

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
      <form onSubmit = {SpecificCrime}>
          <input type="text" onChange={e=>setCrimeSearch(e.target.value.toUpperCase())}/>
          <input type="submit"/>
      </form>
      <div
        id="google-map"
        ref={googleMapRef}
        style={{ width: "900px", height: "600px" }}
      />
    </div>
  );
};

export default GoogleMap;