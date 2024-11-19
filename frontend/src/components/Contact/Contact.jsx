import React from 'react'
import "./Contact.css";
import ContactMap from './ContactMap';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
  return (
    <section className="contact">
        <div className="contact-top">
            <ContactMap />
        </div>
        <div className="contact-bottom">
            <div className="container">
                <div className="contact-titles">
                    <h4>Contact with us</h4>
                    <h2>Get In Touch</h2>
                    <p>In hac habitasse platea dictumst. Pellentesque viverra sem nec orci lacinia, in bibendum urna
                        mollis. Quisque nunc lacus, varius vel leo a, pretium lobortis metus. Vivamus consectetur
                        consequat justo.</p>
                </div>
                <div className="contact-elements">
                    <ContactForm />
                    <ContactInfo />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact