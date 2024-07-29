 import React from "react";
import '../css/login.css'
import SignIn from "./login1";
import SignUp from "./register";
import AuthDetails from "./AuthDetails";

 
 function login(){
    return(
        <div>
            <SignIn/>
            <SignUp/>
            <AuthDetails/>

        {/* <form className="field">
            <div>
                <h2 style={{paddingTop:"40px"}}>Login Page</h2>
                <div className="field2">
                    <label  >UserName : </label>
                    <input type="text" name="UserName"/>
                </div>
            

            
                <div className="field2">
                    <lable  >Password : </lable>
                    <input type="password" name="password"/>
                    
                </div>    
                <button style={{fontSize:"20px" , borderRadius:"10px"}}>Login</button>
            </div>
            
            
        
            
            
        </form> */}
        </div>
    )

}
export default login;
