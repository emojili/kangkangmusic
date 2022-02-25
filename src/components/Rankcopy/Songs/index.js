import React, { Component } from 'react'
import axios from 'axios'
import {PlayCircleOutlined,HeartOutlined} from '@ant-design/icons'
import "../../Recommend/musicList/index.css"
export default class Songs extends Component {
    state={
        mid:''
    }
    componentDidMount(){
        //console.log(this.props)
        axios.get(`/getAlbumInfo?albummid=${this.props.albumMid}`)
        .then(res => {
           this.setState({
               mid:res.data.response.data.list[0].songmid
           })
        })
        .catch(err => {
           
        })
       
    }

    componentWillUnmount() {
        this.setState = (state, callback) => {
          return
        }
      }
      
    render() {
        return (
            <div>
               
            
           <div className="musicItem">
                  <h2 className="musicName" onClick={this.toPlay}>{this.props.title}</h2>
                  <PlayCircleOutlined style={{color:"red"}} className="all" />
                  <HeartOutlined style={{color:"red"}} className="alla"/>
                     <span className="author">
                         {this.props.singerName} &emsp;
                         {this.props.rankValue}
                     </span>
         </div>
             
         
         </div>
        )
    }
    toPlay=()=>{
        console.log(this.props)
       this.props.history.push("/play",{mid:this.state.mid,ablumId:this.props.albumMid})
    }
}
