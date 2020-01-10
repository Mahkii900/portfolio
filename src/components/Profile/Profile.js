import React, {Component} from 'react';
import './Profile.css'

export default class Profile extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Daniel Lawyer</h1>
                    <img src="IMG_1715.JPG" alt='myself' height="50px"></img>
                    {/* <div className="yoMom"></div> */}
                </div>
                <div>
                    <h2>About</h2>
                    <div>
                        <p>
                            Lorem Ipsum
                        </p>
                    </div>
                </div>
                <div>
                    <h2>Skills</h2>
                    <div>
                        <p>
                            Lorem Ipsum
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}