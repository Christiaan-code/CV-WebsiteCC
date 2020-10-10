import React from 'react'
import '../../App.js'
import CardItemBlank from '../CardItemBlank.js'

export default function References() {
    return (
        <>
        <h1 className='references'>REFERENCES</h1>
        
        <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                    
                    <CardItemBlank 
                    text="Mrs L Hattingh: (Transvalia High School) 072 810 1492"
                    />

                    <CardItemBlank 
                    text="Mr G Hocknell (Vaal Triangle Squash Association chairman): graham.hocknell@gmail.com"
                    />
                    
                    <CardItemBlank 
                    text="Mrs G Schutte (Metsimaholo Public Library): 016 973 8464"
                    />
                    </ul>
                    <ul className="cards__items">
                    
                    <CardItemBlank 
                    text="Mr F de Beer (AdamJee Life, Pakistan): 079 399 3208"
                    />

                    <CardItemBlank 
                    text="Mr M van Wyk (Ratau Lebone Men’s Residence Primarius): 071 355 9295"
                    />
                    
                    <CardItemBlank 
                    text="Mr A Oosthuizen (Tecmo Automation): 082 416 9212"
                    />
                    </ul>
                </div>
            </div> 
            </>
    )
}