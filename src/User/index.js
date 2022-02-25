import React, { Component } from 'react'
import {Route,Switch} from "react-router-dom"
import Login from "../components/Login"
import Register from "../components/Register"
import "./index.css"
export default class index extends Component {
    render() {
        return (
            <div className="yongh">
                <div className="login_yongh">
                <Switch>
                        <Route path="/User/Login" component={Login}/>
                        <Route path="/User/Register" component={Register}/>
                </Switch>
                </div>
            </div>
            
        )
    }
}
