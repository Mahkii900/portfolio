import React, {Component} from 'react';
import './Profile.css'

export default class Profile extends Component {
    render() {
        return (
            <div className='profile-content'>
                <div id='profile-title'>
                    <h1>Daniel Lawyer</h1>
                    <a data-flickr-embed="true" href="https://www.flickr.com/photos/dclawyer/49358897223/" title="Daniel Lawyer"><img id='photo' src="https://live.staticflickr.com/65535/49358897223_b9a3b519b7_4k.jpg" alt="Myself"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charSet="utf-8"></script>
                </div>
                <div>
                    <h2>About</h2>
                    <div>
                        <p id='profile'>
                            I am a full stack web developer from Utah.
                            I graduated from DevMountain's web development course in September 2019.
                            I have an interest in and a passion for math.
                            I also enjoy coding, anime, manga, board games, strategy games, and trying out new types of games.
                        </p>
                    </div>
                </div>
                <div className='skillz'>
                    <h2>Skills</h2>
                    <div>
                        <p>
                            I can use the following skills:
                        </p>
                    </div>
                    <div className='logos'>
                        <div>
                            <img src="https://git-scm.com/images/logos/downloads/Git-Icon-White.png" alt='git' height='100px' />
                            <div>Git</div>
                        </div>
                        <div>
                            <img src='https://nodejs.org/static/images/logos/nodejs-new-pantone-white.svg' alt='node' height='100px' />
                            <div>NodeJS</div>
                        </div>
                        <div>
                            <img src='https://raw.githubusercontent.com/Aaron-Nordin/portfolio/master/src/assets/images/thumbs/express.png' alt='express' height='100px' />
                            <div>Express</div>
                        </div>
                        <div>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' alt='javascript' height='100px' />
                            <div>JavaScript</div>
                        </div>
                        <div>
                            <img src='https://logodownload.org/wp-content/uploads/2016/10/html5-logo-8.png' alt='html 5' height='100px' />
                            <div>HTML 5</div>
                        </div>
                        <div>
                            <img src='https://raw.githubusercontent.com/Aaron-Nordin/portfolio/master/src/assets/images/thumbs/css-3.png' alt='css 3' height='100px' />
                            <div>CSS 3</div>
                        </div>
                        <div>
                            <img src='https://raw.githubusercontent.com/Aaron-Nordin/portfolio/master/src/assets/images/thumbs/Postman.png' alt='postman' height='100px' />
                            <div>Postman</div>
                        </div>
                        <div>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' alt='postgresql' height='100px'/>
                            <div>PostgreSQL</div>
                        </div>
                        <div>
                            <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K' alt='react' height='100px' />
                            <div>React</div>
                        </div>
                        <div>
                            <img src='https://raw.githubusercontent.com/Aaron-Nordin/portfolio/master/src/assets/images/thumbs/ReduxIcon.png' alt='redux' height='100px' />
                            <div>Redux</div>
                        </div>
                        {/* <div>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png' alt='c++' height='100px' />
                            <div>C++</div>
                        </div> */}
                    </div>
                </div>
                <div className='github-link'>
                    <h2>GitHub</h2>
                    <div>
                        <a href='https://github.com/Mahkii900' target='_blank' rel='noopener noreferrer'>My GitHub Profile</a>
                    </div>
                </div>
            </div>
        )
    }
}