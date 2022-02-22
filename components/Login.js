import React, { useState } from "react";
import Layout from "../containers/Layout";
export default function Login (){
    const [username, setUserName] = useState()
    const [password,setPassword] = useState()
    const [result, setResult] = useState()
    const sum = ()=>{
        let username = document.getElementById('username').value
        console.log('이름 :' + username)
        setUserName(username)
        let password = document.getElementById('password').value
        console.log('비밀번호 : ' + password)
        setPassword(password)
        return setResult()

    }
    

    return(<Layout>
        <h1>로그인폼 </h1>
            <div>
                <img src="" alt="" />
            </div>
            <div>
            <label htmlFor="">Username</label><br/>
            <input id = "username" type = "text" />
            <label htmlFor=""><br/>Password</label><br/>
            <input id = "password" type="text" />
                <br/><button>Login</button><br/><br/>
                <input type="text" /><br/> Remember me
                <label><br/><br/></label>
            </div>
            <div>
                <button>Cancel</button>
                <span>
                <br/> Forgot<a>password</a>
                </span>
                <div>결과 : {username} {password} {result}</div>
            </div>
        </Layout>
    )
}
