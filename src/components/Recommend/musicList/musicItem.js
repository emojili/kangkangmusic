import React, { Component } from 'react'
import {CrownOutlined,PlayCircleOutlined,HeartOutlined} from '@ant-design/icons'
import "./index.css"
export default class musicItem extends Component {
    render() {
        // {{item.singer[0].name}}/{{item.album.title}} {{item.album.subtitle}
        console.log( this.props.isvip)

        return (
            <div className="musicItem">
                <h2 className="musicName" onClick={this.toPlay}>{this.props.name}
                </h2>
                <PlayCircleOutlined style={{color:"red"}} className="all" />
                <HeartOutlined style={{color:"red"}} className="alla"/>
                    {
                        this.props.isvip
                        ?
                        <CrownOutlined style={{fontSize :"16px",color:"#D4AF37"}} />
                        :
                        <span></span>
                    }
                {/* <div className="ic_left">
                    <PlayCircleOutlined className="playAll" />
                </div> */}
                <span className="author">
                    {this.props.singer[0].name} &emsp;
                    {this.props.album.title} &emsp; 
                    {this.props.album.subtitle}
                </span>
            </div>
        )
    }
    toPlay=()=>{
        this.props.history.push("/play",{mid:this.props.mid,ablumId:this.props.album.mid})
    }
}
