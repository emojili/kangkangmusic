import React, { Component } from 'react'
import List from "./List"
import "./Css/index.css"
import './List/ListTitle/ListTitle.css'
import Rankcopy from '../Rankcopy'
import {getSongLists} from "../../api/SongLists"
import { Carousel } from 'antd';
export default class index extends Component {
    constructor(){
        super();
        this.state = {
           list1:[],
           list2:[],
           list3:[]
        }
    }
    componentDidMount(){
        getSongLists({
            page:1,
            limit:20,
            categoryId:10000000
        }).then(res=>{
            this.setState({
                list1:res.data.response.data.list
            })
        })
        getSongLists({
            page:1,
            limit:20,
            categoryId:28
        }).then(res=>{
            this.setState({
                list2:res.data.response.data.list
            })
        })
        getSongLists({
            page:1,
            limit:20,
            categoryId:116
        }).then(res=>{
            this.setState({
                list3:res.data.response.data.list
            })
        })
        
    }

    

    render() {
        const contentStyle = {
            height: '160px',
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            background: '#364d79',
          };
        return (
            
            <div>
                <div className="lun">
                <Carousel autoplay>
                    <div>
                    <h3 style={contentStyle}><img className="aimg" alt="" src="http://p1.music.126.net/iVkI0xKzuMNTKwuHmi3Xpw==/109951166139244802.jpg"/></h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}><img className="aimg" alt="" src="http://p1.music.126.net/LvDeDfAIixgxntH1VLaZ_w==/109951166139362282.jpg"/></h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}><img className="aimg" alt="" src="http://p1.music.126.net/27iHMBr5wb_V8au9M_XpMg==/109951166139325749.jpg"/></h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}><img className="aimg" alt="" src="http://p1.music.126.net/6SsDc5p0XSClQn20FsG5ng==/109951166140075778.jpg"/></h3>
                    </div>
                </Carousel>
                </div>
                <div className="h3">
                    
                    <List data={this.state.list3} title="推荐歌单" history={this.props.history} />
                    <List data={this.state.list3} title="治愈歌单" history={this.props.history} />
                    <h3 className="title">每日推荐</h3>
                    <Rankcopy history={this.props.history}/>
                </div>
            </div>
        )
    }
}
