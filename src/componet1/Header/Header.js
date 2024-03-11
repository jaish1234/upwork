// Authentication

import React from "react";
import "../Header/Header.css";
import logo from "../../assets/image/home-page/header-logo.png";
import { Link, useNavigate, unstable_HistoryRouter } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
    // button se new page per
    let navigat = useNavigate();

    // header -> Talent -> button change
    let buttons = document.getElementsByTagName("h3");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            document.getElementById("btn").innerHTML = this.innerHTML;
        });
    }

    // login & logout is used Authentication
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();    

    const history = unstable_HistoryRouter;

    const hlogin = () => {
        loginWithRedirect()
            .then(() => {
                history.push("./Lheader");
            })
            .catch((error) => {
                console.error("Login failed:", error);
            });
    };

    const hlogout = () => {
        history.push("./Lheader");
        logout({
            logoutParams: { returnTo: window.location.origin },
        });
    };

    return (
        <>
            <div>
                <nav className="navbar">
                    <input type="checkbox" id="checkbox_toggle" />
                    <label for="checkbox_toggle" class="toggle">&#9776;</label>
                    <img src={logo} alt="not found" className="logo" id="logo"/>
                    <ul className="nav">
                        <li className="nav1">
                            <a href="@" className="a1">  
                                Find Talent
                                <span class="material-symbols-outlined">expand_more</span>
                            </a>
                            <div className="a2">
                                <div className="how">
                                    <div>
                                        <p>Post a job and hire a pro</p>
                                        <p>Talent Marketplace</p>
                                    </div>
                                    <div className="arrow">
                                        <span class="material-symbols-outlined">chevron_right</span>
                                    </div>
                                </div>
                                <div className="how how1">
                                    <div>
                                        <p>Browse and buy projects</p>
                                        <p>Project Catalog</p>
                                    </div>
                                    <div className="arrow">
                                        <span class="material-symbols-outlined">chevron_right</span>
                                    </div>
                                </div>
                                <div className="how">
                                    <div>
                                        <p>Get advice from an industry expert</p>
                                        <p>Consultations</p>
                                    </div>
                                    <div className="arrow arrow1">
                                        <span class="material-symbols-outlined">chevron_right</span>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="nav1">
                            <a href="@" className="a1">
                                Find Work
                                <span class="material-symbols-outlined">expand_more</span>
                            </a>
                            <div className="a2">
                                <div className="a3">
                                    <div className="a4">
                                        <h4>Ways to earn</h4>
                                        <p>Learn why Upwork has the right opportunities for you</p>
                                    </div>
                                    <div className="a4">
                                        <h4>Find work for your skills</h4>
                                        <p>Explore the kind of work available in your field.</p>
                                    </div>
                                    <div className="a4">
                                        <h4>Win work with ads</h4>
                                        <p>Get noticed by the right client</p>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="nav1">
                            <a href="@">
                                Why Upwork
                                <span class="material-symbols-outlined">expand_more</span>
                            </a>
                            <div className="a2">
                                <div className="a3">
                                    <div>
                                        <div className="a5">
                                            <h4>Success Stories</h4>
                                            <p>Discover how teams work strategically and grow together.</p>
                                        </div>
                                        <div className="a5">
                                            <h4>How to hire</h4>
                                            <p>Learn about the different ways to get work done.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="a5">
                                            <h4>Reviews</h4>
                                            <p>See what it's like to collaborate on Upwork.</p>
                                        </div>
                                        <div className="a5">
                                            <h4>How to find work</h4>
                                            <p>Learn about how to grow your independent career.</p>
                                        </div>
                                    </div>
                                    <div className="wher">
                                        <h4>Where work gets done</h4>
                                        &nbsp;
                                        <div className="guide a6">
                                            <p>Guides</p>
                                            <p>Getting Started as a Freelancer</p>
                                        </div>
                                        <br />
                                        <div className="guide a6">
                                            <p>Guides</p>
                                            <p>Growing your Freelancer Career</p>
                                        </div>
                                        <br />
                                        <div className="guide a6">
                                            <p>Guides</p>
                                            <p>Hiring Working with independent Talent</p>
                                        </div>
                                        <a href="@" className="resour">
                                            See Resources
                                            <span class="material-symbols-outlined">arrow_right_alt</span>
                                        </a>
                                    </div>
                                </div>
                            </div>  
                        </li>

                        <li>
                            <a href="@">Enterprise</a>
                        </li>
                    </ul>
                    <div className="nav2">
                        <li className="wall">
                            <input type="search" className="sear" placeholder="Search"/>
                            <hr></hr>
                            <li className="pore">
                                <button className="pore1" id="btn">
                                    Talent
                                    <span class="material-symbols-outlined">expand_more</span>
                                </button>
                                <div className="pore2">
                                    <div className="pore3">
                                        <svg className="svgtag1" xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.772 10.356a3.178 3.178 0 100-6.356 3.178 3.178 0 000 6.356zM3 19.436v-.28c0-3.365 2.633-6.076 5.902-6.076s5.902 2.71 5.902 6.075v.28m1.559-8.171a2.27 2.27 0 100-4.54 2.27 2.27 0 000 4.54zm-.571 2.724h.548c2.559 0 4.66 2.142 4.66 4.75v.698"></path>
                                        </svg>
                                        <div>
                                            <h3>Talent</h3>
                                            <p>Hire Professionals and aejencies</p>
                                        </div>
                                    </div>
                                    <div className="pore3">
                                        <svg className="svgtag1" xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img">
                                            <path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 17.47H5.71A2.71 2.71 0 013 14.76v-9A2.71 2.71 0 015.71 3H12a2.71 2.71 0 012.72 2.71v2M5.71 6.62h6.33M5.71 9.33h2.88"></path>
                                            <path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.57 21a5.43 5.43 0 100-10.86 5.43 5.43 0 000 10.86z"></path>
                                            <path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 13.85l-3.46 3.45-1.39-1.4"></path>
                                        </svg>
                                        <div>
                                            <h3>Projects</h3>
                                            <p>Buy ready-to-start services</p>
                                        </div>
                                    </div>
                                    <div className="pore3">
                                        <svg className="svgtag1" xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img">
                                            <path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17.8 20.2h-12c-1.7 0-3-1.3-3-3v-8c0-1.7 1.3-3 3-3h12c1.7 0 3 1.3 3 3v8c0 1.6-1.4 3-3 3z" clip-rule="evenodd"></path>
                                            <path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7.7 13.9v-3m8.1 3v-3m-13 1.3h18m-7.6-8.4h-3c-.6 0-1 .4-1 1v1.4h5V4.8c0-.6-.4-1-1-1z"></path>
                                        </svg>
                                        <div>
                                            <h3>Jobs</h3>
                                            <p>Apply to jobs posted by clients</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </li>
                        {isAuthenticated ? (
                            <div>
                                <Link
                                    to={"/Lheader"}
                                    onClick={hlogout}>LogOut
                                </Link>
                            </div>
                        ) : (
                            <div>
                                <Link
                                    to={"/Login1"}
                                    onClick={hlogin}>LogIn
                                </Link>  
                            </div>
                        )}
                        <button
                            className="btn1"
                            onClick={() => navigat("/Signup")}>Signup
                        </button>
                    </div>
                </nav>
                <hr className="hr1"></hr>
                <header>
                    <div className="navbar navbar1">
                        <div style={{display:"none"}}>
                            <Link to={"/"}>Home1</Link>
                        </div>
                        <div>
                            <Link to={"/Devlopment"}>Devlopment & It</Link>
                        </div>
                        <div>
                            <Link to={"/AIServices"}>AI Services</Link>
                        </div>
                        <div>
                            <Link to={"/Design&Creative"}>Design & Creative</Link>
                        </div>
                        <div>
                            <Link to={"/Sales&Marketing"}>Sales & Marketing</Link> 
                        </div>
                        <div>
                            <Link to={"/Admin&CustomerSupport"}>Admin & Customer Support</Link>
                        </div>
                        <li className="more">
                            <a href="@" className="more2">More
                                <span class="material-symbols-outlined">expand_more</span>
                            </a>
                            <div className="more1">
                                <p className="a7">Writing & Translation</p>
                                <p>Finance & Accounting</p>
                                <p>HR & Training</p>
                                <p>Legal</p>
                                <p>Engineering & Architecture</p>
                                <p>See all specializations</p>
                            </div>
                        </li>
                    </div>
                </header>
            </div>
        </>
    );
}

export default Header;
