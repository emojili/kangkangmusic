import React, { Component } from 'react'
import "./Css/index.css"


export default class index extends Component {

    handleSubmit = (even) => {
        // let isLogin = true
        // localStorage.setItem('login',isLogin)

        let isUsers=false
        let usernames=null

        let username=document.getElementById('username')
        let passwd=document.getElementById('passwd')

        if(username.value===''){
            alert("用户名不能为空")
            even.preventDefault();
            return 
        }else if(passwd.value===''){
            alert("密码不能为空")
            even.preventDefault();
            return 
        }
        const userData=[
            {username:"lijie",passwd:"lijie"},
            {username:"liuliang",passwd:"liuliang"},
            {username:"wangkang",passwd:"wangkang"},
            {username:"hongjiasheng",passwd:"hongjiasheng"},
            {username:"liuhongyang",passwd:"liuhongyang"},
            {username:"tangxiang",passwd:"tangxiang"},
        ]
        let ledata=JSON.parse(localStorage.getItem("userData"))
        if(!ledata){
            localStorage.setItem("userData",JSON.stringify(userData))
            ledata=userData
        }
        const newUserData = ledata.filter(item => (item.username === username.value && item.passwd === passwd.value))

        if(newUserData.length > 0){
            localStorage.setItem('username' , newUserData[0].username)
            localStorage.setItem('isUser' , true)
        }else{
            alert("用户名或密码错误")
            even.preventDefault();
        }
        
        /*if(isUsers==true){
            localStorage.setItem('username',usernames)
            localStorage.setItem('isUser',isUsers)
        }else{
            alert("用户名或密码错误")
            even.preventDefault();
        }*/ 
    }
    render() {
        return (
            // <div className="all">
            //     <div className="login_all">
            <div className="login-wai">
               
                <form  className="login_form" action="/recommend" onSubmit = {this.handleSubmit}>
                    用户名：<input id="username" type='text'  className="login_list" placeholder="请输入账号"/><br/>
                    <br/>
                    密&emsp;码：<input id="passwd" type="password"  className="login_list" placeholder="请输入密码"/><br/>
                    <br/>
                    <input  type="submit"   className="login_sub" value="登录" /><br/><br/>
                </form>
               
            </div>
            //     </div>
            // </div>
            
        )
    }
}