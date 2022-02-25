import React, { Component } from 'react'
import axios from 'axios'
import Songs from './Songs'
import './index.css'
export default class index extends Component {
     state={
         res:[]
     }
    componentDidMount(){
        // console.log(this.props.location.state);
    //     export const getSongLists=(params)=>axios.get("/getSongLists",{params})
    //     getSongListDetail(this.props.location.state).then(res=>{
    //         // console.log(res.data);
    //         document.querySelector(".Icontent").innerHTML=res.data.response.cdlist[0].desc
    //         this.setState({
    //             logo:res.data.response.cdlist[0].logo,
    //             dissname:res.data.response.cdlist[0].dissname,
    //             songlist:res.data.response.cdlist[0].songlist,
    //             isvip:res.data.response.cdlist[0].isvip===1?true:false
    //         })
    //     })
        axios.get("/getRanks")
        .then(res => {
            console.log(res)
           this.setState({
               res:res.data.response.detail.data.data.song
           })
            
           
        })
        .catch(err => {
            console.error(err); 
        })

       
    }
    render() {
        return (
            <div>
                <h3 className="bang">今日榜单</h3> 
               {this.state.res.map(item=>{
                return <Songs history={this.props.history} key={item.songId} {...item}></Songs>
                
            })}
            </div>
        )
    }
}
