import React, { Component } from 'react'
import {CrownOutlined,HeartOutlined} from '@ant-design/icons'
import {PlayCircleOutlined} from '@ant-design/icons'
export default class musicItem extends Component {
  componentDidMount() {
    console.log(this.props)
  }

  render() {

    // {{item.singer[0].name}}/{{item.album.title}} {{item.album.subtitle}
    return (
        <div className="musicItem">
          <h2 className="musicName" onClick={this.toPlay}>{this.props.songname}</h2>
          <PlayCircleOutlined style={{color:"red"}} className="all" />
          <HeartOutlined style={{color:"red"}} className="alla"/>
          {
            this.props.isvip
                ?
                <CrownOutlined style={{fontSize :"16px",color:"#D4AF37"}} />
                :
                <span></span>
          }
          <span className="author">
                    {this.props.singer[0].name} &emsp;
            {this.props.albumname} &emsp;

                </span>
        </div>
    )
  }
  toPlay=()=>{

    //console.log(this.props.mid,this.props.album.mid)
    this.props.history.push("/play",{mid:this.props.songmid,ablumId:this.props.albummid})
  }
}
