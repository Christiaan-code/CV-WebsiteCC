import React from 'react'
import '../../App.js'
import AboutMeCodewarsAPI from '../aboutMe-codewarsAPI.js'
import Dogs from '../Dogs/Dogs.js'
import Test from '../Test.js'

export default function Skills() {
    // var imgurl = <Dogs/>
    return (
        <> 
        <h1 className='extra'>Extras</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <Test/>
                
                
                {/* <ul className="cards__items">
                <CardItem 
                src= {imgurl}
                text="I am proficient in java, c#, javascript, css, sql and object pascal"
                label="Technical skills"
                />
                
                <CardItem
                src="images/geexpo.png"
                text="I competed in the IT PAT competition and placed 1st in 2015, and second in 2017. I also won the maths olympiad in 2016 and 2017."
                label="NWU GeeXpo"
                />
                </ul> */}
            </div>
        </div> 
        </>
    )
}