import React, { useState } from 'react';
import dogsDisplay from './DogsDisplay';


const Dogs = () => {

    let [responseObj, setResponseObj] = useState({});
    var myurl = ""

function getDogs() {

    fetch("https://random.dog/woof.json", {
        "method": "GET"
        // "headers": {
        //     "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        //     "x-rapidapi-key": "f01d93cfcdmsh8865f679ed72968p17e98ejsn484f64be6f97"
        // }
    })
    .then(response => response.json())
       .then(response => {
           setResponseObj(response)
       })
    .catch(err => {
        console.log(err);
    });

    myurl = responseObj.url;

   }


return (

    <>
    {getDogs}
    <img src={myurl} alt="asdf" />
    <dogsDisplay
               responseObj={responseObj}
               />
</> 

   )

}


export default Dogs;