import React from 'react'
import '../../App.js'
import CardItem from '../CardItem.js'
import Footer from '../Footer.js'

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
                text="Since 2018 I have been studying towards my BSc IT degreen at the North-West University on the Potchefstroom campus. 
                I have been part of the Golden Key since my first year, and have never failed a module. 
                Currently I am in my third year and plan on finishing my degree and then starting my honors degree in 2021."
                label="2018-Current"
                />
                </ul>
            </div>
        </div>
        </>
    )
}