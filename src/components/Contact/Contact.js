import React, {Component} from 'react'
import './Contact.css'

export default class Contact extends Component {
    render() {
        return(
            <div className='contact'>
                <div>
                    <h1>Contact Me</h1>
                </div>
                <div>
                    <p>
                        Write a message to me! Please leave contact information as well if you want me to respond back.
                    </p>
                </div>
                <div className='contact-content'>
                    <div>
                        Name:
                        <input></input>
                    </div>
                    <div>
                        Email:
                        <input></input>
                    </div>
                    <div>
                        Subject:
                        <input></input>
                    </div>
                    <div className='message-area'>
                        Message
                        <textarea></textarea>
                    </div>
                    <div className='submit-area'>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}