
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const SearchBar = (props) => {
    const{crime, setCrime} = props;

    const SpecificCrime = (e) => {
        e.preventDefault();
        //make a post request to create a new person
        axios.get("https://data.readingpa.gov/resource/yugu-edth.json")
        .then(res => setCrime(res.data))
        // console.log(res)
        .catch(err=>console.log(err))
    }

    const processCrime = (crime) => {
        for (const i=0; i<crime.length; i++){
            lat[i] = crime[i].location.latitude;
            lon[i] = crime[i].location.longitude;
        }
    }
    //send crime data to App.js. Pass crime data down to GoogleMap where latitude and longitude
    //are targeted. Create 

    return(
        <div>
            <form onSubmit = {SpecificCrime}>
                <input type="text" onChange={(e)=>setCrime(e.target.value)}/>
                <input type="submit"/>
            </form>
        </div>
    )
}
export default SearchBar;