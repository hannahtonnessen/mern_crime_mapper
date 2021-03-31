


// const SearchBar = (props) => {
//     const [crime, setCrime] = useState([]);
//     const [crimeSearch, setCrimeSearch] = useState("");


//     const SpecificCrime = (e) => {
//         e.preventDefault();
//         //make a post request to create a new person
//         axios.get(`https://data.readingpa.gov/resource/yugu-edth.json?cm_legend=${crimeSearch}$$app_token=kZZLRMmGCpp3bQDgoaaTKxoO1`)
//         .then(res => console.log(res.data))
 
//         .catch(err=>console.log(err))
//     }

//     // const processCrime = (crime) => {
//     //     for (const i=0; i<crime.length; i++){
//     //         lat[i] = crime[i].location.latitude;
//     //         lon[i] = crime[i].location.longitude;
//     //     }
//     // }
//     //send crime data to App.js. Pass crime data down to GoogleMap where latitude and longitude
//     //are targeted. Create 

//     return(
//         <div>
//             <form onSubmit = {SpecificCrime}>
//                 <input type="text" onChange={e=>setCrimeSearch(e.target.value)}/>
//                 <input type="submit"/>
//             </form>7
//         </div>
//     )
// }
// export default SearchBar;