import React from 'react'
import '../../App.js'
import CardItemBlank from '../CardItemBlank.js'
import '../../App.css'

export default function References() {
    return (
        <>
        <h1 className='references'>REFERENCES</h1>
        
        <div className="cards__container">
                <div className="cards__wrapper">
                    
                    <CardItemBlank 
                    text="Mr D Ackerman: (Freshlinq) 082 777 6133"
                    />
                    
                    <CardItemBlank 
                    text="Mrs L Hattingh: (Transvalia High School) 072 810 1492"
                    />

                    <CardItemBlank 
                    text="Mr G Hocknell (Vaal Triangle Squash Association chairman): graham.hocknell@gmail.com"
                    />
                                        
                    <CardItemBlank 
                    text="Mr F de Beer (AdamJee Life, Pakistan): 079 399 3208"
                    />

                    <CardItemBlank 
                    text="Mr M van Wyk (Ratau Lebone Men’s Residence Primarius): 071 355 9295"
                    />
                                        
                </div>
            </div> 
            </>
    )
}