import React, { Component } from 'react'
import {ArrowLeftOutlined} from  '@ant-design/icons'
import './index.css'
import List from "../../Recommend/Listcopy"
import "../../Recommend/Css/index.css"
import {getSongLists} from "../../../api/SongLists"
export default class More extends Component {
    constructor(){
        super();
        this.state = {
           list1:[],
           list2:[],
           list3:[],
           list4:[],
           list5:[],
           list6:[],
           list7:[],
           list8:[]
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
        getSongLists({
            page:1,
            limit:20,
            categoryId:133
        }).then(res=>{
            this.setState({
                list4:res.data.response.data.list
            })
        })
        getSongLists({
            page:1,
            limit:20,
            categoryId:194
        }).then(res=>{
            this.setState({
                list5:res.data.response.data.list
            })
        })
        getSongLists({
            page:1,
            limit:20,
            categoryId:148
        }).then(res=>{
            this.setState({
                list6:res.data.response.data.list
            })
        })
        getSongLists({
            page:1,
            limit:20,
            categoryId:199
        }).then(res=>{
            this.setState({
                list7:res.data.response.data.list
            })
        })
        getSongLists({
            page:1,
            limit:20,
            categoryId:39
        }).then(res=>{
            this.setState({
                list8:res.data.response.data.list
            })
        })
        
    }
    render() {
        return (
            <div className="backg">
                <div className="head1">
                <div className="h_controll">
                  <ArrowLeftOutlined className="back" onClick={this.goBack} />
                 
                </div>
                 
                 <div className="gedangc"><h2>????????????</h2></div>
                 <div>
                    <List data={this.state.list8} title="AGG??????" history={this.props.history} /> 
                    {/* <List data={this.state.list1} title="????????????" history={this.props.history} /> */}
                    <List data={this.state.list2} title="????????????" history={this.props.history} />
                    <List data={this.state.list3} title="????????????" history={this.props.history} />
                    <List data={this.state.list4} title="????????????" history={this.props.history} />
                    <List data={this.state.list5} title="????????????" history={this.props.history} /> 
                    <List data={this.state.list6} title="????????????" history={this.props.history} /> 
                    <List data={this.state.list7} title="??????????????????" history={this.props.history} /> 
                    
                                   
                    </div>
                </div>
            </div>
        )
    }
    goBack=()=>{
        this.props.history.go(-1)  
       }
}
