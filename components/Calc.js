import React from "react";
import Layout from "../containers/Layout";
export default function Calc(){
    return(<Layout><h1>계산기</h1>
    <form>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <label htmlFor=""><b>첫번째 숫자<br/></b></label>
            <input type="text" />
            <button>입력</button><br/><br/>
            <label htmlFor=""><b>연산자<br/></b></label>
            <input type="text" />
            <button>입력</button><br/><br/>
            <label htmlFor=""><b>두번째 숫자<br/></b></label>
            <input type="text" />
            <button>입력</button><br/><br/>
            <label htmlFor=""><b>결과</b></label>
            <input type="text" />
        </div>
    </form>    
    </Layout>)
}
