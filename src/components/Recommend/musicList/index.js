import React, { Component } from 'react'
import {Image} from "antd"
import { PlayCircleOutlined, HeartOutlined} from '@ant-design/icons';
import {ArrowLeftOutlined} from  '@ant-design/icons'
import {getSongListDetail} from "../../../api/SongLists"
import MusicItem from "./musicItem"
import "./index.css"
export default class index extends Component {
    constructor(){
        super()
        this.state={
            logoSrc:"https://bizaladdin-image.baidu.com/0/pic/dae9424d1e0b92e65403cc7de34c1181.jpg",
            logo:"",
            dissname:"",
            desc:"",
            songlist:[],
            isvip:false
        }
    }
    componentDidMount(){
        // console.log(this.props.location.state);
        getSongListDetail(this.props.location.state).then(res=>{
            // console.log(res.data);
            document.querySelector(".Icontent").innerHTML=res.data.response.cdlist[0].desc
            this.setState({
                logo:res.data.response.cdlist[0].logo,
                dissname:res.data.response.cdlist[0].dissname,
                songlist:res.data.response.cdlist[0].songlist,
                isvip:res.data.response.cdlist[0].isvip===1?true:false
            })
        })
        
    }
    render() {
        return (
            <div>
                <div className="h_controll">
                  <ArrowLeftOutlined className="back" onClick={this.goBack} />
                 
                </div>
                <div className="offical">
                    <Image
                    src={this.state.logo}
                    className="bg"
                   />
                   <div className="introductionBox">
                    <div className="introductionWrap">
                            <div className="itop">
                                <Image
                                width={30}
                                preview={false}
                                // src={this.state.logoSrc}
                                />
                                <span>{this.state.dissname}</span>
                            </div>
                            <p className="Icontent">
                             
                            </p>
                            <div className="iControll">
                                <div className="ic_left">
                                    <PlayCircleOutlined className="playAll" />
                                </div>
                                <div className="ic_right" onClick={this.handlerClick}>
                                    <HeartOutlined className="Heart"/>
                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    this.state.songlist.map(item=>{
                        return <MusicItem songlist={this.state.songlist} history={this.props.history} key={item.id} {...item} isvip={this.state.isvip}></MusicItem>
                    })
                }
            </div>
        )
    }
    goBack=()=>{
        this.props.history.go(-1)  
       }
}
