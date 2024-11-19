import React from 'react'

const ContactForm = () => {
  return (
    <form className="contact-form">
                        <div className="">
                            <label>
                                Your Name
                                <span>*</span>
                            </label>
                            <input type="text" required/>
                        </div>
                        <div className="">
                            <label>
                                Your email
                                <span>*</span>
                            </label>
                            <input type="text" required/>
                        </div>
                        <div className="">
                            <label>
                                Subject
                                <span>*</span>
                            </label>
                            <input type="text" required/>
                        </div>
                        <div className="">
                            <label>
                                Your message
                                <span>*</span>
                            </label>
                            <textarea id="author" name="author" type="text" defaultValue="" size="30" required=""></textarea>
                        </div>
                        <button className="btn btn-sm form-button">Send Message</button>
    </form>
  )
}

export default ContactForm