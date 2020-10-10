import React from 'react'
import '../../App.js'
import CardItem from '../CardItem.js'

export default function Work() {
    return (
        <>
        <h1 className='work'>Work Experience</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                    <CardItem 
                    src="images/vaalsquash.png"
                    text="I was the webmaster for the Vaal Triangle Squash association from 2016 to 2019"
                    label="Vaal Triangle Squash Association"
                    />

                    <CardItem 
                    src="images/tecmo.png"
                    text="During the June-holiday in 2019 I worked at Tecmo Automation's software branch for a week"
                    label="Tecmo Automation"
                    />
                    </ul>

                    <ul className="cards__items">
                    
                    <CardItem 
                    src="images/adamjee.png"
                    text="In 2016 I shadowed in the IT department of AdamjeeLife, Pakistan, for two weeks"
                    label="Adamjee Life"
                    />

                    <CardItem 
                    src="images/library.jpg"
                    text="Throughout 2015 and 2016 I worked a part-time job at the Metsimaholo Public Library"
                    label="Metsimaholo Library"
                    />
                    </ul>
                </div>
            </div> 
        </>
    )
}