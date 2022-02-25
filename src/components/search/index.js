import React, { Component } from 'react'
// import { getRanks } from "../../../api/Song"
import {getSongListDetail1} from "../../api/SongLists/index"
import "./index.css"
//import MusicItem from "../Recommend/musicList/musicItem";
import Songs from "./Songs"
export default class RankDetails extends Component {
  constructor(props){
    super(props)
    this.state ={
      mv:[],
      songlist:[],
      song:'',
       song1:[],
       singer:[],
       album:[{aa:"zxc"}],
      imgurl:''
    }
  }
  componentDidMount =async ()=>{
    console.log(this.props.location.state)
    await this.setState({
      album:this.props.location.state.album.itemlist,
      song:this.props.location.state.s.itemlist[0].singer,
      mv:this.props.location.state.mv,
       singer:this.props.location.state.singer,
       song1:this.props.location.state.song,
      imgurl:this.props.location.state.songer.itemlist[0].pic
    })
    getSongListDetail1(this.state.album[0].mid).then(
      res =>{
        console.log(res)
        const a = res.data.response.data.list
        this.setState({
          songlist:a
        })
      }
  )
    // getRanks({
    //   topId:this.props.location.state
    //   // this.props.location.state
    // }).then(res=>{
    //   console.log(res.data.response.detail.data.data);
    //   this.setState({
    //     Ranks:res.data.response.detail.data.data,
    //     song:res.data.response.detail.data.data.song,
    //     imgurl:res.data.response.detail.data.data.song[0].cover
    //   })
    // })

  }
  render() {
    return (
        <div className='detailcontent'>
          {/* detail
                {this.props.location.state} */}
          {/* <div className="ycfhead1">
            <div className="ycfhead_top">
              <p onClick={this.back} className="iconfont">&#xe66c;</p>
              <span className="iconfont">&#xe8af;</span>
              <span className="iconfont">&#xe67d;</span>
            </div>
            <div className="ycfhead_body iconfont">
              <div className="ycfhead_bodyleft">
                <span>{
                  this.state.song
                }
                </span>
                <p></p>
                <span>最近更新专辑&#xe665;</span>
              </div>
              <div className="ycfhead_bodyright">
                <img alt="" src={this.state.imgurl}/>
              </div>
            </div>
          </div> */}
          {/*<div className="ycfvedio iconfont">*/}
          {/*  <a href="#" className="ycfvedioactive">&#xe688;</a>*/}
          {/*  <p>全部播放(100)</p>*/}
          {/*  /!* <a href="#" className="ycfvediolb">&#xe603;</a>*/}
          {/*      <a href="#" className="ycfvediodld">&#xe640;</a> *!/*/}
          {/*</div>*/}
          {/* {this.state.album.map((item,index)=>{
            return (
                <div className="ycfbanner" key={index} onClick={this.song(item.mid)}>
                  <div className="ycfbannerson iconfont">
                    <div className="bannersonhd">
                      <img src={item.pic} />
                    </div>
                    <div className="bannersonna">
                      <div>{item.title}</div>
                      <div className="bannersonna_span">
                        <span className="bannersonna_shu">限免</span>
                        <span className="bannersonna_aut">{item.name}</span>
                      </div>
                    </div>
                    <div className="bannersonha">
                      <a className="bannersonha_ved" href="#">&#xe688;</a>
                      <a className="bannersonha_mor" href="#">&#xe8af;</a>
                    </div>
                  </div>
                </div>
            )})

          } */}
          {
            this.state.songlist.map(item=>{
              return <Songs history={this.props.history} key={item.id} {...item} isvip={this.state.isvip}></Songs>
            })
          }
        </div>
    )
  }
  back=()=>{
    this.props.history.go(-1)
  }
  song=(data)=>{
    return ()=>{
      //this.props.history.push("/View/musicList",this.state.album[0].mid)
     // this.props.history.push({pathname:"/play",state:{ablumId:e.ablumId,mid:e.mid}})
     // <MusicItem history={this.props.history} key={item.id} {...item} isvip={this.state.isvip}></MusicItem>
      this.props.history.push()
    //   getSongListDetail1(data).then(
    //       res =>{
    //         console.log(res)
    //         const a = res.data.response.data.list
    //         this.setState({
    //           songlist:a
    //         })
    //       }
    //   )

    // }
  }
  }
}
