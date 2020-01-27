import React, {Component} from 'react'
import './Projects.css'

export default class Project extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Projects</h1>
                </div>
                <div>
                    <a href="https://head-games.org/#/" target="_blank" rel='external noopener noreferrer'>
                        <h2>Head Games</h2>
                    </a>
                    <div>
                        <p>
                            A dating site with a twist: Answer a short quiz about a person's interests before being able to message them. Allows for simpler conversation starter: "Hey I saw that you were interested in...".
                        </p>
                        <p>
                            Best viewed on mobile
                        </p>
                    </div>
                </div>
                <div>
                    <h2>Frencio</h2>
                    <div>
                        <p>
                            A device management system: if a device is broken, users can enter in a code and send a ticket. The person in charge of that room will receive either an email or a text about the ticket.
                        </p>
                    </div>
                </div>
                <div>
                    <h2>Under Construction</h2>
                    <div>
                        <p>
                            This project is currenly under construction
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}