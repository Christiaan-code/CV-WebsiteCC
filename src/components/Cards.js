import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Click on a card to show more display the details of that category</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-1.jpg" 
                        text="A short summary of my education and degrees"
                        path="/services"
                        label="Education"
                        />
                        <CardItem 
                        src="images/img-2.png" 
                        text="What skills do I bring to the table and what awards have I won"
                        path="/services"
                        label="Skills and Awards"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-3.jpg" 
                        text="A list of all previous employments and internships"
                        path="/services"
                        label="Work Experience"
                        />
                        <CardItem 
                        src="images/img-4.jpg" 
                        text="What extracurricular activities am I persuing"
                        path="/services"
                        label="Sport, Culture and Leadership"
                        />
                        <CardItem 
                        src="images/img-5.jpg" 
                        text="A full list of my references and their contact details"
                        path="/services"
                        label="References"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Cards