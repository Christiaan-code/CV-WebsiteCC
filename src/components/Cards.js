import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Choose a card to show more details of that category</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-1.jpeg" 
                        text="A short summary of my education and degrees"
                        path="/education"
                        label="Education"
                        />
                        <CardItem 
                        src="images/img-2.jpg" 
                        text="What skills do I bring to the table and what awards have I won"
                        path="/skills"
                        label="Skills and Awards"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-3.jpg" 
                        text="A list of all previous employments and internships"
                        path="/work"
                        label="Work Experience"
                        />
                        <CardItem 
                        src="images/img-4.jpg" 
                        text="My participation in various sports and committees"
                        path="/sports"
                        label="Sport and Committees"
                        />
                        <CardItem 
                        src="images/img-5.jpg" 
                        text="A full list of my references and their contact details"
                        path="/references"
                        label="References"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Cards
