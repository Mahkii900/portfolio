import React, {Component} from 'react'

export default class Contact extends Component {
    render() {
        return(
            <div>
                <div>
                    <h1>Contact Me</h1>
                </div>
                <div>
                    <div>
                        <p>
                            Write a message to me! Please leave contact information as well if you want me to respond back.
                        </p>
                    </div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}