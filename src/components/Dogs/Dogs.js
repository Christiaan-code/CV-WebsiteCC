import React, { useState } from 'react';
import { Button } from '../Button';
import DogsDisplay from './DogsDisplay';


const Dogs = () => {

    let [responseObj, setResponseObj] = useState({});

function getDogs() {
    
    fetch("https://covid-19-statistics.p.rapidapi.com/reports/total?date=2020-04-07", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
		"x-rapidapi-key": "f01d93cfcdmsh8865f679ed72968p17e98ejsn484f64be6f97"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});

   }

   

return (

    <>   
        {getDogs}
       {/* <Button buttonStyle="btn--primary" onClick={getDogs}>Show Pictures</Button> */}
       <>
       <DogsDisplay
           responseObj={responseObj}
           />
           </>
</>
)
}


export default Dogs;