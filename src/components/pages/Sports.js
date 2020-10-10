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
                    text="I was part of the First Hockey team and the First Squash team, both for two years. I now play basketball for the NWU Pukke's first team, and also participate in 
                    numerous other sports and activities for my university hostel."
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