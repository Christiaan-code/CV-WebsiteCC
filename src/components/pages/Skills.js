import React from 'react'
import '../../App.js'
import CardItem from '../CardItem.js'

export default function Skills() {
    return (
        <>
        <h1 className='skills'>Skills and Awards</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                <CardItem 
                src="images/tech.jpg"
                text="I am proficient in java, c#, javascript, css and object pascal"
                label="Technical skills"
                />
                
                <CardItem
                src="images/geexpo.png"
                text="I competed in the IT PAT competition and placed 1st in 2015, and second in 2017. I also won the maths olympiad in 2016 and 2017."
                label="NWU GeeXpo"
                />
                </ul>
            </div>
        </div> 
        </>
    )
}