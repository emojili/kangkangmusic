import React, { Component } from 'react'
import Header from "../components/Header"
import {Route,Switch,Redirect} from "react-router-dom"
import Rank from "../components/Rank"
import Recommend from "../components/Recommend"
import MusicList from "../components/Recommend/musicList"
import Search from "../components/search"
import Input from "../components/Input/index"

import User from "../User/index"
import "./index.css"
export default class index extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="context">
                    <Switch>
                            <Route path="/recommend" component={Recommend}/>
                            <Route path="/rank" component={Rank}/>
                            <Route path="/musicList" component={MusicList}/>
                            <Route path="/input" component={Input}/>
                            <Route path="/Search" component={Search}/>
                            <Route path="/user" component={User} />
                            
                        
                    </Switch>
                </div>
            </div>
        )
    }
}
