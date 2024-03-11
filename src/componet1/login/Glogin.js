import React from "react";
import "./Glogin.css";
import logo from "../../assets/image/home-page/header-logo.png";
// import {useLocation } from "react-router-dom";

function Glogin({ value1 }) {
    // console.log("dddddddddd", value1?.email);
    // const loc = useLocation()
    // const {email} = loc.state
    return (
        <>
        <div className="Gmain">
            <div>
                <img src={logo} className="logoa1" alt="not found" />
            </div>
            <div className="well">  
                <div className="well1">
                    <div className="well2">
                        <p className="well3">Welcome</p>

                        <p style={{ padding: "1.2rem 0rem 0.5rem 0rem" }}>{value1.email}</p>

                        <form className="f1">
                            <div className="c3 c5">
                                <div className="c4">
                                    <span class="material-symbols-outlined">lock</span>
                                </div>
                                <input type="password" name="email" placeholder="Password"/>
                            </div>
                            <div className="forgot">
                                <div className="forgot forgoo">
                                    <input type="checkbox" className="chek" />
                                    <p>Keep me logged in</p>
                                </div>
                                <a href="/Forgot" className="forgot1">Forgot password?</a>
                            </div>
                            <button className="lbtn" type="submit">Log in</button>
                        </form>
                        <a href="/Login1" className="not">Not You?</a>
                    </div>
                </div>
            </div>
            <div className="response-forgot">
                <a href="Forgot">Forgot password?</a>
                <a href="/Login1">Not You?</a>
            </div>
            <p className="lfoot lfoot1">© 2015 - 2024 Upwork® Global Inc. • Privacy Policy</p>
        </div>
        </>
    );
}

export default Glogin;
