import React, {Component} from 'react';
import './Profile.css'

export default class Profile extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Daniel Lawyer</h1>
                    <a data-flickr-embed="true" href="https://www.flickr.com/photos/dclawyer/49358897223/" title="Daniel Lawyer"><img src="https://live.staticflickr.com/65535/49358897223_b9a3b519b7_4k.jpg" width="400" alt="Myself"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
                </div>
                <div>
                    <h2>About</h2>
                    <div>
                        <p>
                            I am a full stack web developer from Utah.
                            I graduated from DevMountain's web development course in September 2019.
                            I have an interest in and a passion for math.
                            I also enjoy coding, anime, manga, board games, strategy games, and trying out new types of games.
                        </p>
                    </div>
                </div>
                <div>
                    <h2>Skills</h2>
                    <div>
                        <p>
                            I can use the following skills:
                        </p>
                        <p>Git</p>
                        <p>Express</p>
                        <p>Node</p>
                        <p>Javascript</p>
                        <p>HTML 5</p>
                        <p>CSS 3</p>
                        <p>D3</p>
                        <p>NodeMailer</p>
                        <p>C++</p>
                        <p>React</p>
                        <p>TI BASIC</p>
                    </div>
                </div>
                <div>
                    <h2>GitHub</h2>
                    <div>
                        <p>
                            GitHub Page Link
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}