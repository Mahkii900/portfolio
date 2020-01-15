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
                        <img src="https://git-scm.com/images/logos/downloads/Git-Icon-White.png" alt='git' height='100px' />
                        <p>Node</p>
                        <img src='https://nodejs.org/static/images/logos/nodejs-new-pantone-white.svg' alt='node' height='100px' />
                        <p>Javascript</p>
                        <p>HTML 5</p>
                        <p>CSS 3</p>
                        <p>D3</p>
                        <p>C++</p>
                        <p>React</p>
                        <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K' alt='react' height='100px' />
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