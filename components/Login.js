import React, { useState } from "react";
import Layout from "../containers/Layout";
import { useLinkClickHandler } from "react-router-dom";
import { memberLogin } from "../api";
export default function Login (){
    const [inputs, setInputs] = useState({})
    const [result, setResult ] = useState('')
    const {name, id ,password} = inputs;
    const handleChange = (e)=>{
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs, [name] : value
        })
    }
    const handleClick = (e) => {
        e.preventDefault()
        const loginRequest = {name, id ,password}
        memberLogin({name, id ,password}).then(res => setResult(res.data)).catch(err => console.log(`에러발생 : ${err}`))
        alert(`사용자이름 : ${JSON.stringify(loginRequest)}`)
    }
    return(<Layout>
        <form>
        <h1>로그인폼 </h1>
            
    <div>
    <label>Username</label><br/>
    <input name="name" type = "text" onChange={handleChange} />

    <label htmlFor=""><br/>id</label><br/>
    <input name="id" type = "text" onChange={handleChange} />
    
    <label htmlFor=""><br/>Password</label><br/>
    <input name="password" type = "text" onChange={handleChange} />
    <br/><button onClick={handleClick}>Login</button><br/><br/>

            
    </div>
    </form>
    <div>결과 {result}</div>
    </Layout>
    )
}
