import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Contact from './components/Contact/Contact'
import Profile from './components/Profile/Profile'
import Projects from './components/Projects/Projects'

export default <Switch>
    <Route component={Profile} exact path = '/'/>
    <Route component={Contact} path = '/contact'/>
    <Route component={Projects} path = '/projects'/>
</Switch>