import React from 'react';

const conditions = (props) => {

   return (

       <>
           {props.responseObj.cod === 200 ?

               <div className ="weather-text"> 

                   <p><strong>{props.responseObj.name}</strong></p>

                   <p>It is currently {Math.round(props.responseObj.main.temp-273.15)} degrees out with {props.responseObj.weather[0].description}.</p>

               </div>

        : null

        }

       </>

   )

}


export default conditions;