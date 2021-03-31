import React, {useRef, useEffect, useState} from 'react';
import axios from 'axios';

const GoogleMap = ({ placeName, crime, setCrime }) => {
  console.log('test')
  const googleMapRef = useRef();
  let googleMap;
  useEffect(() => {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC1fE6j0XWxsRUAdhNHYhXQxYcEqr9jTzE&libraries=places`;
    googleMapScript.async = true;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", () => {
      getLatLng();
    });
  }, []);

  const createGoogleMap = (coordinates) => {
    googleMap = new window.google.maps.Map(googleMapRef.current, {
      zoom: 10,
      center: {
        lat: coordinates.lat(),
        lng: coordinates.lng(),
      },
      //disableDefaultUI: true,
    });
  };

  const SpecificCrime = (e) => {
    e.preventDefault();
    //make a post request to create a new person
    axios.get("https://data.readingpa.gov/resource/yugu-edth.json?$$app_token=kZZLRMmGCpp3bQDgoaaTKxoO1")
    .then(res => setCrime(res.data))
    // console.log(res)
    .catch(err=>console.log(err))
}

const processCrime = (crime) => {
    var lat = 0;
    var lon = 0;
    for (const i=0; i<crime.length; i++){
        lat[i] = crime[i].location.latitude;
        lon[i] = crime[i].location.longitude;
    }
}
  const getLatLng = () => {
    let lat, lng, placeId;
    new window.google.maps.Geocoder().geocode(
      { address: `${placeName}` },
      function (results, status) {
        if (status === window.google.maps.GeocoderStatus.OK) {
          placeId = results[0].place_id;
          createGoogleMap(results[0].geometry.location);
          lat = results[0].geometry.location.lat();
          lng = results[0].geometry.location.lng();
          new window.google.maps.Marker({
            position: { lat, lng },
            map: googleMap,
            animation: window.google.maps.Animation.DROP,
            title: `${placeName}`,
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
                <input type="text" onChange={(e)=>setCrime(e.target.value)}/>
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