import React from 'react'
import '../../App.js'
import CardItem from '../CardItem.js'

export default function Sports() {
    return (
        <>
        <h1 className='sports'>Sports and Committees</h1>
        <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                    
                    <CardItem 
                    src="images/sports.jpg"
                    text="I played basketball for the NWU Pukke's first team, was part of the PUK squash team, and also participated in 
                    numerous other sports and activities for my university hostel. I still play action netball, squash, frisbee and soccer socially."
                    label="Sports"
                    />

                    <CardItem 
                    src="images/committees.jpg"
                    text="In 2016 I was elected as Vice-chairperson of the school's VCSV, and served as the chairperson of the committee in 2017. I have also served on my university hostel's
                    sport committee every year since I arrived there"
                    label="Committees"
                    />
                    </ul>
                </div>
            </div> 
            </>
    )
}