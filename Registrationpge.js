import React,{useState} from "react";
import './Registrationpge.css';

const Registrationpge=()=>{

    const [action,setAction] = useState("Sign Up");
  
    return(
        <><div className="container">
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    {action==="Login"?<div></div>:<div className="input">
                        <img src='./person.png' alt="" id='img1' />
                        <input type="text" placeholder='Name' />
                    </div>}
                    <div className="input">
                        <img src='mail.png' alt="" id='img2' />
                        <input type="mail" placeholder='Mail id' />
                    </div>
                    <div className="input">
                        <img src='password.png' alt="" id='img3' />
                        <input type="password" placeholder='Password' />
                    </div>
                </div>
                {action==="Sign Up"?<div></div>:<div className='Forgot-password'>Lost Password? <span>Click Here!</span></div>}
                <div className='submit-container'>
                    <div className={action==="Login"?"submitgray":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                    <div className={action==="Sign Up"?"submitgray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
                </div>
            </div></>
    )
  }
  export default Registrationpge