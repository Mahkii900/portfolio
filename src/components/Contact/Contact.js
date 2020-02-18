import React, {Component} from 'react'
import './Contact.css'
import axios from 'axios'

export default class Contact extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }

    handleNameChange(e) {
        this.setState({name: e.target.value})
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value})
    }

    handleSubjectChange(e) {
        this.setState({subject: e.target.value})
    }

    handleMessageChange(e) {
        this.setState({message: e.target.value})
    }

    submitMessage() {
        axios.post('/messages', {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        })
        .catch(err => alert("Failed to send email"))
        this.setState({name: '', email: '', subject: '', message: ''})
    }

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
                        <input value={this.state.name} onChange={(e) => this.handleNameChange(e)}/>
                    </div>
                    <div>
                        Email:
                        <input value={this.state.email} onChange={(e) => this.handleEmailChange(e)}/>
                    </div>
                    <div>
                        Subject:
                        <input value={this.state.subject} onChange={(e) => this.handleSubjectChange(e)} />
                    </div>
                    <div className='message-area'>
                        Message
                        <textarea value={this.state.message} onChange={(e) => this.handleMessageChange(e)} ></textarea>
                    </div>
                    <div className='submit-area'>
                        <button onClick={() => this.submitMessage()}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}