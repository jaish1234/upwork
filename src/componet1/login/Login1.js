import React, { useEffect, useState } from "react";
import "./Login1.css";
import logo from "../../assets/image/home-page/header-logo.png";
import google from "../../assets/image/home-page/google.png";
import Apple from "../../assets/image/home-page/Apple.png";
import { auth, provider } from "./Loginconfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Glogin from "./Glogin";

function Login1() {
    let navigate1 = useNavigate();

    //login button throw login to validation

    const [value1, setvalue1] = useState({});
    const [errors, seterror] = useState({});
    console.log("errors", errors);
    console.log("value1", value1);
    function Hchange(e) {
        setvalue1({ ...value1, [e.target.name]: e.target.value });
        seterror({ ...errors, [e.target.name]: "" });
    }
    console.log("value1", value1);

    function hsubmit(e) {
        e.preventDefault();
        const validaterror = validate(value1);
        if (Object.keys(validaterror).length === 0) {
            console.log("done");
        }
    }

    const validate = (value1) => {
        let errors = {};
        const mailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!value1?.email) {
            errors.email = "Email Required";
        } else if (!mailregex.test(value1?.email)) {
            errors.email = "Invalid Email Address";
        }
        seterror(errors);
        return errors;
    };

    // Firebase -> Continue with Google

    const [value, setvalue] = useState("");

    const handClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setvalue(data.user.email);
            localStorage.setItem("email", data.user.email);
        });
    };

    const logout = () => {
        localStorage.clear();
        window.location.reload();
    };
    useEffect(() => {
        setvalue(localStorage.getItem("email"));
    });

    return (
        <>
        {!value1.email && (
        <div className="lmain">
            <div>
                <img src={logo} className="logoa1" alt="not found" />
            </div>

            <div className="log1">
                <div className="log2">
                    <div className="log3">
                        <form action="" onSubmit={(e) => hsubmit(e)}>
                            <p className="log4">Log in to Upwork</p>
                            <div className="c3">
                                <div className="c4">
                                    <span class="material-symbols-outlined">person</span>
                                </div>
                                <input onChange={Hchange} value={value1.email} type="email" name="email" placeholder="Username or Email"/>
                            </div>
                            {errors.email && (<p style={{ color: "red" }}>{errors.email}</p>)}
                            <button className="conti" type="submit">Continue with Email</button>
                        </form>
                    </div>

                    <div className="log5">
                        <hr className="hr"></hr>
                        <p id="or">or</p>
  
                        <div className="google">
                            <img className="google1" src={google} alt="not found"/>

                            {value ? (
                                <button type="button" onClick={logout} className="google2">Logout</button>
                            ) : (
                                <button type="button"onClick={handClick}className="google2"> Continue with Google</button>
                            )}
                        </div>

                        <div className="apple">
                            <img className="apple1" alt="not found" src={Apple}></img>
                            <button type="submit" className="apple2">Continue with Apple</button>
                        </div>

                        <hr className="hr hr3"></hr>
                        <p id="or1">Don't have an Upwork account?</p>
                        <button className="conti1" onClick={() => navigate1("/Signup")}>Sign Up</button>
                    </div>
                </div>
            </div>
            <p className="lfoot">© 2015 - 2024 Upwork® Global Inc. • Privacy Policy</p>
        </div>)}    
        <div className="Gmain">{value1?.email && <Glogin value1={value1}/>}</div>
        </>
    );
}

export default Login1;

