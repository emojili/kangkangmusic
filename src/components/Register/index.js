import React, { Component } from 'react'


export default class index extends Component {
    handleSubmit=(even)=>{
        let username=document.getElementById('username')
        let passwd=document.getElementById('passwd')
        let twise=document.getElementById('twise')
        if(username.value==""){
            alert("昵称不能为空")
            even.preventDefault();
            return 
        }else if(passwd.value==""||twise.value==""){
            alert("密码不能为空")
            even.preventDefault();
            return 
        }else if(passwd.value!==twise.value){
            alert("两次密码不一致")
            even.preventDefault();
            return 
        } else{
            let jsonUserData=localStorage.getItem("userData")
            let userData=0
            if(!jsonUserData){
                localStorage.setItem("userData",JSON.stringify(userData))
            }
            let userdata=JSON.parse(jsonUserData)
            userdata.forEach((ele) => {
                if(ele.username === username.value){
                    alert("此用户名存在")
                    even.preventDefault()
                    return 
                } 
            });
            let user={username:username.value,passwd:passwd.value}
            userdata.push(user)
            localStorage.setItem("userData",JSON.stringify(userdata))
        }
    }
    render() {
        return (
            <form  className="rlogin_form" action="/user/login" onSubmit = {this.handleSubmit}>
           
            用&emsp;户名：<input id="username" type='text'  className="login_list" placeholder="请输用户名"/><br/>
            <br/>
            密&emsp;&emsp;码：<input id="passwd" type="password"  className="login_list" placeholder="请输入密码"/><br/><br/> 
            确认密码：<input id="twise" type="password"  className="login_list" placeholder="确认密码"/><br/>
            <br/><input  type="submit"   className="rlogin_sub" value="注册" /><br/>
        </form>
        )
    }
}