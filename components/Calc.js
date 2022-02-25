import React,{useState} from 'react' 
import Layout from '../containers/Layout'
import { useLinkClickHandler } from 'react-router-dom'
import { memberCalc } from '../api'
export default function Calc(){
    const [inputs, setInputs ] = useState({})
    const [result, setResult ] = useState('')
    const {num1, num2, opcode } = inputs;
    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs, [name]: value
        })
    }
    const handleClick = (e) => {
        e.preventDefault()
        const calcRequest = {num1,opcode,num2}
        memberCalc({num1,opcode,num2}).then(res => setResult(res.data)).catch(err => console.log(`에러발생 : ${err}`))
        alert(`사용자이름 : ${JSON.stringify(calcRequest)}`)
    }
    
    return (<Layout>
        <form>
        <h1>Calc폼</h1>
        
    <div>    
    <label><b>num1</b></label>
    <input type="text" name = "num1" onChange={handleChange} /><br />
    
    <label htmlFor=""><b>opcode</b></label>
    <select type = "text" name="opcode" onChange={handleChange}>
    <option value="+">+</option>
    <option value="-">-</option>
    <option value="*">*</option>
    <option value="/">/</option>
    <option value="%">%</option>
    </select>
    <br />
    
    <label htmlFor=""><b>num2</b></label>
    <input type="text" name = "num2" onChange={handleChange} /><br />

    <button onClick={handleClick}>더하기 실행</button>
    </div>
    </form>
    <div>결과! {result}</div>


    </Layout>)
}