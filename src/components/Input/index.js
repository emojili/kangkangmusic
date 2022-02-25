import React, { Component } from 'react'
import "./index.css"
import {getSearch} from "../../api/hot"
import {SearchOutlined} from '@ant-design/icons'
export default class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
          hot: "",
          searchcontent: []
        }
    }
    render() {
        return (
            <div className="zxh_input">
                <div className="zxh_img" >
                    <SearchOutlined style={{fontSize:"20px"}} className="zxh_img1" />
                </div>
                <input value={this.state.hot}  onChange={this.search} onFocus={this.addKeyDown}  placeholder={this.props.hot} className="SearchBox"></input>
            </div>
        )
    }
    addKeyDown=()=>{
    window.addEventListener("keydown",this.find)
  }
    search=async (e)=> {
      await this.setState({
        hot: e.target.value
      })
    }
    find= async (e)=> {
      if (e.keyCode === 13) {
        if (this.state.value !== "") {
          await getSearch(
            this.state.hot)
              .then(res => {
                console.log(res)
                 this.props.history.push("/Search",{ s:res.data.response.data.song,mv:res.data.response.data.mv,songer:res.data.response.data.singer,album:res.data.response.data.album})
                // this.setState({
                //   searchcontent:res
                // })
              })
            //this.props.history.push("/Search",res.data.response.data.song.itemlist)
            // this.props.history.push("/Search", this.state.searchcontent)
        }
      }
    }
}