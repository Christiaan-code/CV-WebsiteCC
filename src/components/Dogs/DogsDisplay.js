import React from 'react';

const DogsDisplay = (props) => {

   return (

        <>
            <div className="text">

                <p>asdfs{props.responseObj.data.confirmed}</p>
                
                <p> the url is {props.responseObj.data.deaths}</p>
            
            </div>

        </>

   )

}


export default DogsDisplay;