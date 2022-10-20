import React from 'react'
import '../../App.js'
import CardItem from '../CardItem.js'

export default function Work() {
    return (
        <>
            <h1 className="work">Work Experience</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/freshlinq.png"
                            text="From January 2022 to September 2022 I worked as a software developer for Freshlinq. Our tech stack included C#, Entity Framework, AngularJS and Azure DevOps"
                            label="Freshlinq"
                        />

                        <CardItem
                            src="images/jobjack.png"
                            text="In October 2022 I started working as a full stack software developer at JOBJACK. Our tech stack includes
                            NodeJS, Angular and GraphQL."
                            label="JOBJACK"
                        />
                    </ul>

                    <ul className="cards__items">
                        <CardItem
                            src="images/adamjee.png"
                            text="In 2016 I shadowed in the IT department of AdamjeeLife, Pakistan, for two weeks"
                            label="Adamjee Life"
                        />

                        <CardItem
                            src="images/vaalsquash.png"
                            text="I was the webmaster for the Vaal Triangle Squash association from 2016 to 2019"
                            label="Vaal Triangle Squash Association"
                        />
                    </ul>
                </div>
            </div>
        </>
    )
}
