import React, { Component } from 'react'
import {Image} from "antd"
import "./index.css"
export default class index extends Component {
    render() {
        return (
            <div className="songBox" onClick={this.handlerClick}>
                <div className="picBox">
                <Image
                    src={this.props.imgurl}
                    className="pic"
                    preview={false}
                />
                <span className="number">{this.props.listennum}</span>
                </div>
                <div className="title">
                    {this.props.dissname}
                </div>
            </div>
        )
    }
    handlerClick=()=>{
        //编程式路由
        this.props.history.push("/musicList",this.props.dissid)
    }
}
