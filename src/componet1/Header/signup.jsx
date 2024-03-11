import React, { useState } from "react";
import "./signup.css";
import logo from "../../assets/image/home-page/header-logo.png";
import { useNavigate } from "react-router-dom";

function Signup() {
    let navigat = useNavigate();

    let [Acolor, chageBcolor] = useState()
    let [Aborder, chageBborder] = useState()
    let [Acolor1, changeBcolor1] = useState()
    let [Aborder1, changeBborder1] = useState()

    return (
        <>
            <div>
                <img src={logo} alt="not found" className="logo" />
            </div>
            <div>  
                <div className="heading">
                    <p className="join">Join as a Client or Freelancer</p>

                    <div className="main">
                        <div className="client" style={{backgroundColor:Acolor,borderColor:Aborder}}>
                            <div className="content">
                                <svg className="svgtag" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-name="Layer 1" viewBox="0 0 24 24" role="img"><path fill="none" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.28 21h-6.9a1.6 1.6 0 01-1.73-1.5v-4a1.6 1.6 0 011.73-1.5h6.9A1.59 1.59 0 0121 15.5v4a1.66 1.66 0 01-1.72 1.5z"></path><path fill="none" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.9 12h-2.15a.65.65 0 00-.72.66V14h3.59v-1.34a.65.65 0 00-.72-.66z"></path><line x1="10.65" x2="21" y1="17.29" y2="17.29" fill="none" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></line><circle cx="10.04" cy="5.73" r="2.73" fill="none" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></circle><path fill="none" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 18.45v-.9a7 7 0 017-7h.09a6.73 6.73 0 011.91.27"></path></svg>
                                <input type="radio" className="radio1" id="radio" name="radio" onClick={() => {
                                chageBcolor("rgb(249, 252, 249)")
                                changeBcolor1("")
                                chageBborder("green") 
                                changeBborder1("")
                            }} />
                            </div>
                            <p className="client1">I'm a client, hiring for a project</p>
                        </div>
                        <div className="client" style={{backgroundColor:Acolor1,borderColor:Aborder1}}>
                            <div className="content">
                            <svg className="svgtag" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-name="Layer 1" viewBox="0 0 24 24" role="img"><polygon fill="none" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" points="19.38 21 8.38 21 10 14 21 14 19.38 21"></polygon><circle cx="14.69" cy="17.5" r=".5" fill="var(--icon-color, #001e00)" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round"></circle><line x1="9.43" x2="5.99" y1="21" y2="21" fill="none" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></line><circle cx="10.04" cy="5.73" r="2.73" fill="none" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></circle><path fill="none" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 18.45v-.9a7 7 0 017-7h.09a6.94 6.94 0 013.79 1.12"></path></svg>
                                <input type="radio" className="radio2" id="radio" name="radio" onClick={() => {
                                chageBcolor("")
                                changeBcolor1("rgb(249, 252, 249)")
                                chageBborder("")
                                changeBborder1("green")
                            }} />
                            </div>
                            <p className="client1">I'm a Freelancer, looking for work</p>
                        </div>
                    </div>
                    <button className="button">Create Account</button>
                    <p className="log">Already have an account? <a onClick={() => navigat("/Login1")} className="login">Log In</a></p>
                </div>
            </div>
        </>
    );
}

export default Signup;
