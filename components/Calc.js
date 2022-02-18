import React, { useState } from "react";
import Layout from "../containers/Layout";
export default function Calc(){
    const [num1 ,setNum1] = useState()
    const [num2 ,setNum2] = useState()
    const [opcode ,setOpcode] = useState()
    const [result, setResult] = useState(0)
    const sum = ()=>{
        let num1 = document.getElementById('num1').value 
        console.log('숫자 1 :' +num1)
        let num2 = document.getElementById('num2').value 
        console.log('숫자 2:' +num2)
        setNum1(num1)
        setNum2(num2)
        switch(opcode){
            case "+" :return setResult (Number (num1) +Number(num2)) 
            case "-" :return setResult (Number (num1) -Number(num2)) 
            case "*" :return setResult (Number (num1) *Number(num2)) 
            case "/" :return setResult (Number (num1) /Number(num2)) 
            case "%" :return setResult (Number (num1) %Number(num2)) 
            default :
            setOpcode(document.getElementById('opcode').value);
        }

    }

    return(<Layout><h1>계산기</h1><div>
        <from action = "">
        <label><b>num 1<br/></b></label>
            <input id = "num1" type="" /><br />
            <label htmlFor=""><b>opcode<br/></b></label>
            <select name="" id="opcode">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
            <option value="%">%</option>
            </select>
            <br/>

            <label htmlFor=""><b>num 2<br/></b></label>
            <input id = "num2" type= ""/><br/>
            <button onClick={()=>{sum()}}>실행</button><br/><br/>
            </from>
            <div>결과 : {num1} {opcode} {num2} = {result} </div>
        </div>
        
    </Layout>)
}
