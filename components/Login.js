import React from "react";
import Layout from "../containers/Layout";
export default function Login (){
    return(<Layout>
        <h1>로그인폼 </h1>
        <form>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <label htmlFor="">Username</label><br/>
                <input type="text" />
                <label htmlFor=""><br/>Password</label><br/>
                <input type="text" />
                <br/><button>Login</button><br/><br/>
                <input type="text" /><br/> Remember me
                <label><br/><br/>
                
              </label>
            </div>
            <div>
                <button>Cancel</button>
                <span>
                <br/> Forgot<a>password</a>
                </span>
            </div>
        </form>
    </Layout>
    )
}
