import React, { useState } from "react";
import Layout from "../containers/Layout";
export default function Grade (){
    const [name, setname]= useState(0)
    const [eng, setEng] = useState()
    const [kor, setKor] = useState()
    const [math, setMath] = useState()
    const [result, setResult] = useState()
    const sum =()=>{
        let username = document.getElementById('username').value
        console.log("이름 : " + username)
        let eng = document.getElementById('eng').value
        console.log("영어 :"+ eng)
        let math = document.getElementById("math").value
        console.log("수학 :"+ math)
        let kor = document.getElementById('kor').value
        console.log("국어 :" + kor)
        setname(username)
        setEng(eng)
        setKor(kor)
        setMath(math)
        return setResult (username, eng, math, kor)
    }
    return(<Layout><h1>Grade</h1>
        <div>
        <img src="" alt="" />
        </div>
        <div>
        <label htmlFor="">name</label><br/>
        <input id = "username" type="text" /><br/>
        <label htmlFor="">eng</label><br/>
        <input id = "eng" type="text" /><br/>
        <label htmlFor="">math</label><br/>
        <input id = "math" type="text" /><br/>
        <label htmlFor="">kor</label><br/>
        <input id = "kor" type="text" /><br/>
        <button>Cancel</button><br/>
        <input type="text" /><br/> Remember me
                
                <br/><button onClick={()=>{sum()}}>입력</button><br/><br/>
                <div>결과 : {name} {eng} {math} {kor}  = {result}</div>
            </div>
        
        </Layout>
    )

}
