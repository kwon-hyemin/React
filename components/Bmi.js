import React from "react";
import Layout from "../containers/Layout";
export default function Bmi (){
    return(<Layout><h1>BMI 구하기</h1>
     <form>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <label htmlFor=""><b>키<br/></b></label>
            <input type="text" />
            <button>입력</button><br/><br/>
            <label htmlFor=""><b>몸무게<br/></b></label>
            <input type="text" />
            <button>입력</button><br/><br/>
            
            <label htmlFor=""><b>결과</b></label>
            <input type="text" />
        </div>
    </form>
    </Layout>
    )

}