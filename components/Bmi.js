import React, { useState } from "react";
import Layout from "../containers/Layout";
export default function Bmi (){
    const [name, setName] = useState("")
    const [height, setHeight] = useState(0.0)
    const [weight, setWeight] = useState(0.0)
    const [result, setResult] = useState()
    const sum = ()=>{
        let name = document.getElementById('name').value
        console.log('이름 :' + name)
        setName(name)
        let height = document.getElementById('height').value
        console.log('키 :' +height)
        setHeight(height)
        let weight = document.getElementById('weight').value
        console.log('무게 :'+ weight)
        setWeight(weight) 
        return setResult ()
    }
    return(<Layout><h1>BMI 구하기</h1>
        <div>
            <img src="" alt="" />
        </div>
        <div>
        <input id = "name" type="text" />
        <label htmlFor=""><b>이름<br/></b></label>
        <input id = "height" type="text" />
        <label htmlFor=""><b>키<br/></b></label>
        <input id = "weight" type="text" />
        <label htmlFor=""><b>몸무게<br/></b></label>
            <button onClick={()=>{sum()}}>입력</button><br/><br/>
            <div>결과 : {name} {height} {weight} {result} </div>
        </div>
        </Layout>
    )

}
