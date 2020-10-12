import React from 'react'
import '../../App.js'
import { Button } from '../Button.js'
import Footer from '../Footer.js'
import './Contact.css'

function sendMail () {
    var emailName = document.getElementById=('emailName');
    var emailAddress = document.getElementById=('emailAddress');
    var emailBody = document.getElementById=('emailBody');
    window.open('mailto:christiaandpreez@gmail.com?subject=Christiaan CV site email&body=');
}

export default function Contact() {
    // function sendMail = () => {
    //     <a href = "mailto: [christiaandpreez@gmail.com]? body= Hello ">send mail</a>
    // }

    return (
        <>
            <h1 className='contact'>Contact Me</h1>
            <div className ="contact-container">
            <section className="contact-subscription">
                <p className="contact-subscription-heading">
                    Fill in your details and send me a message
                </p>
                
                <form>
                    <div className="input-areas">
                        <p className="contact-subscription-text">
                            Name
                        </p>
                        <input id="emailName" className ="contact-input" type="name" name= "name" placeholder="Bill Gates"/>
                        <p className="contact-subscription-text">
                            Email address
                        </p>
                        <input id="emailAddress" className ="contact-input" type="email" name= "email" placeholder="billgates@microsoft.com"/>
                        <p className="contact-subscription-text">
                            Message
                        </p>
                        <textarea id="emailBody" className ="contact-input-message" type="message" name= "message" placeholder="I want to hire you."/>
                    </div>
                        <Button  onClick={sendMail()} buttonStyle= 'btn--outline'>Send</Button>
                </form>
                {/* <div className="input-areas">
                    <form>
                        
                    </form>
                </div>

                
                <div className="input-areas">
                    <form>
                        
                    </form>
                </div>
                 */}
                
            </section>
            </div>
        </>
    )
}