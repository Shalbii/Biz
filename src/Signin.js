import React from "react";

import "./style/signup.css";
import Logo from "./m.png";

import { useState } from "react";
export default function Signin() {


    //const [Otp, setOtp] = useState("");
    const [show, setShow] = useState(false);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [Password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [Email, setEmail] = useState("");
    const handleClick = () => {
        setShow(!show);

    };
    return (
        <>
            <div>< Popscreen show={show} setShow={setShow} /></div>
            <div className="Signin_out">
                <div className="Signin_in">
                    <div className=" Signin_in_r1">
                        <img src={Logo} alt="hi"></img>
                        <label>LOGO</label>
                    </div>
                    <div className="Signin_in_r2">
                        <label>Welcome</label>
                    </div>
                    <div className="Signin_in_r3">
                        <label>Please sign up your account</label>
                    </div>
                    <div className="Signin_in_r4">
                        <div className="Signin_in_r4_input">
                            <input type="text" onChange={(e) => (setFirstname(e.target.value))} placeholder="FirstName"></input>

                            <label>{firstname}</label>
                        </div>

                        <div className="Signin_in_input_1">
                            <input type="text" onChange={(e) => (setLastname(e.target.value))} placeholder="Last Name"></input>

                            <label>{lastname}</label>
                        </div>
                    </div>
                    <div className="Signin_in_r5">
                        <input type="text" onChange={(e) => (setEmail(e.target.value))} placeholder="Email" />

                        <label>{Email}</label>
                    </div>

                    <div className="Signin_in_r6">
                        <input type="password" onChange={(e) => (setPassword(e.target.value))} placeholder="Password" />

                        <label>{Password}</label>
                    </div>
                    <div className="Signin_in_r7">
                        <input type="password" onChange={(e) => (setRePassword(e.target.value))} placeholder="RE-Password" />

                        <label>{rePassword}</label>
                    </div>

                    <div className="Signin_in_r8">
                        <input type="checkbox" ></input>
                        {/* <div className="Signin_in_r9"> */}
                        <label>By clicking on Register,you agree to our <span>Terms and Conditions </span> of use</label>
                        {/* </div> */}
                    </div>

                    <div className="Signin_in_button">
                        <button onClick={handleClick} > REGISTER</button>
                    </div>

                </div>
            </div>

        </>

    );
}




// const handleClose = () => {
//  setShow(false);

function Popscreen({show, setShow}) {
    return show ? (
        <div className="modalbox">
            <div className="modal">
                <h1> Verify otp</h1>
                {<input type="text" placeholder="Otp" />}
                {/* <label>{Otp}</label> */}
                <button  >Resend</button>
                <button >Verify</button>
            </div>

        </div>
    ) : (


        <> </>
    );
    //}

}


