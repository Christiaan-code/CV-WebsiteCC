import React from 'react';
import '../../App.js';
import { Button } from '../Button.js';
import './Contact.css';
import emailjs from 'emailjs-com'

export default function Contact() {
    
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_f2eltbo', 'template_k35yuu8', e.target, 'user_ZmislHHp6MLz3igL7sKAw')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
        <>
            <h1 className='contact'>Contact Me</h1>
            <div className ="contact-container">
            <section className="contact-subscription">
                <p className="contact-subscription-heading">
                    Fill in your details and send me a message
                </p>
                
                <form className="contact-from" onSubmit={sendEmail}>
                    <div className="input-areas">
                        <p className="contact-subscription-text">
                            Name
                        </p>
                        <input id="emailName" className ="contact-input" type="name" name= "from_name" placeholder="Bill Gates"/>
                        <p className="contact-subscription-text">
                            Email address
                        </p>
                        <input id="emailAddress" className ="contact-input" type="email" name= "reply_to" placeholder="billgates@microsoft.com"/>
                        <p className="contact-subscription-text">
                            Message
                        </p>
                        <textarea id="emailBody" className ="contact-input-message" type="message" name= "message" placeholder="I want to hire you."/>
                    </div>
                        <input id="submit" type="submit" value="Send"/>
                </form>                
            </section>
            </div>
        </>
    )
}