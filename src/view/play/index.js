import React, { Component,createRef } from 'react'
import {ArrowLeftOutlined,MoreOutlined,BackwardOutlined,PlayCircleOutlined,ForwardOutlined,PauseCircleOutlined} from  '@ant-design/icons'
import {Carousel,Image,Slider,message} from "antd"
import BScroll from "better-scroll"
import {secondFromat} from "../../util"
import {getImageUrl,getLyric,getMusicPlay} from "../../api/Song"
import "./index.css"
export default class index extends Component {
    constructor(props){
        super(props)
        this.divRef = createRef()
        this.audioRef = createRef()
        this.state ={
            BScroll:"",
            imgUrl:"",
            audioSrc:"",
            title:"",
            author:"",
            //里面包含txt 歌词 time对应时间
            lyricArr:[],
            current:0,
            endTime:"",
            isPlay:props.location.state.isPlay,
            max:"",
            rowIndex:0,
            ablumId:"",
            mid:this.props.location.state.mid,
            //第几首
            index:0
        }
    }
    componentDidMount (){
        this.init()
        const wrapper =  this.divRef.current;
        this.bscroll = new BScroll(wrapper,{
            probeType:3,
            scrollY:true,
            click:true  //允许点击其中的内容
        })
        //暴露出去访问
        // this.setState({
        //     BScroll:bscroll
        // })
    }
    render() {
        return (
            <div className="playPage">
                <audio ref={this.audioRef}  onCanPlay={this.CanPlay} onTimeUpdate={this.changeTime}>
                </audio>
                <div className="h_controll">
                  <ArrowLeftOutlined className="back" onClick={this.goBack} />
                  <MoreOutlined />
                </div>
                <div className="playBox">
                    <h2 className="songName">{this.state.title}--{this.state.author}</h2>
                    {/* <p className="songAuthor">{this.state.author}</p> */}
                </div>
                {/* 滑动的块 */}
                <div className="switchBox">
                    <Carousel className="box" dotPosition="bottom">
                        <div className="switchItem">
                            <Image
                             src={this.state.imgUrl}
                             style={this.state.isPlay?"":{animationPlayState:"paused"}}
                            />
                        </div>
                        <div className="switchItem">
                            <div className="wrapper" ref={this.divRef}>
                                <ul className="songText" style={{height:this.state.lyricArr.length*30+"px"}}>
                                    {
                                        this.state.lyricArr.map((item,index)=>{
                                            return <li key={index} 
                                                className={this.state.rowIndex===index?"selected":""}>
                                                {item.txt}
                                                </li>
                                        })
                                    }
                                    
                                </ul>
                            </div>
                        </div>
                    </Carousel>
                </div>
                {/* 控制块 */}
                <div className="controller_box">
                    <div className="controller">
                    <span className="currentTime">{secondFromat(this.state.current)}</span>    
                    <Slider value={this.state.current}
                        className="slider"
                        min={0}
                        max={this.state.max}
                        onChange={this.changeTime}
                    />
                    <span className="endTime">{secondFromat(this.state.max)}</span>    
                    </div> 
                    <div className="controller">
                        <BackwardOutlined className="icon" onClick={this.pre} />
                        {
                            this.state.isPlay
                            ?
                            <PauseCircleOutlined className="icon" onClick={this.pauseSong} />
                            :
                            <PlayCircleOutlined className="icon" onClick={this.playSong}/>
                        }
                        <ForwardOutlined className="icon" onClick={this.next}/>
                    </div>
                </div>
            </div>
        )
    }
    goBack=()=>{   
       this.props.history.goBack()
    }
    playSong=()=>{
        //播放
        this.audioRef.current.play()
        .catch(error => {
        })
        this.setState({
            isPlay:true
        })
    }
    pauseSong=()=>{
        //播放
        this.audioRef.current.pause()
        this.setState({
            isPlay:false
        })
    }
    init=async()=>{
        message.loading({ content: '加载中'});
        let ids = JSON.parse( sessionStorage.getItem("ids"));
        if(ids!=null){
            await this.setState({
                ablumId: ids.ablumIds[this.state.index],
                mid:ids.mids[this.state.index]
            })
        }else{
            await this.setState({
                ablumId: this.props.location.state.ablumId,
                mid:this.props.location.state.mid
            })
        }
        getImageUrl(this.state.ablumId).then(async(res)=>{
            await this.setState({
                 imgUrl:res.data.response.data.imageUrl
             })
         })
         getMusicPlay(this.state.mid).then((res)=>{
             this.audioRef.current.src =res.data.response.playLists[0]
         })
         getLyric(this.state.mid).then(async(res)=>{
             await this.setState({
                 title:res.data.response.lyric.tags.title,
                 author:res.data.response.lyric.tags.artist,
                 lyricArr:res.data.response.lyric.lines
             })
         })
    }
    //上一首
    pre=()=>{
       this.preOrNext(false)
    }
    //下一首
    next=()=>{
       this.preOrNext(true)
    }
    preOrNext=async(isNext)=>{
        let index = this.state.index
        if(JSON.parse(sessionStorage.getItem("ids"))!=null){
            let count = JSON.parse( sessionStorage.getItem("ids")).mids.length;
            if(isNext){
                index++
            }else{
                index--
            }
            //边界判断
            if(index<0){
                index=count-1
            }else if(index>=count){
                index=0
            }
            await this.setState({
                index:index
            })
            this.init()
        }else{
            message.info("当前只有一首歌曲")
        }
       
    }
    CanPlay=()=>{
            this.setState({
                max:this.audioRef.current.duration
            },()=>{
                if(this.state.isPlay){
                    this.audioRef.current.play().catch(error => {
                    })
                }
            })
        }
    changeTime=async(value)=>{
        //设置当前播放时间
        if(typeof value=="number"){
            this.audioRef.current.currentTime = value
           await this.setState({
                current:value
            })
        }else{
           await this.setState({
                current:value.target.currentTime
            })
        }
        //判断当前播放的第几行
        let array = this.state.lyricArr
        let current = this.state.current*1000
        // console.log(current);
        //从第二行开始
        for(let i=1;i<array.length;i++){
           if(current>=array[i-1].time && current<array[i].time){
            await this.setState({
                     rowIndex:i-1
                 })
           }
        }
        if(this.state.rowIndex>=6){
            // console.log(this.bscroll);
            this.bscroll.scrollBy(0,(this.state.rowIndex-6*30))
        }
        //document.querySelector("audio").currentTime = 10
        
    }
    }
