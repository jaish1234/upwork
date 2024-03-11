import React from "react";
import "./sign-up.css";
import Apple from "../images/Apple.png";
import google from "../images/google.png";

function Sign() {
    return (
        <>
            <div id="sign-bac">
                <div id="sigin">
                    <div className="sign">
                        <p id="sign">Sign up to find work you love</p>
                        <div className="apple">
                            <img
                                className="apple1"
                                alt="not found"
                                src={Apple}  
                            ></img>
                            <input
                                type="submit"
                                className="apple2"
                                value="Continue with Apple"
                            ></input>
                        </div>
                        <div className="google">
                            <img
                                className="google1"
                                src={google}
                                alt="not found"   
                            />
                            <input
                                type="submit"
                                className="google2"
                                value="Continue with Google"
                            ></input>
                        </div>
 
                        <hr></hr>
                        <p id="or">or</p>

                        <div className="first">
                            <div className="aa">
                                <input
                                    type="text"
                                    placeholder="First name"
                                    className="first1"
                                />
                            </div>
                            <div className="aaa">
                                <input
                                    type="text"
                                    placeholder="Last name"
                                    className="first2"
                                />
                            </div>
                        </div>

                        <input
                            type="email"
                            placeholder="Email"
                            className="first1 emp"
                        />
                        <input
                            type="password"
                            placeholder="Password (8 or more characters)"
                            className="first1 emp"
                        />

                        <input
                            type="password"
                            placeholder="Canform Password (8 or more characters)"
                            className="first1 emp"
                        />

                        <select
                            id="country"
                            name="country"
                            className="first1 emp"
                        >
                            <option>Country</option>
                            <option>Azerbaijan</option>
                            <option>America</option>
                            <option>Australian Dollar</option>
                            <option>Brazilian</option>
                            <option>Bangladesh</option>
                            <option>British</option>
                            <option>Canada</option>
                            <option>Central African CFA Franc</option>
                            <option>Egypt</option>
                            <option>Euro</option>
                            <option>Hong Kong </option>
                            <option>India</option>
                            <option>Iran</option>
                            <option>Indonesia</option>
                            <option>Japan</option>
                            <option>Landon</option>
                            <option>Moroccan</option>
                            <option>New Taiwan</option>
                            <option>New Zealand</option>
                            <option>Pakistan</option>
                            <option>Romanian</option>
                            <option>Russian</option>
                            <option>Singapor</option>
                            <option>South Africa</option>
                            <option>shrilanka</option>
                            <option>Turki</option>
                        </select>

                        <div className="check1">
                            <input
                                type="checkbox"
                                className="check"
                                name="check"
                            />
                            <p className="check2">
                                Send me helpful emails to find rewarding work
                                and job leads.
                            </p>
                        </div>
                        <div className="check1">
                        <input
                                type="checkbox"
                                className="check"
                                name="check"
                            />
                            <p className="check2">
                                Yes, I understand and agree to the <a href="@" className="check3">TalentHub Terms
                                of Service </a>, including the <a href="@" className="check3">User Agreement </a>and
                                <a href="@" className="check3"> Privacy Policy</a> .
                            </p>
                        </div>
                        <button className="acc-butt">Create my Account</button>

                    <p className="last">Already have an account? <a href="@" className="check3">Log In</a></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sign;
