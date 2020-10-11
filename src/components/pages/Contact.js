import React from 'react'
import '../../App.js'
import { Button } from '../Button.js'
import './Contact.css'

export default function Contact() {
    return (
        <>
            <h1 className='contact'>Contact Me</h1>
            <div className ="contact-container">
            <section className="contact-subscription">
                <p className="contact-subscription-heading">
                    Fill in your details and send me a message
                </p>
                
                <p className="contact-subscription-text">
                    Name
                </p>
                <div className="input-areas">
                    <form>
                        <input className ="contact-input" type="name" name= "name" placeholder="Bill Gates"/>
                    </form>
                </div>

                <p className="contact-subscription-text">
                    Email address
                </p>
                <div className="input-areas">
                    <form>
                        <input className ="contact-input" type="email" name= "email" placeholder="billgates@microsoft.com"/>
                    </form>
                </div>

                <p className="contact-subscription-text">
                    Message
                </p>
                <div className="input-areas">
                    <form>
                        <textarea className ="contact-input-message" type="message" name= "message" placeholder="I want to hire you."/>
                    </form>
                </div>
                
                <Button link="/" buttonStyle= 'btn--outline'>Send</Button>
            </section>
            </div>
        </>
    )
}