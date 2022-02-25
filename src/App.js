import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom"
import View from "./view"
import Play from "./view/play"
import Recommend from "./components/Recommend"
import More from "./components/Mainpage/More"
//import User from "./components/User"
import "../node_modules/antd/dist/antd.css"

import "./index.css"
export default class App extends Component {
    render() {
        return (
            <div className="musicBox">
                <Router>
                    <Switch>
                        <Route path="/more" component={More} /> 
                        <Route path="/play" component={Play} />
                        <Route path="/" component={View}/>
                       
                    </Switch>
                </Router>
            </div>
        )
    }
}
