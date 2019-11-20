import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

class Nav extends Component {
    pageNavigation(location) {
        this.props.history.push(`/${location}`);
    }

    render() {
        return(
            <div>
                <nav>
                    {this.props.location.pathname === '/' ? null
                        :<button onClick={() => this.pageNavigation('')}>Profile</button>
                    }
                    {this.props.location.pathname === '/projects' ? null
                        :<button onClick={() => this.pageNavigation('projects')}>Projects</button>
                    }
                    {this.props.location.pathname === '/contact' ? null
                        :<button onClick={() => this.pageNavigation('contact')}>Contact</button>
                    }
                </nav>
            </div>
        )
    }
}

export default withRouter(Nav);