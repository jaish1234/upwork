import React, { useEffect, useState } from "react";
import logo from '../images/header-logo.png';
import google from "../images/google.png";
import Apple from "../images/Apple.png";
import "./Login.css";
import validation from "./Lvalidation";
// import { useNavigate } from "react-router-dom";
import { auth, provider } from "./Loginconfig";
import { signInWithPopup } from "firebase/auth";

function Login() {
    // let navigate1 = useNavigate();

    // login button to login
      
    const [val, setval] = useState({
        name: "",
        password: "",
    });
    const [error, seterror] = useState({});

    function Achange(e) {
        setval({ ...val, [e.target.name]: e.target.value });
    }
    function hsubmit(e) {
        e.preventDefault();
        seterror(validation(val));
    }   

    useEffect(() => {
        if (
            Object.keys(error).length === 0 &&
            val.name !== "" &&
            val.password !== ""
        ) {
            alert("Form Submitted");
        }
    }, [error]);

    // firebase -> continue with google
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
            <div>
                <img src={logo} alt="not found" className="logo" />
            </div>
            <form action="" onSubmit={hsubmit}>
                <div className="log1">
                    <div className="log2">
                        <div className="log3">
                            <p className="log4">Log in to Upwork</p>
                            <div className="person">
                                <div className="person1">
                                    <span class="material-symbols-outlined">
                                        person
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Username or Email"
                                    className="user"
                                    value={val.name}
                                    name="name"
                                    onChange={Achange}
                                />
                            </div>
                            {error.name && (
                                <p style={{ color: "red", fontSize: "13px" }}>
                                    {error.name}
                                </p>
                            )}
                            <input
                                type="password"
                                placeholder="enter your password"
                                className="user1"
                                value={val.password}
                                name="password"
                                onChange={Achange}
                            />
                            {error.password && (
                                <p style={{ color: "red", fontSize: "13px" }}>
                                    {error.password}
                                </p>
                            )}
                            <button className="conti" type="submit">
                                Login
                            </button>

                            <hr className="hr"></hr>
                            <p id="or">or</p>

                            <div className="google">
                                <img
                                    className="google1"
                                    src={google}
                                    alt="not found"
                                />
                                {value ? (
                                    <button
                                        type="button"
                                        onClick={logout}
                                        className="google2"
                                    >
                                        Logout
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={handClick}
                                        className="google2"
                                    >
                                        Continue With google
                                    </button>
                                )}
                            </div>
                            <div className="apple">
                                <img
                                    className="apple1"
                                    alt="not found"
                                    src={Apple}
                                ></img>
                                <button type="submit" className="apple2">
                                    Continue with Apple
                                </button>
                            </div>

                            <p className="or1">Don't have an Upwork account?</p>
                            <button
                                className="conti1"
                                // onClick={() => navigate1("/Signup")}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            <br></br>
            <br></br>
        </>
    );
}

export default Login;
