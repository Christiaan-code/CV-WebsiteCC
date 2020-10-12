import React, { useState } from 'react';
import { Button } from '../Button';
import Conditions from '../Conditions/Conditions';


const Forecast = () => {

    let [responseObj, setResponseObj] = useState({});

function getForecast() {

    fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=potchefstroom", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "f01d93cfcdmsh8865f679ed72968p17e98ejsn484f64be6f97"
        }
    })
    .then(response => response.json())
       .then(response => {
           setResponseObj(response)
       })
    .catch(err => {
        console.log(err);
    });

   }


return (

    <>   
           <Button buttonStyle="btn--outline" onClick={getForecast}>Get Forecast</Button>
           <>
           <Conditions
               responseObj={responseObj}
               />
               </>
</> 

   )

}


export default Forecast;