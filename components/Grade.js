import React, { useState } from "react";
import Layout from "../containers/Layout";
import { useLinkClickHandler } from "react-router-dom";
import { memberGrade } from "../api";
export default function Grade (){
    const [inputs, setInputs] = useState({})
    const [result, setResult ] = useState('')
    const {name, eng, kor, math} = inputs;
    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs, [name] : value
        })
    }
    const handleClick =(e) => {
        e.preventDefault()
        const gradeRequest = {name,eng,kor,math}
        memberGrade({name,eng,kor,math}).then(res => setResult(res.data)).catch(err => console.log(`에러발생 : ${err}`))
        alert(`사용자이름 : ${JSON.stringify(gradeRequest)}`)
    }

    return(<Layout>
        <form>
        <h1>Grade</h1>
    <div>
    <label htmlFor="">name</label><br/>
    <input name="name"  type="text" on onChange={handleChange}/><br/>

    <label htmlFor="">eng</label><br/>
    <input name="eng"  type="text" on onChange={handleChange}/><br/>
    
    <label htmlFor="">kor</label><br/>
    <input name="kor"  type="text" on onChange={handleChange}/><br/>

    <label htmlFor="">math</label><br/>
    <input name="math"  type="text" on onChange={handleChange}/><br/>
    <br/><button onClick={handleClick}>입력</button><br/><br/>
    </div>
    </form>
    <div>결과{result}</div>
    </Layout>
    )

}
