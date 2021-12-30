import  './Content.css'
import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Param from '../views/examples/Param'
import About from '../views/examples/About'
import Home from '../views/examples/Home'
import NotFound from '../views/examples/NotFound'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route path="/about">
                <About></About>
            </Route>
            <Route path="/param/:id">
                <Param></Param>
            </Route>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="*">
                <NotFound></NotFound>
            </Route>
        </Switch>
    </main>
)

export default Content