import React from 'react'
import '../../App.js'
import CardItem from '../CardItem.js'

export default function Education() {
    return (
        <>
        <h1 className='education'>EDUCATION</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                
                <CardItem 
                src="images/transvalia.png"
                text="In 2017 I graduated from Transvalia High School with destinctions in all of my subjects but Afrikaans. 
                My subjects included Information Technology, Maths, Science, Engineering Graphics and Design, Life Orientation, English and Afrikaans. 
                I was also part of the Vitae-academia, the top achievers for the grade, for all five years."
                label="2013-2017"
                />
                <CardItem 
                src="images/nwu.png"
                text="From 2018 to 2020 I studied towards my bachelors degree in Computer Science and Information Technology at the North-West University.
                I have been part of the Golden Key since my first year, and have never failed a module. 
                After I finished my degree I also got my honors degree in Computer Science and Information Technology, which I started and finished in 2021"
                label="2018-2021"
                />
                </ul>
            </div>
        </div>
        </>
    )
}