import React, { Component } from 'react'
import "./ListTitle.css"
//import {Link} from "react-router-dom"
export default class ListTitle extends Component {
    render() {
        return (
            <div className="box">
                <h3 className="title">{this.props.title}</h3>               
                {/* <Link to="/more"><span className="more"></span></Link> */}
               
            </div>
        )
    }
}
