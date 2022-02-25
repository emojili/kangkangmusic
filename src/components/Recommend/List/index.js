import React, { Component,createRef} from 'react'
import ListTitle from "./ListTitle"
import Song from "./Song"
import "./index.css"
//导入
import BScroll from "better-scroll"
export default class List extends Component {
    constructor(){
        super()
        this.wrapRef = createRef();
        this.state = {
            BScroll:""    
        }
    }
    componentDidMount(){
        //初始化 获取最外层包含移动块的块
        // const wrapper = document.querySelector(".warp_List")
        const wrapper = this.wrapRef.current
        const bscroll = new BScroll(wrapper,{
            scrollX:true,
            scrollY:false,
            click:true  //允许点击其中的内容
        })
        //暴露出去访问
        this.setState({
            BScroll:bscroll
        })
    }
    render() {
        return (
            <div className="recommendList">
                <ListTitle title={this.props.title}></ListTitle>
                
                <div className="warp_List" ref={this.wrapRef}>
                    <div className="content" style={{width:"2600px"}}>
                        {
                             this.props.data.map(item=>{
                                 return <Song history={this.props.history} key={item.dissid} {...item}/>
                             })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
